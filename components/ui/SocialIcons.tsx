type IconProps = { className?: string };

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.4 9.6h1.7V7.3h-1.7c-1.6 0-2.7 1-2.7 2.7v1.2H9v2.3h1.7V17h2.3v-3.5h1.6l.3-2.3h-1.9v-1c0-.4.2-.6.8-.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsappIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.6c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.6 1.5.7 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .2 0 1-.4 1.5-.4.5-1.4 1-2.3 1-1.9 0-3.9-.9-5.3-2.3-1.4-1.4-2.3-3.2-2.4-3.5-.1-.3-.6-1.3-.6-2.4 0-1.1.6-1.7.8-1.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.2" cy="8.3" r="1.15" fill="currentColor" />
      <path d="M7.4 11.2h1.7V17H7.4z" fill="currentColor" />
      <path
        d="M11.1 11.2h1.6v.9c.4-.6 1.1-1.1 2-1.1 1.6 0 2.4 1 2.4 2.9V17h-1.7v-3c0-1-.4-1.6-1.3-1.6-.9 0-1.4.6-1.4 1.6V17h-1.6z"
        fill="currentColor"
      />
    </svg>
  );
}
