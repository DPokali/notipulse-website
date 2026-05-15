import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function PlayStoreButton({
  size = "md",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  if (siteConfig.playStorePublished) {
    return (
      <a
        href={siteConfig.googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-play inline-flex items-center gap-2 ${sizeClasses[size]} ${className}`}
        aria-label="Get NotiPulse on Google Play"
      >
        <GooglePlayIcon />
        Get it on Google Play
      </a>
    );
  }

  if (siteConfig.preLaunchUrl) {
    return (
      <Link
        href={siteConfig.preLaunchUrl}
        className={`btn-play inline-flex items-center gap-2 ${sizeClasses[size]} ${className}`}
      >
        Join the waitlist
      </Link>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm text-muted ${className}`}
      title="Coming soon to Google Play"
    >
      <GooglePlayIcon />
      Coming soon on Google Play
    </span>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M3.6 1.8l10.2 8.4L3.6 18.6A1.2 1.2 0 0 1 2.4 17.4V6.6a1.2 1.2 0 0 1 1.2-4.8z" />
      <path d="M14.4 10.8L20.4 6.6a1.2 1.2 0 0 1 1.8 1v9a1.2 1.2 0 0 1-1.8 1l-6-4.2z" opacity="0.85" />
    </svg>
  );
}
