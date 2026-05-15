export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${dark ? "bg-surface-2/80" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <header className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-pretty text-lg text-muted leading-relaxed sm:text-xl">
                {description}
              </p>
            )}
          </header>
        )}
        <div className={title || description ? "mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
