import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

function RuleCard({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="font-display text-xl text-foreground">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Regras() {
  return (
    <InfoPage eyebrow="Convivência" title="Regras da casa">
      <p className="text-muted-foreground">
        Para que todos tenham uma ótima estadia, pedimos que as regras abaixo sejam respeitadas.
      </p>
      <div className="grid gap-4 pt-4 sm:grid-cols-2">
        <RuleCard title="Proibido fumar" items={["Não é permitido fumar dentro da acomodação.", "Fume somente nas áreas externas."]} />
        <RuleCard title="Horário de silêncio" items={["Silêncio do condomínio das 22:00 às 8:00."]} />
        <RuleCard title="Festas e eventos" items={["Não são permitidos festas ou eventos."]} />
        <RuleCard title="Visitas" items={["Não é permitida a entrada e permanência de pessoas que não estejam incluídas na reserva."]} />
        <RuleCard title="Animais" items={["Não são permitidos animais de estimação."]} />
        <RuleCard title="Ao sair da casa" items={["Desligue o ar‑condicionado e quaisquer outros aparelhos eletrônicos.", "Garanta que todas as portas e janelas estejam trancadas."]} />
        <div className="sm:col-span-2">
          <RuleCard title="Antes do check‑out" items={["Pedimos a gentileza de recolher o seu lixo antes do check‑out."]} />
        </div>
      </div>
    </InfoPage>
  );
}

export const Route = createFileRoute("/regras")({
  head: () => pageHead("Regras da casa", "Regras da casa do Recanto Bela Vista: silêncio, visitas, animais e mais."),
  component: Regras,
});
