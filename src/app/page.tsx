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
    title: "Notification stats",
    description:
      "By app, hour, and weekday. Views for today, yesterday, week, and all time.",
    icon: "stats",
  },
  {
    title: "Notification history",
    description: "Full log with search, filters, and CSV or PDF export on demand.",
    icon: "history",
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
  "The app starts counting notifications locally.",
  "Open stats, history, and daily summaries.",
  "Configure Privacy Mode, quiet window, categories, and exclusions.",
  "Review weekly trends and adjust habits at your own pace.",
];

const screenshots: { label: string; screen: Parameters<typeof PhoneMockup>[0]["screen"] }[] = [
  { label: "Home dashboard", screen: "dashboard" },
  { label: "Apps stats", screen: "apps" },
  { label: "History", screen: "history" },
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
              Understand which notifications distract you most
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-xl text-muted leading-relaxed">
              NotiPulse shows notification stats by app, time and action — locally on
              your Android device.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayStoreButton size="lg" />
              <Link href="#how-it-works" className="btn-secondary">
                How it works
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              Not a notification blocker · Not affiliated with Google or Android
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute -inset-4 rounded-full bg-accent-bright/15 blur-3xl"
              aria-hidden
            />
            <PhoneMockup screen="dashboard" size="hero" className="relative" />
          </div>
        </div>
      </section>

      <Section id="problem" className="bg-surface/80">
        <blockquote className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card px-6 py-10 text-center text-xl font-medium leading-relaxed shadow-sm sm:px-10 sm:text-2xl">
          <span
            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            The problem
          </span>
          Your phone may feel noisy, but without numbers it is hard to see which apps
          actually create the most interruptions. NotiPulse turns notification noise into
          clear, local stats.
        </blockquote>
      </Section>

      <Section
        id="features"
        eyebrow="Features"
        title="Everything you need to understand notification noise"
        description="Analytics, history, and habits — built for Android and stored on your phone."
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
        title="Six steps to clearer notification habits"
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

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <FaqAccordion items={faqItems} />
      </Section>

      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-bright/10 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <AppBellIcon size={40} className="mx-auto text-accent" />
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Ready to see your numbers?</h2>
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

