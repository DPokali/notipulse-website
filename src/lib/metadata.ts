import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const siteUrl = siteConfig.url.replace(/\/$/, "");

export function getSiteUrl(path = ""): string {
  return `${siteUrl}${path}`;
}

type BuildMetadataOptions = {
  /** Page title. Use absoluteTitle for the home page full title. */
  title: string;
  description: string;
  path?: string;
  /** If true, do not append the site name via title template. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = getSiteUrl(path);
  const ogImage = getSiteUrl("/opengraph-image");

  const resolvedTitle = absoluteTitle ? { absolute: title } : title;

  return {
    metadataBase: new URL(siteUrl),
    title: resolvedTitle,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title: absoluteTitle ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — local notification analytics for Android`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}

/** Root layout defaults (title template, icons, etc.). */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.defaultTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.defaultDescription,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      images: [
        {
          url: getSiteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — local notification analytics for Android`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      images: [getSiteUrl("/opengraph-image")],
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
    manifest: "/manifest.webmanifest",
  };
}
