import Link from "next/link";
import { guides } from "@/content/guides";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata = buildMetadata({
  title: "Android notification history guides",
  description: "Learn how to find dismissed notifications, enable Android notification history and use NotiPulse for search, exports and notification statistics.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])} />
      <p className="text-sm font-semibold text-accent">NOTIFICATION GUIDES</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Find lost alerts. Understand your notifications.</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted">Practical instructions for Android notification history, with clear explanations of what can be saved and what cannot be recovered.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <article className="feature-card" key={guide.slug}>
            <h2 className="text-2xl font-semibold"><Link href={`/guides/${guide.slug}`} className="hover:text-accent">{guide.title}</Link></h2>
            <p className="mt-4 text-muted">{guide.description}</p>
            <Link href={`/guides/${guide.slug}`} className="mt-6 inline-block font-semibold text-accent">Read guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
