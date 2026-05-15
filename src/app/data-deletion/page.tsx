import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { dataDeletionContent } from "@/content/legal";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";

const description =
  "Delete NotiPulse notification data stored locally on your Android device — clear history, stats, and app settings.";

export const metadata = buildMetadata({
  title: "Data Control",
  description,
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={[
          webPageJsonLd({ name: "Data Control", description, path: "/data-deletion" }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Data Control", path: "/data-deletion" },
          ]),
        ]}
      />
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {dataDeletionContent.title}
      </h1>
      <p className="mt-4 text-muted leading-relaxed">{dataDeletionContent.intro}</p>
      <ol className="mt-10 space-y-6">
        {dataDeletionContent.steps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-semibold">
              {i + 1}. {step.title}
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-muted">
        <Link href="/privacy" className="text-accent hover:underline">
          Privacy Policy
        </Link>
        {" · "}
        <Link href="/contact" className="text-accent hover:underline">
          Contact
        </Link>
      </p>
    </div>
  );
}
