import Link from "next/link";

type Section = {
  id: string;
  title: string;
  body: string;
  list?: string[];
};

export function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: Section[];
}) {
  return (
    <article className="prose-legal mx-auto max-w-3xl">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
        <p className="mt-4 text-sm text-muted">
          <Link href="/">Home</Link>
          {" · "}
          <Link href="/contact">Contact</Link>
        </p>
      </header>
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
