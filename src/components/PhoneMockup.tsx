type Screen =
  | "dashboard"
  | "apps"
  | "history"
  | "categories"
  | "digest"
  | "privacy";

type Size = "hero" | "showcase";

const widthBySize: Record<Size, string> = {
  hero: "w-[min(100%,300px)]",
  showcase: "w-full max-w-[340px]",
};

/** Fixed content height so every screenshot card aligns. */
function frameClass(size: Size) {
  return size === "showcase"
    ? "flex h-[28.5rem] flex-col overflow-hidden rounded-[1.6rem] bg-[#111827]"
    : "flex flex-col overflow-hidden rounded-[1.6rem] bg-[#111827]";
}

function contentPanelClass(size: Size) {
  return size === "showcase"
    ? "flex min-h-0 flex-1 flex-col overflow-hidden"
    : "flex min-h-[24rem] flex-1 flex-col";
}

export function PhoneMockup({
  screen = "dashboard",
  size = "hero",
  className = "",
}: {
  screen?: Screen;
  className?: string;
  size?: Size;
}) {
  return (
    <div
      className={`relative mx-auto ${widthBySize[size]} ${size === "showcase" ? "shrink-0" : ""} ${className}`}
      aria-hidden={screen ? undefined : true}
    >
      <div className="rounded-[2rem] border border-border bg-[#0c1222] p-2.5 shadow-2xl shadow-accent/10">
        <div className={frameClass(size)}>
          <div className="flex shrink-0 items-center justify-between px-4 py-2.5 text-xs text-slate-400">
            <span>9:41</span>
            <span className="rounded-full bg-slate-700/80 px-2.5 py-0.5 text-[11px]">
              NotiPulse
            </span>
          </div>
          <div className={contentPanelClass(size)}>
            {screen === "dashboard" && <DashboardScreen />}
            {screen === "apps" && <AppsScreen />}
            {screen === "history" && <HistoryScreen />}
            {screen === "categories" && <CategoriesScreen />}
            {screen === "digest" && <DigestScreen />}
            {screen === "privacy" && <PrivacyScreen />}
          </div>
          <div className="flex shrink-0 justify-around border-t border-slate-800 px-2 py-2.5 text-[11px] text-slate-500">
            <span className="text-[#6ee7b7]">Home</span>
            <span>Apps</span>
            <span>History</span>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenShell({
  title,
  children,
  compact = false,
}: {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-3 pt-2">
      <p className={`shrink-0 font-semibold text-white ${compact ? "text-xs" : "text-sm"}`}>
        {title}
      </p>
      <div
        className={`mt-2 flex min-h-0 flex-1 flex-col justify-between ${compact ? "gap-1" : "gap-2"}`}
      >
        {children}
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <ScreenShell title="Today" compact>
      <div className="grid shrink-0 grid-cols-2 gap-1.5">
        <StatCard label="Total" value="47" compact />
        <StatCard label="Opened" value="12" compact />
      </div>
      <div className="shrink-0 rounded-xl bg-slate-800/60 p-2">
        <p className="mb-1 text-[11px] text-slate-400">By hour</p>
        <div className="flex h-10 items-end gap-0.5">
          {[3, 5, 8, 12, 9, 6, 4, 7, 11, 8, 5, 3].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#6ee7b7]/80"
              style={{ height: `${h * 8}%` }}
            />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-0.5">
        <AppRow name="Messages" count={18} pct={38} color="#6EE7B7" compact />
        <AppRow name="Social" count={10} pct={21} color="#93C5FD" compact />
        <AppRow name="Email" count={7} pct={15} color="#F9A8D4" compact />
        <AppRow name="Work" count={6} pct={13} color="#FCD34D" compact />
        <AppRow name="News" count={4} pct={9} color="#A5B4FC" compact />
        <AppRow name="Other" count={2} pct={4} color="#94A3B8" compact />
      </div>
    </ScreenShell>
  );
}

function AppsScreen() {
  const apps = [
    ["Messages", 124, "#6EE7B7"],
    ["Instagram", 89, "#F9A8D4"],
    ["Gmail", 56, "#93C5FD"],
    ["Slack", 34, "#FCD34D"],
    ["Twitter", 28, "#A5B4FC"],
    ["Calendar", 12, "#FDE68A"],
  ];
  return (
    <ScreenShell title="Apps">
      {apps.map(([name, count, color]) => (
        <AppRow
          key={name as string}
          name={name as string}
          count={count as number}
          pct={0}
          color={color as string}
          showBar
        />
      ))}
    </ScreenShell>
  );
}

function HistoryScreen() {
  const rows = [
    ["Messages", "New message from Alex", "2m"],
    ["Gmail", "Weekly digest ready", "14m"],
    ["Slack", "#general — standup", "1h"],
    ["Instagram", "3 new interactions", "2h"],
    ["Calendar", "Meeting in 30 min", "3h"],
    ["News", "Breaking: local update", "5h"],
  ];
  return (
    <ScreenShell title="History">
      {rows.map(([app, text, time]) => (
        <div key={app as string} className="rounded-lg bg-slate-800/50 px-2.5 py-2">
          <div className="flex justify-between gap-2 text-xs">
            <span className="font-medium text-slate-200">{app}</span>
            <span className="shrink-0 text-slate-500">{time}</span>
          </div>
          <p className="mt-0.5 truncate text-xs text-slate-400">{text}</p>
        </div>
      ))}
    </ScreenShell>
  );
}

function CategoriesScreen() {
  const cats = [
    ["Messengers", 42, "#6EE7B7"],
    ["Social", 28, "#F9A8D4"],
    ["Email", 15, "#93C5FD"],
    ["Work", 12, "#FCD34D"],
    ["News", 2, "#A5B4FC"],
    ["Other", 1, "#94A3B8"],
  ];
  return (
    <ScreenShell title="Categories">
      <div className="grid flex-1 grid-cols-2 gap-2 content-between">
        {cats.map(([label, val, color]) => (
          <div
            key={label as string}
            className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 p-2"
          >
            <div
              className="mb-1.5 h-9 w-9 rounded-full"
              style={{ background: `${color}33`, border: `2px solid ${color}` }}
            />
            <p className="text-xs text-slate-300">{label}</p>
            <p className="text-sm font-semibold text-white">{val}%</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

function DigestScreen() {
  return (
    <ScreenShell title="Daily digest">
      <div className="flex flex-1 flex-col gap-2">
        <div className="rounded-xl border border-[#6ee7b7]/30 bg-[#6ee7b7]/10 p-3">
          <p className="text-xs font-medium text-[#6ee7b7]">Evening summary</p>
          <p className="mt-1 text-base font-semibold text-white">47 notifications today</p>
        </div>
        <ul className="flex flex-1 flex-col justify-between gap-1.5 text-xs leading-relaxed text-slate-300">
          <li>Peak hour: 6 PM (11 notifications)</li>
          <li>Top app: Messages (38%)</li>
          <li>Opened: 12 · Swiped: 28 · Ignored: 7</li>
          <li>Quieter than your 7-day average</li>
          <li>Tip: try quiet hours after 9 PM</li>
          <li>Archive: 14 past digests saved</li>
        </ul>
      </div>
    </ScreenShell>
  );
}

function PrivacyScreen() {
  const rows = [
    ["Privacy mode", "Do not save notification text", true],
    ["History lock", "Biometric / PIN", true],
    ["Daily digest", "Evening at 8:00 PM", true],
    ["Quiet window", "Soft reminder 22:00–07:00", false],
    ["Auto-cleanup", "Delete records older than 90 days", false],
    ["Export", "CSV and PDF from History", false],
  ] as const;
  return (
    <ScreenShell title="Privacy & settings">
      {rows.map(([label, subtitle, on]) => (
        <ToggleRow key={label} label={label} subtitle={subtitle} on={on} />
      ))}
    </ScreenShell>
  );
}

function StatCard({
  label,
  value,
  compact = false,
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-xl bg-slate-800/60 text-center ${compact ? "p-1.5" : "p-2.5"}`}>
      <p className={compact ? "text-[10px] text-slate-400" : "text-xs text-slate-400"}>{label}</p>
      <p
        className={
          compact ? "text-base font-semibold text-white" : "text-xl font-semibold text-white"
        }
      >
        {value}
      </p>
    </div>
  );
}

function AppRow({
  name,
  count,
  pct,
  color,
  showBar,
  compact = false,
}: {
  name: string;
  count: number;
  pct: number;
  color: string;
  showBar?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-lg bg-slate-800/40 ${compact ? "px-2 py-1" : "px-2.5 py-2"}`}
    >
      <div className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: color }} />
      <span className="min-w-0 flex-1 truncate text-xs text-slate-200">{name}</span>
      <span className="text-xs text-slate-400">{count}</span>
      {pct > 0 && <span className="text-xs text-slate-500">{pct}%</span>}
      {showBar && (
        <div className="h-1.5 w-14 shrink-0 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full rounded-full" style={{ width: "70%", background: color }} />
        </div>
      )}
    </div>
  );
}

function ToggleRow({
  label,
  subtitle,
  on,
}: {
  label: string;
  subtitle: string;
  on: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-800/50 px-2.5 py-2">
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-200">{label}</p>
        <p className="truncate text-[11px] text-slate-500">{subtitle}</p>
      </div>
      <div
        className={`h-5 w-9 shrink-0 rounded-full p-0.5 ${on ? "bg-[#6ee7b7]" : "bg-slate-600"}`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition-transform ${on ? "translate-x-4" : ""}`}
        />
      </div>
    </div>
  );
}

