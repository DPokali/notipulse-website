import Link from "next/link";
import { AppIconMark } from "./AppBellIcon";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight text-foreground ${className}`}
      aria-label="NotiPulse home"
    >
      <AppIconMark size={36} />
      <span>NotiPulse</span>
    </Link>
  );
}
