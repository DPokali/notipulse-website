/**
 * Central site configuration. Update before production deploy.
 */
export const siteConfig = {
  name: "NotiPulse",
  tagline: "Notification analytics for Android",
  domain: "notipulse.site",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://notipulse.site",
  supportEmail: "notipulse.app@gmail.com",
  copyrightYear: 2026,

  defaultTitle: "NotiPulse — Notification Log & Stats for Android",
  defaultDescription:
    "Track notification history, app stats and daily noise on Android. NotiPulse keeps notification insights local and helps you understand distractions.",

  /** Set to true and add googlePlayUrl when the app is live on Play Store. */
  playStorePublished: true,
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.denpokali.notipulse",

  /** Optional waitlist / pre-launch link when playStorePublished is false. */
  preLaunchUrl: "",

  author: {
    name: "Den Pokalitsyn",
    bio: "Independent developer behind NotiPulse — privacy-friendly Android tools.",
    linkedIn: "https://www.linkedin.com/in/den-pokalitsyn/",
  },

  social: {
    linkedIn: "https://www.linkedin.com/in/den-pokalitsyn/",
  },

  /** Used in copy and structured data — not as a meta keywords tag. */
  topics: [
    "notification log",
    "notification history",
    "notification stats",
    "notification tracker",
    "Android notification analytics",
    "digital wellbeing",
    "notification noise",
    "phone distractions",
  ],
} as const;
