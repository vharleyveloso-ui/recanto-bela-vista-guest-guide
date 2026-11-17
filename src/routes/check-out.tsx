import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/check-out")({
  head: () => pageHead("Check-out", "Horário e orientações de check-out do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Saída" title="Check-out">
      <div className="rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-soft">
        <p className="text-sm uppercase tracking-widest opacity-80">Horário de saída</p>
        <p className="font-display text-6xl">11:00</p>
      </div>
      <div className="space-y-5 rounded-3xl bg-card p-6 text-foreground/90 shadow-soft">
        <p className="text-lg font-medium">Olá! Esperamos que tenham aproveitado muito a estadia! ❤️</p>
        <ul className="space-y-4">
          <li>• Confiram se não esqueceram nenhum pertence pessoal.</li>
          <li>• 🕚 Horário de check-out: até às 11h.</li>
          <li>• Agradecemos por escolher nosso espaço e esperamos recebê-los novamente em breve!</li>
        </ul>
        <p className="pt-2 font-medium">Boa viagem e até a próxima! ❤️</p>
      </div>
    </InfoPage>
  ),
});
