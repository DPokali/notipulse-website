import { faqItems } from "./faq";
import { getSiteUrl } from "./metadata";
import { siteConfig } from "./site-config";

type JsonLd = Record<string, unknown>;

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    publisher: organizationJsonLd(),
  };
}

export function organizationJsonLd(): JsonLd {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: getSiteUrl(),
    email: siteConfig.supportEmail,
    logo: getSiteUrl("/icon.svg"),
  };
}

export function softwareApplicationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.defaultDescription,
    url: getSiteUrl(),
    downloadUrl: siteConfig.playStorePublished ? siteConfig.googlePlayUrl : getSiteUrl(),
    featureList: siteConfig.topics.slice(0, 6),
  };
}

export function faqPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getSiteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    inLanguage: "en",
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact NotiPulse",
    description: "Contact NotiPulse support by email.",
    url: getSiteUrl("/contact"),
  };
}
