import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Ban,
  Moon,
  PartyPopper,
  Users,
  PawPrint,
  Power,
  Trash2,
  Droplets,
  ShowerHead,
  Toilet,
  Fan,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

function RuleCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: ReactNode[];
  icon: LucideIcon;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <span
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h2 className="font-display text-lg leading-snug text-foreground sm:text-xl">{title}</h2>
        <ul className="mt-2 space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Regras() {
  return (
    <InfoPage eyebrow="Convivência" title="Regras da casa">
      <p className="text-muted-foreground">
        Sejam muito bem-vindos! Preparamos este espaço com carinho para que vocês tenham uma ótima
        estadia. Contamos com a colaboração de todos.
      </p>

      <div className="grid gap-4 pt-4 sm:grid-cols-2">
        <RuleCard
          icon={Ban}
          title="Proibido fumar"
          items={["Não é permitido fumar dentro da acomodação.", "Fume somente nas áreas externas."]}
        />
        <RuleCard
          icon={Moon}
          title="Horário de silêncio"
          items={["Silêncio do condomínio das 22:00 às 8:00."]}
        />
        <RuleCard
          icon={PartyPopper}
          title="Festas e eventos"
          items={["Não são permitidos festas ou eventos."]}
        />
        <RuleCard
          icon={Users}
          title="Visitas"
          items={[
            "Não é permitida a entrada e permanência de pessoas que não estejam incluídas na reserva.",
          ]}
        />
        <RuleCard
          icon={PawPrint}
          title="Sem pets"
          items={["Não é permitido a entrada de animais de estimação."]}
        />
        <RuleCard
          icon={Droplets}
          title="Bomba da cisterna"
          items={[
            "Ligue a bomba ao entrar na casa.",
            "Desligue a bomba ao sair.",
            "Há um registro dentro da residência.",
            "A bomba está identificada com a letra “B” na parte da bomba da cisterna.",
          ]}
        />
        <RuleCard
          icon={ShowerHead}
          title="Chuveiros"
          items={["Não ligue os dois chuveiros ao mesmo tempo."]}
        />
        <RuleCard
          icon={Toilet}
          title="Banheiro"
          items={["Não jogue papel higiênico ou qualquer outro objeto no vaso sanitário."]}
        />
        <RuleCard
          icon={Fan}
          title="Luzes e equipamentos"
          items={["Ao sair, desligue as luzes e os ventiladores."]}
        />
        <RuleCard
          icon={Power}
          title="Ao sair da casa"
          items={[
            "Desligue o ar‑condicionado e quaisquer outros aparelhos eletrônicos.",
            "Garanta que todas as portas e janelas estejam trancadas.",
          ]}
        />
        <div className="sm:col-span-2">
          <RuleCard
            icon={Trash2}
            title="Antes do check‑out"
            items={["Pedimos a gentileza de recolher o seu lixo antes do check‑out."]}
          />
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-soft">
        <span
          aria-hidden
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/15"
        >
          <Heart className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h2 className="mt-4 font-script text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-script)" }}>
          Cuide do nosso cantinho!
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-primary-foreground/90">
          Respeite as regras e ajude a manter o ambiente sempre limpo, organizado e agradável para
          todos.
        </p>
        <p className="mt-5 font-script text-3xl" style={{ fontFamily: "var(--font-script)" }}>
          Agradecemos!
        </p>
      </div>
    </InfoPage>
  );
}

export const Route = createFileRoute("/regras")({
  head: () =>
    pageHead(
      "Regras da casa",
      "Regras da casa do Recanto Bela Vista: silêncio, bomba da piscina, chuveiros, visitas, animais e mais.",
    ),
  component: Regras,
});
