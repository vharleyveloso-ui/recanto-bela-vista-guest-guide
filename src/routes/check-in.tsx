import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/check-in")({
  head: () => pageHead("Check-in", "Horário e orientações de check-in do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Chegada" title="Check-in">
      <div className="rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-soft">
        <p className="text-sm uppercase tracking-widest opacity-80">A partir das</p>
        <p className="font-display text-6xl">14:00</p>
      </div>
      <div className="space-y-4 rounded-3xl bg-card p-6 text-foreground/90 shadow-soft">
        <p>O check-in pode ser realizado a partir das 14h.</p>
        <p>Caso precise de um check-in mais cedo, entre em contato com o anfitrião para verificar disponibilidade.</p>
        <p>Realize seu cadastro com antecedência no sistema da portaria, com foto para reconhecimento facial.</p>
      </div>
    </InfoPage>
  ),
});
