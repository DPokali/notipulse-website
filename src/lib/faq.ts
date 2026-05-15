export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Why does NotiPulse need notification access?",
    answer:
      "Android requires Notification Listener access for any app that reads notifications to build statistics, history, and action tracking. NotiPulse uses this permission only for on-device analytics—not to block or modify other apps' notifications.",
  },
  {
    question: "Does NotiPulse save notification text?",
    answer:
      "By default, yes—title and message text can be stored locally so you can search and review history. This helps with search and exports. You can turn on Privacy Mode at any time to stop saving text.",
  },
  {
    question: "Can I disable saving notification text?",
    answer:
      "Yes. Enable Privacy Mode in Settings. When it is on, NotiPulse still counts notifications and records app names, timestamps, categories, and actions, but does not save notification title or body text.",
  },
  {
    question: "Are notifications uploaded to the cloud?",
    answer:
      "No. Notification data and statistics are stored in a local database on your device. NotiPulse does not upload your notification content to our servers. The NotiPulse app does not use Firebase, crash analytics, or ads SDKs.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. NotiPulse works without registration, sign-in, or a cloud account.",
  },
  {
    question: "Can I delete my data?",
    answer:
      "Yes. Use in-app cleanup settings, clear data from Android app settings, or uninstall NotiPulse to remove all locally stored notification records. See our Data Control page for details.",
  },
  {
    question: "Does NotiPulse block notifications?",
    answer:
      "No. NotiPulse is an analytics and history tool. It does not block, silence, or filter notifications from other apps.",
  },
  {
    question: "Does NotiPulse work on iOS?",
    answer:
      "NotiPulse is currently available for Android only. iOS does not expose the same notification listener APIs.",
  },
  {
    question: "How can I export data?",
    answer:
      "Open History in the app, apply filters if needed, then export to CSV or PDF. Exports are generated on your device when you choose to export.",
  },
  {
    question: "What is the daily digest?",
    answer:
      "An optional evening summary notification with stats and tips about your notification patterns. You can set the time, read past digests in the on-device archive, and turn it off anytime.",
  },
];
