import { createFileRoute, Link } from "@tanstack/react-router";
import { User, ClipboardList, Smartphone, MapPin, Wifi, Coffee, Martini, UtensilsCrossed, LogIn, LogOut } from "lucide-react";
import { NAV, PHOTOS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recanto Bela Vista · Guia de Boas Vindas" },
      { name: "description", content: "Guia do hóspede do Recanto Bela Vista em Cabo Frio: check-in, regras, Wi‑Fi, localização e dicas." },
      { property: "og:title", content: "Recanto Bela Vista · Guia de Boas Vindas" },
      { property: "og:description", content: "Tudo o que você precisa para sua estadia no Recanto Bela Vista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: PHOTOS[0] },
      { name: "twitter:image", content: PHOTOS[0] },
    ],
  }),
  component: Index,
});

const ICONS = { "/quem-somos": User, "/check-in": LogIn, "/check-out": LogOut, "/regras": ClipboardList, "/contato": Smartphone, "/localizacao": MapPin, "/wifi": Wifi, "/padarias-e-cafes": Coffee, "/bares": Martini, "/restaurantes": UtensilsCrossed } as const;

const HERO_WORDS = ["Guia", "de", "Boas", "Vindas!"];

function Index() {
  return (
    <>
      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <img src={PHOTOS[0]} alt="Recanto Bela Vista" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
          <h1 className="hero-title flex flex-wrap justify-center gap-x-[0.3em] font-script text-7xl leading-tight text-hero-foreground md:text-9xl" style={{ fontFamily: "var(--font-script)" }}>
            {HERO_WORDS.map((word, i) => (
              <span key={word} className="hero-word" style={{ animationDelay: `${0.25 + i * 0.22}s` }}>
                {word}
              </span>
            ))}
          </h1>
          <span className="hero-rule" aria-hidden="true" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-3xl bg-card px-7 py-12 shadow-soft sm:px-12">
          <h2 className="text-center font-script text-5xl text-primary sm:text-6xl" style={{ fontFamily: "var(--font-script)" }}>
            Seja bem vindo
          </h2>
          <div className="mx-auto mt-8 max-w-xl space-y-5 text-center text-lg leading-relaxed text-foreground/90">
            <p>
              Olá! Sejam muito bem-vindos ao <span className="font-medium text-primary">Recanto Bela Vista</span>.
            </p>
            <p>
              Estamos felizes em receber vocês aqui. Preparamos este espaço com muito carinho para que se sintam
              em casa, mas com a tranquilidade que as férias merecem.
            </p>
            <p>Desliguem-se da rotina e aproveitem o pôr do sol.</p>
            <p>Aproveitem a piscina!</p>
            <p className="pt-3 font-script text-3xl text-primary sm:text-4xl" style={{ fontFamily: "var(--font-script)" }}>
              Tenham uma excelente estadia!
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-4xl md:text-5xl text-foreground" style={{ fontFamily: "var(--font-script)" }}>Aqui você encontra tudo o que precisa!</h2>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4">
          {NAV.map((n) => {
            const Icon = ICONS[n.to];
            return (
              <Link key={n.to} to={n.to} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex aspect-square w-full max-w-28 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-soft transition group-hover:-translate-y-1">
                  <Icon className="h-1/2 w-1/2" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-foreground sm:text-sm">{n.label}</span>
              </Link>
            );
          })}
        </div>
        <p className="mt-14 text-center text-3xl text-foreground" style={{ fontFamily: "var(--font-script)" }}>Aproveite cada momento!</p>
      </section>
    </>
  );
}
