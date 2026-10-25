import type { ReactNode } from "react";

export function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl text-foreground">{title}</h1>
      <div className="mt-10 space-y-4 text-lg leading-relaxed text-muted-foreground">
        {children ?? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
            Em breve — informações sendo adicionadas.
          </div>
        )}
      </div>
    </section>
  );
}
