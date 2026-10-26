import type { FaqItem } from "@/lib/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary className="cursor-pointer rounded-lg px-5 py-5 text-base font-medium hover:bg-surface-2/50 focus-visible:outline-2 focus-visible:outline-accent sm:px-6 sm:text-lg">
            {item.question}
          </summary>
          <p className="px-5 pb-5 text-base leading-relaxed text-muted sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
