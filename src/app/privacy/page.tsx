import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/LegalPage";
import { privacySections } from "@/content/legal";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";

const description =
  "How NotiPulse handles notification access, on-device storage, Privacy Mode, exports, and your choices on Android.";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={[
          webPageJsonLd({ name: "Privacy Policy", description, path: "/privacy" }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <LegalPage
        title="Privacy Policy"
        lastUpdated="May 15, 2026"
        sections={privacySections}
      />
    </div>
  );
}
