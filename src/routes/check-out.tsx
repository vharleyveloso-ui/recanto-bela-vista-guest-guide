import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/check-out")({
  head: () => pageHead("Check-out", "Horário e orientações de check-out do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Saída" title="Check-out">
      <div className="rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-soft">
        <p className="text-sm uppercase tracking-widest opacity-80">Até as</p>
        <p className="font-display text-6xl">11:00</p>
        <p className="mt-2 text-sm opacity-80">Flexível, mediante disponibilidade</p>
      </div>
      <div className="space-y-4 rounded-3xl bg-card p-6 text-foreground/90 shadow-soft">
        <p>O check-out deve ser feito até as 11h.</p>
        <p>Por favor, não exceda o horário, pois precisamos preparar o ambiente para novos hóspedes.</p>
      </div>
    </InfoPage>
  ),
});
