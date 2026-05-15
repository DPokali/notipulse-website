import Link from "next/link";
import { AppIconMark } from "@/components/AppBellIcon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

const description =
  "Email NotiPulse support for setup help, bugs, local data questions, and feedback.";

export const metadata = buildMetadata({
  title: "Contact",
  description,
  path: "/contact",
});

const topics = [
  { label: "General question", subject: "General question" },
  { label: "Bug report", subject: "Bug report" },
  {
    label: "Setup & notification access",
    subject: "Setup and notification access",
  },
  {
    label: "Privacy Mode & local storage",
    subject: "Privacy Mode and local storage",
  },
  {
    label: "Clear data on my device",
    subject: "Clear local data on device",
  },
  { label: "Feature request", subject: "Feature request" },
];

export default function ContactPage() {
  const defaultMailto = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent("NotiPulse support")}`;

  return (
    <div className="relative overflow-hidden">
      <JsonLd
        data={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <div className="pointer-events-none absolute inset-0 mesh-hero opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3">
            <AppIconMark size={48} />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact us</h1>
              <p className="mt-1 text-sm text-muted">We typically reply within a few business days</p>
            </div>
          </div>

          <p className="mt-6 text-muted leading-relaxed">
            Questions about the app, permissions, or data on your phone — email us directly. No
            forms, no accounts, and nothing stored on our servers.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-[#0c1222]/5">
            <div className="border-b border-border bg-[#0c1222] px-6 py-8 text-center sm:px-10">
              <p className="text-sm font-medium text-[#6ee7b7]/90">Support email</p>
              <a
                href={defaultMailto}
                className="mt-3 block break-all text-xl font-semibold text-[#6ee7b7] hover:underline sm:text-2xl"
              >
                {siteConfig.supportEmail}
              </a>
            </div>
            <div className="flex flex-col items-stretch gap-4 px-6 py-8 sm:items-center sm:px-10">
              <a href={defaultMailto} className="btn-primary w-full justify-center sm:w-auto">
                Write an email
              </a>
              <p className="text-center text-xs text-muted">Opens your default mail app</p>
            </div>
          </div>

          <aside className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-7">
            <h2 className="text-lg font-semibold">About the author</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.author.bio}
            </p>
            <a
              href={siteConfig.author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              {siteConfig.author.name} on LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </aside>

          <div className="mt-12">
            <h2 className="text-lg font-semibold">Suggested subjects</h2>
            <p className="mt-2 text-sm text-muted">
              Pick a topic — we pre-fill the subject line. Notification data lives only on your
              device; we cannot access or delete it remotely.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {topics.map((topic) => {
                const href = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(`NotiPulse: ${topic.subject}`)}`;
                return (
                  <li key={topic.label}>
                    <a
                      href={href}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:border-accent/40 hover:bg-surface"
                    >
                      <span>{topic.label}</span>
                      <span className="text-accent" aria-hidden>
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm text-muted">
              For bugs, include your Android version and NotiPulse app version if you can. To
              wipe data on your phone, see{" "}
              <Link href="/data-deletion" className="text-accent hover:underline">
                Data control
              </Link>{" "}
              or Android Settings → Apps → NotiPulse.
            </p>
          </div>

          <p className="mt-12 text-sm text-muted">
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
