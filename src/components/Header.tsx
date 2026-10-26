"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PlayStoreButton } from "./PlayStoreButton";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#features", label: "Features", match: "/" },
  { href: "/#privacy", label: "Privacy", match: "/" },
  { href: "/#faq", label: "FAQ", match: "/" },
  { href: "/guides", label: "Guides", match: "/guides" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = link.match !== "/" && (pathname === link.match || pathname.startsWith(`${link.match}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <PlayStoreButton size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            className="btn-ghost inline-flex md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border/60 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
