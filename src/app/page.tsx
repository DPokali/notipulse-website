import Link from "next/link";
import { AppBellIcon, AppIconMark } from "@/components/AppBellIcon";
import { FeatureIcon, type FeatureIconName } from "@/components/FeatureIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { Section } from "@/components/Section";
import { faqItems } from "@/lib/faq";
import {
  faqPageJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { guides } from "@/content/guides";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

const features: {
  title: string;
  description: string;
  icon: FeatureIconName;
}[] = [
  {
    title: "Notification history",
    description: "Search saved notification text, filter your log and export to CSV or PDF.",
    icon: "history",
  },
  {
    title: "Notification stats",
    description: "See activity by app, hour and weekday, with views for different periods.",
    icon: "stats",
  },
  {
    title: "Actions analytics",
    description: "See how often notifications were opened, swiped away, or ignored.",
    icon: "actions",
  },
  {
    title: "Categories",
    description:
      "Messengers, social, email, work, and more—with automatic classification.",
    icon: "categories",
  },
  {
    title: "Daily digest",
    description:
      "Evening summary with tips, on-device archive, and configurable time.",
    icon: "digest",
  },
  {
    title: "Privacy mode",
    description:
      "Skip saving notification text. Stats stay on your device—no account, no cloud.",
    icon: "privacy",
  },
];

const benefits = [
  { title: "Awareness", text: 'Real counts instead of "my phone never stops".' },
  { title: "Focus", text: "Spot peak hours and noisy apps." },
  { title: "Control", text: "Exclude apps from stats and set weekly balance goals." },
  { title: "Habits", text: "Daily digest and archive for reflection over time." },
  { title: "Transparency", text: "History and export for deeper pattern analysis." },
  { title: "Privacy", text: "On-device storage — no account and no cloud uploads." },
];

const steps = [
  "Install NotiPulse from Google Play.",
  "Allow notification access in Android settings.",
  "Keep Privacy Mode off if you want to save notification text.",
  "New notifications are recorded locally while access is active.",
  "Open History to search saved text or filter by app.",
  "Review cleanup settings, statistics and optional daily summaries.",
];

const screenshots: { label: string; screen: Parameters<typeof PhoneMockup>[0]["screen"] }[] = [
  { label: "Notification history", screen: "history" },
  { label: "Apps stats", screen: "apps" },
  { label: "Home dashboard", screen: "dashboard" },
  { label: "Categories", screen: "categories" },
  { label: "Daily digest", screen: "digest" },
  { label: "Privacy settings", screen: "privacy" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[websiteJsonLd(), softwareApplicationJsonLd(), faqPageJsonLd()]}
      />
      <section className="relative overflow-hidden border-b border-border/60 mesh-hero">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="badge mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Notification data stays on your device
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Save and search your Android notification history
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-xl text-muted leading-relaxed">
              Find saved notifications you swiped away, search their text and see which
              apps interrupt you most. Your notification history stays on your device.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayStoreButton size="lg" />
              <Link href="#how-it-works" className="btn-secondary">
                How it works
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              History starts after setup. Previously dismissed notifications that were never saved cannot be recovered.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute -inset-4 rounded-full bg-accent-bright/15 blur-3xl"
              aria-hidden
            />
            <figure className="relative w-full max-w-[300px]"><PhoneMockup screen="history" size="hero" /><figcaption className="mt-4 text-center text-xs text-muted">Illustrative history preview with sample data</figcaption></figure>
          </div>
        </div>
      </section>

      <Section id="problem" eyebrow="Dismissed a notification?" title="Find it in the history you saved" className="bg-surface/80">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          <p>A delivery update, a reminder or a message preview can disappear with one swipe. If NotiPulse was already saving notifications, open History and search for the text or filter by app.</p>
          <p>Not installed when it happened? Check Android&apos;s built-in history if it was already enabled. Installing a logger now cannot bring back a dismissed notification it never recorded.</p>
          <Link href="/guides/see-dismissed-notifications-android" className="inline-block font-semibold text-accent underline underline-offset-4">See what you can do after dismissing a notification</Link>
        </div>
      </Section>

      <Section
        id="features"
        eyebrow="Features"
        title="Your notification log, search and statistics"
        description="Review saved notifications first. Explore your notification habits when you need more detail."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="feature-card group">
              <div className="icon-tile">
                <FeatureIcon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{f.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="privacy" dark>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-[#0c1222] to-[#111827] p-8 text-[#f1f5f9] shadow-xl sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <AppIconMark size={56} className="shadow-lg shadow-black/30" />
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Built for trust</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                NotiPulse requires Android notification access to count notifications, show
                history and build app-by-app statistics. The app may read notification data
                and, unless Privacy Mode is enabled, notification text. Notification data is
                stored on your device. Privacy Mode skips saving notification text.
              </p>
              <p className="mt-4 text-base text-slate-400">
                Notification content is not uploaded to our servers. No third-party analytics
                or ads SDKs in the current app release.
              </p>
              <Link
                href="/privacy"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#6ee7b7] hover:underline"
              >
                Read Privacy Policy
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Benefits" title="Turn insight into calmer days">
        <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-accent">{b.title}</p>
              <p className="mt-2 text-base leading-relaxed text-muted">{b.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="Start saving your notification history"
        dark
      >
        <ol className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0c1222] text-base font-bold text-[#6ee7b7]">
                {i + 1}
              </span>
              <span className="pt-2 text-base leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="screenshots"
        eyebrow="Screenshots"
        title="See NotiPulse in action"
        description="Illustrative previews of core screens (English UI)."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map(({ label, screen }) => (
            <figure
              key={label}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-[34rem] items-center justify-center py-2">
                <PhoneMockup screen={screen} size="showcase" />
              </div>
              <figcaption className="mt-4 text-center text-base font-semibold text-foreground">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="android-history" eyebrow="Built-in history or NotiPulse?" title="Choose the history that fits your needs" dark>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="feature-card"><h3 className="text-xl font-semibold">Android notification history</h3><p className="mt-4 text-muted">Start with your phone&apos;s built-in history to check recent dismissed notifications. Availability and settings vary by device, and history needs to have been enabled.</p></article>
          <article className="feature-card"><h3 className="text-xl font-semibold">NotiPulse</h3><p className="mt-4 text-muted">Build a searchable local log with filters and CSV or PDF export. See notification counts by app and time. Check cleanup settings for retention; text is not saved in Privacy Mode.</p></article>
        </div>
        <p className="mt-8 text-center"><Link href="/guides/android-notification-history-vs-notipulse" className="font-semibold text-accent underline underline-offset-4">Compare Android history and NotiPulse</Link></p>
      </Section>

      <Section id="guides" eyebrow="Practical guides" title="Get more from your notification history">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => <article className="feature-card" key={guide.slug}><h3 className="text-xl font-semibold"><Link className="hover:text-accent" href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><p className="mt-3 text-muted">{guide.description}</p><Link className="mt-5 inline-block font-semibold text-accent" href={`/guides/${guide.slug}`}>Read guide →</Link></article>)}
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <FaqAccordion items={faqItems} />
      </Section>

      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-bright/10 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <AppBellIcon size={40} className="mx-auto text-accent" />
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Start your notification history today</h2>
          <p className="mt-3 text-muted">
            Free on Android. All features included. No subscription.
          </p>
          <div className="mt-8 flex justify-center">
            <PlayStoreButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}

