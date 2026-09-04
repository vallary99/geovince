"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Tell us a little more (at least 10 characters).";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam check — real users never fill this hidden field.
    if (String(formData.get("company_website") || "").trim().length > 0) {
      setStatus("success");
      return;
    }

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-forest bg-forest/5 p-8">
        <p className="font-display text-xl font-semibold uppercase text-forest">Message sent</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Thank you — a member of the Geovince team will be in touch shortly to arrange the next
          step.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-forest";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input id="name" name="name" type="text" className={`mt-2 ${inputClass}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rust">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input id="company" name="company" type="text" className={`mt-2 ${inputClass}`} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" className={`mt-2 ${inputClass}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rust">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" className={`mt-2 ${inputClass}`} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-ink">
          Solution you&apos;re interested in
        </label>
        <select id="service" name="service" defaultValue="" className={`mt-2 ${inputClass}`}>
          <option value="">Select an option</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`mt-2 ${inputClass}`}
          placeholder="Tell us about your site and what you're hoping to solve."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-rust">{errors.message}</p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="border border-rust/40 bg-rust/5 px-4 py-3 text-sm text-rust">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-forest px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
