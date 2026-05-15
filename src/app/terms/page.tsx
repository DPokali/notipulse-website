import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/LegalPage";
import { termsSections } from "@/content/legal";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";

const description =
  "Terms for using the NotiPulse Android app and website, including notification access, local data, exports, and limitations.";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={[
          webPageJsonLd({ name: "Terms of Use", description, path: "/terms" }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
          ]),
        ]}
      />
      <LegalPage title="Terms of Use" lastUpdated="May 15, 2026" sections={termsSections} />
    </div>
  );
}
