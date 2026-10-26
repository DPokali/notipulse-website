import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/content/guides";
import { buildMetadata, getSiteUrl } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/JsonLd";
import { PlayStoreButton } from "@/components/PlayStoreButton";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  return buildMetadata({ title: guide.title, description: guide.description, path: `/guides/${guide.slug}` });
}
export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const path = `/guides/${guide.slug}`;
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path }]),
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: guide.title, description: guide.description,
          dateModified: guide.updated, mainEntityOfPage: getSiteUrl(path),
          author: { "@type": "Organization", name: "NotiPulse", url: getSiteUrl() },
          publisher: { "@type": "Organization", name: "NotiPulse", url: getSiteUrl() },
          inLanguage: "en",
        },
      ]} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-muted"><Link href="/">Home</Link><span aria-hidden>/</span><Link href="/guides">Guides</Link></nav>
      <h1 className="mt-7 text-balance text-3xl font-bold tracking-tight sm:text-5xl">{guide.title}</h1>
      <p className="mt-5 text-sm text-muted">By NotiPulse · Updated <time dateTime={guide.updated}>26 October 2026</time></p>
      <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 p-6 sm:p-8">
        <h2 className="text-lg font-semibold">Quick answer</h2>
        <p className="mt-3 text-lg leading-relaxed">{guide.answer}</p>
      </div>
      <nav aria-label="On this page" className="my-10 rounded-2xl border border-border p-6">
        <p className="font-semibold">On this page</p>
        <ul className="mt-3 space-y-2">{guide.sections.map((section) => <li key={section.id}><a className="text-accent underline-offset-4 hover:underline" href={`#${section.id}`}>{section.title}</a></li>)}</ul>
      </nav>
      {guide.sections.map((section) => (
        <section id={section.id} key={section.id} className="mt-12 scroll-mt-28">
          <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">{paragraph}</p>)}
          {section.steps && <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg text-muted">{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
        </section>
      ))}
      <aside className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Build your history for future notifications</h2>
        <p className="my-5 text-muted">NotiPulse saves notifications after setup. Search requires saved text; Privacy Mode skips saving it. Previously dismissed notifications that were never recorded cannot be recovered.</p>
        <PlayStoreButton />
      </aside>
      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Sources and scope</h2>
        <p className="mt-3 text-sm text-muted">Android instructions are based on the official guidance below. Menu paths vary by manufacturer. This guide is published by NotiPulse, not an independent device test.</p>
        <ul className="mt-4 space-y-2">{guide.sources.map((source) => <li key={source.url}><a href={source.url} className="text-accent underline underline-offset-4">{source.title}</a></li>)}</ul>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Related guides</h2>
        <ul className="mt-4 space-y-3">{guides.filter((item) => item.slug !== guide.slug).map((item) => <li key={item.slug}><Link href={`/guides/${item.slug}`} className="text-accent underline underline-offset-4">{item.title}</Link></li>)}</ul>
      </section>
    </article>
  );
}
