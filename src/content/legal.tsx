import { siteConfig } from "@/lib/site-config";

export const privacySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: `This Privacy Policy explains how ${siteConfig.name} ("we", "us") handles information when you use the ${siteConfig.name} Android application and this website. We designed ${siteConfig.name} to keep notification analytics on your device.`,
  },
  {
    id: "what-notipulse-does",
    title: "2. What NotiPulse does",
    body: `${siteConfig.name} is a notification analytics app. It counts notifications, shows statistics by app and time, keeps a local notification history, supports categories, daily digest summaries, and optional CSV/PDF export. It is not a notification blocker and is not affiliated with Google or Android.`,
  },
  {
    id: "notification-access",
    title: "3. Notification access",
    body: `Android Notification Listener access is required for core functionality. With your permission, the app can read notification metadata and content as notifications arrive so it can count them, display history, and track actions (opened, swiped, ignored). You grant this permission in Android system settings and can revoke it at any time.`,
  },
  {
    id: "data-processed",
    title: "4. What data may be processed",
    body: `Depending on your settings, the app may store locally on your device:`,
    list: [
      "App/package name and display name",
      "Notification timestamp",
      "Notification title and text (when Privacy Mode is off)",
      "Channel ID and auto-assigned category",
      "Interaction status (posted, opened, swiped, ignored)",
      "Digest summaries and archive entries",
      "Your preferences (privacy mode, themes, goals, exclusions)",
    ],
  },
  {
    id: "privacy-mode",
    title: "5. Notification content and Privacy Mode",
    body: `By default, Privacy Mode is off and notification title and message text may be saved locally to support search, history, and exports. When you enable Privacy Mode in app Settings, ${siteConfig.name} does not save notification title or body text. Statistics, app names, timestamps, categories, and action counts continue to work.`,
  },
  {
    id: "local-storage",
    title: "6. Local storage",
    body: `Notification records and statistics are stored in an on-device database. We do not operate a cloud account for your notification data and do not upload notification content to our servers. The Android app does not include Firebase, crash analytics, advertising SDKs, or similar third-party tracking in the current release.`,
  },
  {
    id: "email-contact",
    title: "7. Support email",
    body: `If you email ${siteConfig.supportEmail}, we receive the information you choose to send (such as your email address, subject, and message) so we can respond. This is separate from your on-device notification database. We use it only to handle your request.`,
  },
  {
    id: "analytics",
    title: "8. Analytics and third-party SDKs (app)",
    body: `The ${siteConfig.name} Android app, as currently distributed, does not use third-party analytics, crash reporting, or advertising SDKs. This website does not use advertising trackers or non-essential analytics cookies. Basic server logs may be kept by our hosting provider for security and operations.`,
  },
  {
    id: "sharing",
    title: "9. Data sharing",
    body: `We do not sell your notification data. We do not share notification content with third parties for advertising. We may disclose information if required by law or to protect our rights.`,
  },
  {
    id: "retention",
    title: "10. Data retention",
    body: `Notification data remains on your device until you delete it through in-app cleanup, clear app storage, or uninstall the app. You can configure automatic deletion of older records in the app. Support emails are retained as long as needed to respond and for reasonable business records.`,
  },
  {
    id: "deletion",
    title: "11. Data deletion",
    body: `You can delete notification data on your device at any time. See our Data Control page for steps. Uninstalling the app removes the local database. For privacy or data questions, email ${siteConfig.supportEmail}.`,
  },
  {
    id: "choices",
    title: "12. Your choices",
    body: `You can enable Privacy Mode, exclude apps from statistics, lock History with device authentication, turn off the daily digest, revoke notification access, export or delete data, and uninstall the app.`,
  },
  {
    id: "children",
    title: "13. Children's privacy",
    body: `${siteConfig.name} is not directed at children under 13 (or the minimum age in your region). We do not knowingly collect personal information from children through the app or website.`,
  },
  {
    id: "international",
    title: "14. International users",
    body: `The app processes notification data locally on your device. If you contact us by email, your message may be processed where our email and hosting providers operate. By using the service, you understand that support communications may cross borders.`,
  },
  {
    id: "changes",
    title: "15. Changes to this policy",
    body: `We may update this Privacy Policy from time to time. We will post the new version on this page and update the "Last updated" date. Material changes may also be communicated in the app or on this site where appropriate.`,
  },
  {
    id: "contact",
    title: "16. Contact",
    body: `Privacy questions: ${siteConfig.supportEmail}. Contact page: ${siteConfig.url}/contact.`,
  },
];

export const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: `By downloading, installing, or using ${siteConfig.name}, or by using this website, you agree to these Terms of Use. If you do not agree, do not use the app or site.`,
  },
  {
    id: "description",
    title: "2. Description of the service",
    body: `${siteConfig.name} provides local notification analytics, history, statistics, categories, daily digest summaries, and optional export features for Android devices. The website provides product information, legal documents, and a contact channel.`,
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    body: `You must be able to form a binding contract in your jurisdiction and comply with applicable laws. You are responsible for ensuring your use of the app is permitted on your device.`,
  },
  {
    id: "notification-access",
    title: "4. Notification access and user responsibility",
    body: `You control whether to grant Notification Listener access in Android settings. You are responsible for understanding what data the app may read and store on your device, including notification text when Privacy Mode is disabled. You are responsible for securing your device and any exports you create.`,
  },
  {
    id: "local-data",
    title: "5. Local data and exports",
    body: `Data is stored on your device unless you choose to export it. CSV and PDF exports are generated locally when you request them. You are solely responsible for how you store, share, or delete exported files.`,
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable use",
    body: `Use ${siteConfig.name} only for lawful personal analytics and digital wellbeing insight. Do not misuse the app to monitor others without authorization or for unlawful surveillance.`,
  },
  {
    id: "prohibited",
    title: "7. Prohibited use",
    body: `You may not reverse engineer the app except where permitted by law, interfere with the service, use it to violate others' privacy rights, attempt unauthorized access to our systems, or abuse our support email for spam.`,
  },
  {
    id: "no-advice",
    title: "8. No professional advice",
    body: `${siteConfig.name} does not provide medical, psychological, legal, or financial advice. Statistics and tips are informational only.`,
  },
  {
    id: "no-guarantee",
    title: "9. No guarantee of productivity or wellbeing outcomes",
    body: `We do not guarantee reduced stress, improved focus, productivity gains, or habit change. Results depend on your choices and device usage.`,
  },
  {
    id: "third-party",
    title: "10. Third-party services and Android system settings",
    body: `${siteConfig.name} depends on Android and device manufacturer behavior. Features may vary by OS version. Google Play distribution is subject to Google's terms. System settings may affect notification delivery and listener behavior.`,
  },
  {
    id: "ip",
    title: "11. Intellectual property",
    body: `The app, website, branding, and content are owned by the developer or licensors. You receive a limited, non-exclusive license to use the app for personal purposes in accordance with these terms.`,
  },
  {
    id: "feedback",
    title: "12. User feedback",
    body: `If you send feedback or suggestions, you grant us the right to use them without obligation to compensate you, to improve the product.`,
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers",
    body: `THE APP AND WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.`,
  },
  {
    id: "liability",
    title: "14. Limitation of liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF LOCAL DATA DUE TO APP DELETION, DEVICE RESET, OS UPDATES, OR ANDROID LIMITATIONS. OUR TOTAL LIABILITY FOR CLAIMS RELATING TO THE SERVICE IS LIMITED TO THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS (OR ZERO IF THE APP IS FREE).`,
  },
  {
    id: "termination",
    title: "15. Termination",
    body: `You may stop using the app at any time by uninstalling it. We may discontinue or modify the service. Provisions that by nature should survive will survive termination.`,
  },
  {
    id: "changes-terms",
    title: "16. Changes to the terms",
    body: `We may update these terms. Continued use after changes constitutes acceptance of the updated terms where permitted by law.`,
  },
  {
    id: "governing-law",
    title: "17. Governing law",
    body: `[PLACEHOLDER — To be confirmed by the product owner before final legal review.] These terms will be governed by the laws of the jurisdiction designated by the developer, without regard to conflict-of-law rules.`,
  },
  {
    id: "contact-terms",
    title: "18. Contact",
    body: `Questions about these terms: ${siteConfig.supportEmail}.`,
  },
];

export const dataDeletionContent = {
  title: "Data control & deletion",
  intro: `${siteConfig.name} stores notification data locally on your Android device. There is no online account and no server-side copy of your notification history to delete.`,
  steps: [
    {
      title: "Delete specific data in the app",
      body: "Use in-app data cleanup or retention settings (if available) to remove older notification records while keeping the app installed.",
    },
    {
      title: "Clear app storage",
      body: "Android Settings → Apps → NotiPulse → Storage → Clear storage. This removes the local database and preferences on that device.",
    },
    {
      title: "Uninstall the app",
      body: "Uninstalling NotiPulse removes all locally stored notification data associated with the app on that device.",
    },
    {
      title: "Exported files",
      body: "CSV or PDF files you exported are saved where you chose to save them (Downloads, Files, cloud drives). Delete those files manually.",
    },
    {
      title: "Contact form messages",
      body: `Email ${siteConfig.supportEmail} if you need help with a privacy or data-related request.`,
    },
  ],
};
