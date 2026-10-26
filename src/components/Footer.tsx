import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";
import { PlayStoreButton } from "./PlayStoreButton";

const footerLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/data-deletion", label: "Data control" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Search saved Android notifications, find dismissed alerts and understand
              your notification activity. Your history stays on your device.
            </p>
            <div className="mt-6">
              <PlayStoreButton size="sm" />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Legal</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Guides &amp; support</h2>
            <Link href="/guides" className="mt-4 inline-block text-sm text-accent">Android notification guides</Link>
            <p className="mt-4 text-sm text-muted">
              Questions, bugs, or privacy requests:
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-border/60 pt-8 text-center text-xs text-muted">
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          Not affiliated with Google or Android.
        </p>
      </div>
    </footer>
  );
}
