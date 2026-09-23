import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  company_website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Very light in-memory rate limiting per server instance. This is a best-effort
// deterrent for a marketing site, not a substitute for a dedicated WAF/service.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const history = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  history.push(now);
  submissions.set(ip, history);
  return history.length > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept so bots don't learn the field is checked.
  if (payload.company_website && payload.company_website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const message = (payload.message || "").trim();

  if (name.length < 2 || !isValidEmail(email) || message.length < 10) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
  }

  const sanitized = {
    name: name.slice(0, 200),
    company: (payload.company || "").trim().slice(0, 200),
    email: email.slice(0, 200),
    phone: (payload.phone || "").trim().slice(0, 60),
    service: (payload.service || "").trim().slice(0, 200),
    message: message.slice(0, 5000),
  };

  // Deliver the enquiry. GEOVINCE_CONTACT_EMAIL_ENDPOINT / GEOVINCE_CONTACT_API_KEY
  // should be set as environment variables and point at the client's chosen email
  // provider (e.g. Resend, Postmark, SendGrid). No secrets are hard-coded here.
  const endpoint = process.env.GEOVINCE_CONTACT_EMAIL_ENDPOINT;
  const apiKey = process.env.GEOVINCE_CONTACT_API_KEY;

  try {
    if (endpoint && apiKey) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          subject: `New enquiry from ${sanitized.name}, Geovince website`,
          ...sanitized,
        }),
      });

      if (!res.ok) {
        throw new Error("Email provider rejected the request.");
      }
    } else {
      // No email provider configured yet, log server-side so the enquiry is not lost
      // during development/staging. Configure the env vars above before launch.
      console.info("[Geovince contact form submission]", sanitized);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to deliver contact form submission", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
