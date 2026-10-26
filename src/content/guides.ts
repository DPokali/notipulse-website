export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
};
export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  answer: string;
  sections: GuideSection[];
  sources: { title: string; url: string }[];
};
const androidHelp = {
  title: "Google Android Help: Control notifications on Android",
  url: "https://support.google.com/android/answer/9079661?hl=en",
};
const androidPrivacy = {
  title: "Android Developers: Android 15 notification privacy changes",
  url: "https://developer.android.com/about/versions/15/behavior-changes-all#otp-redaction",
};

export const guides: Guide[] = [
  {
    slug: "see-dismissed-notifications-android",
    title: "How to see dismissed notifications on Android",
    description: "Swiped away a notification? Check Android history or an existing notification log, and learn what can and cannot be recovered.",
    updated: "2026-10-26",
    answer: "Check Android notification history if it was already enabled, or search a notification logger that was already recording. If neither saved the dismissed notification, installing NotiPulse now cannot recover it. You can still check the original app for the message or update.",
    sections: [
      {
        id: "check-android-history",
        title: "1. Check your phone's notification history",
        paragraphs: ["Open Settings and look under Notifications for Notification history. You can also search Settings for that phrase. Google describes built-in history as a way to find recently dismissed notifications and notifications from the last 24 hours, but availability and menu names vary by device.", "This is useful only when the history feature was already recording. Turning it on after losing an alert does not recreate the earlier history. If you see a switch that is off, enable it for future notifications and continue with the next options."],
        steps: ["Open Android Settings, then Notifications.", "Look for Notification history or search Settings for it.", "If history was enabled, look for the relevant app and approximate time.", "Open the original app to check the underlying message or event."],
      },
      {
        id: "search-existing-log",
        title: "2. Search the history you already saved in NotiPulse",
        paragraphs: ["If NotiPulse had notification access before the alert arrived, open History. Unlock history if prompted, then search for a word from the notification or filter by the app that sent it. If you remember only the sender, start with that app and inspect entries around the time you received the alert.", "For example, if you dismissed a delivery update, filter by the delivery app or search for a word from the saved preview. This searches the local record, not the delivery company's servers. A record is available only if the notification was captured and has not been removed by cleanup.", "Privacy Mode does not save notification titles or message text. If it was enabled when the notification arrived, switching it off later will not restore that text. Android may also restrict sensitive content."],
      },
      {
        id: "nothing-was-saved",
        title: "3. If no notification history was enabled",
        paragraphs: ["Check the source app directly: its inbox, conversations, order updates, activity feed or reminders may still contain the information. Dismissing a notification is not the same as deleting the underlying message. Whether that information is still available depends on the app.", "A newly installed notification logger cannot promise to recover a notification that disappeared before it started recording. Avoid treating an empty history as evidence that no message existed; it means that the history you checked has no available record."],
      },
      {
        id: "save-next-time",
        title: "Set up a history for next time",
        paragraphs: ["Enable your phone's built-in history if it meets your needs. For a searchable log, filters, exports and notification statistics, install NotiPulse and grant notification access. Keep Privacy Mode off only if you want notification text stored locally.", "After setup, use a harmless test notification to check that an entry appears in History before relying on it. Review cleanup settings and remember that deleting app data removes the local archive. NotiPulse is a notification log, not a backup of your conversations."],
      },
    ],
    sources: [androidHelp, androidPrivacy],
  },
  {
    slug: "enable-android-notification-history",
    title: "Android notification history: how to enable and use it",
    description: "Find Android's notification history setting, understand the recent-history window and troubleshoot missing notifications without promising recovery.",
    updated: "2026-10-26",
    answer: "On supported phones, look in Settings > Notifications > Notification history, or search Settings for Notification history. Enable it to record future notifications. The exact path and availability depend on your device; enabling it cannot recreate previously dismissed alerts.",
    sections: [
      {
        id: "enable-history",
        title: "Find and enable the built-in setting",
        paragraphs: ["Android notification history is a built-in way to review recent alerts on supported devices. Google notes that some phones may not have the feature and that settings differ. The path below is a starting point, not a device-specific guarantee."],
        steps: ["Open the Settings app on your phone.", "Open Notifications and look for Notification history.", "If you cannot find it, use Settings search or check your manufacturer's support instructions.", "Enable the history option if available. New entries appear as notifications arrive."],
      },
      {
        id: "read-history",
        title: "Read your recent notification history",
        paragraphs: ["Return to the same screen when you need to review an alert. Google's instructions refer to recently dismissed notifications and a last-24-hours section. Use the app name and time to identify the entry, then check the original app for the complete message or action.", "Notification previews can be shorter than the original message. The history should not be treated as a complete archive of a conversation or a replacement for an app's own inbox. A phone may group or display entries differently from another manufacturer's device."],
      },
      {
        id: "missing-entries",
        title: "Why history might be empty or incomplete",
        paragraphs: ["First check whether the feature was enabled before the notification arrived. If it was off, there may be nothing to show yet. An older alert may also be outside the built-in history window. If the app never posted a notification, there is no notification for a logger to record.", "A missing preview and a missing notification are different problems. A source app may provide only limited text. Android also restricts certain sensitive content accessible to notification listener apps, including detected one-time passwords on Android 15. Do not rely on a third-party log as a password archive."],
      },
      {
        id: "when-to-use-notipulse",
        title: "When a separate notification log is useful",
        paragraphs: ["Built-in history is a sensible first option if you only need to look up a recent alert. Consider NotiPulse when you want to search saved text, filter your local history, export entries to CSV or PDF, or see activity patterns by app and time.", "NotiPulse needs separate notification access. Its history begins when recording is set up; it does not import a lost past from Android. Check its cleanup settings for retention, and leave Privacy Mode off only when you want titles and message text saved. Neither tool guarantees that every notification will contain the full message."],
      },
    ],
    sources: [androidHelp, androidPrivacy],
  },
  {
    slug: "android-notification-history-vs-notipulse",
    title: "Android notification history vs NotiPulse",
    description: "Compare built-in Android history with NotiPulse for dismissed alerts, search, exports, notification statistics and local storage.",
    updated: "2026-10-26",
    answer: "Use Android's built-in history to check recent dismissed notifications on a supported phone. Choose NotiPulse when you want a searchable local notification log, filters, CSV or PDF export and app-by-app statistics. Both depend on what was actually recorded; neither can recover a dismissed notification it never saved.",
    sections: [
      {
        id: "built-in-option",
        title: "When the built-in option is enough",
        paragraphs: ["If you occasionally swipe away an alert and want to check it later the same day, start with your phone's own notification history. It avoids installing another app and granting it access. Google describes recently dismissed notifications and a last-24-hours view, while noting that the feature is not available on every device.", "Check Settings > Notifications or search Settings for Notification history. Built-in interfaces vary, so this comparison does not claim every Android phone has identical search, filters or retention options."],
      },
      {
        id: "notipulse-tools",
        title: "What NotiPulse adds",
        paragraphs: ["NotiPulse combines a notification log with analysis tools. Search saved notification text, filter the history and export records to CSV or PDF. Statistics show activity by app and time so you can investigate which apps interrupt you most. An optional daily digest helps you review those patterns.", "These functions serve different tasks. Search helps when you remember part of a notification. Filters help when you know which app sent it. Export is useful when you want to review your own records elsewhere. Notification counts help you make decisions about settings; NotiPulse does not block notifications for you."],
      },
      {
        id: "privacy-retention",
        title: "Privacy, permissions and retention",
        paragraphs: ["NotiPulse requires Android notification access and stores its notification history locally without requiring an account. Privacy Mode skips saving notification titles and message text, so text search cannot find content that was never stored.", "Review NotiPulse's cleanup settings rather than assuming unlimited retention or a guaranteed number of days. Removing records, clearing app data or uninstalling can remove your local history. Exported files are separate copies under your control; be careful where you share them because notification text may contain personal information."],
      },
      {
        id: "choose",
        title: "Which should you choose?",
        paragraphs: ["Choose built-in history if recent lookup is all you need and your phone supports it. Choose NotiPulse if search, exports and notification statistics are useful enough to justify granting notification access. This guide is published by NotiPulse and describes our app's documented features; it is not an independent benchmark of every Android device.", "If the notification was already lost before either history was enabled, check the source app instead. Installing a different logger will not recreate an unsaved past. Whatever you choose, verify recording with a harmless new notification before relying on it."],
      },
    ],
    sources: [androidHelp],
  },
  {
    slug: "which-apps-send-most-notifications",
    title: "How to find which apps send the most notifications",
    description: "Use Android notification settings and NotiPulse statistics to identify noisy apps, review activity patterns and decide what to change.",
    updated: "2026-10-26",
    answer: "Start in Android's notification settings to review apps and their notification options. For recorded counts and patterns over time, use NotiPulse's app statistics. Compare the same time periods, then change notification settings in Android or the source app; NotiPulse does not block alerts.",
    sections: [
      {
        id: "review-settings",
        title: "Start with your phone's notification settings",
        paragraphs: ["Open Settings > Notifications and review the available app list. The labels and sorting options depend on your device. Android lets you manage notifications for individual apps, and some apps expose categories that can be changed separately.", "If one particular alert is bothering you, use its notification settings to identify which app or category produced it. Do not disable an entire app automatically: an app can send both useful security alerts and optional promotions."],
      },
      {
        id: "record-counts",
        title: "Record and compare notification activity",
        paragraphs: ["After granting notification access, allow NotiPulse to collect a representative period of activity. Use its app statistics to compare notification counts, and examine hourly or weekday patterns. A few minutes immediately after setup will not describe a normal week.", "A count is a count of recorded notifications, not a measure of screen time, attention or productivity. Apps can post and update alerts in different ways. Interpret the numbers as clues to investigate, rather than proof that an app is harmful."],
        steps: ["Set up notification access and confirm that new activity is recorded.", "Choose a consistent period, such as a recorded week.", "Review app-by-app counts and the busiest hours.", "Check which types of alerts are useful before changing settings.", "Review another comparable period after your changes."],
      },
      {
        id: "make-changes",
        title: "Change the notifications you do not need",
        paragraphs: ["Open Android notification settings or the source app's settings and adjust optional categories where available. Keep important alerts enabled. NotiPulse provides the history and statistics; it does not block, mute or modify notifications from other apps.", "Change a small number of settings at a time so you can tell what affected the results. A holiday, a quiet weekend or a busy workday can change notification volume without any setting changes, so compare similar periods."],
      },
      {
        id: "review-privately",
        title: "Review patterns without keeping message text",
        paragraphs: ["If you only want statistics, NotiPulse's Privacy Mode can skip saving notification titles and text while retaining the technical data used for counts. This trades away text search for notifications recorded in that mode.", "Use the optional daily digest for a summary, or export data when you need to review it separately. Review cleanup settings so that your local archive retains only what you need. A quieter notification feed is a personal preference, not a result the app can guarantee."],
      },
    ],
    sources: [androidHelp],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
