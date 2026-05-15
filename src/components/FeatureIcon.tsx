const icons = {
  stats: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M4 19V5M10 19V9M16 19v-6M22 19V3"
    />
  ),
  history: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M8 6h12M8 12h12M8 18h8M4 6h.01M4 12h.01M4 18h.01"
    />
  ),
  actions: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
    />
  ),
  categories: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  ),
  digest: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  ),
  privacy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 0v2m-7 8h14a2 2 0 002-2v-4.382a2 2 0 00-1.106-1.789l-5.894-2.947a2 2 0 00-1.788 0L3.106 14.83A2 2 0 002 16.618V19a2 2 0 002 2z"
    />
  ),
} as const;

export type FeatureIconName = keyof typeof icons;

export function FeatureIcon({
  name,
  className = "",
}: {
  name: FeatureIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      {icons[name]}
    </svg>
  );
}
