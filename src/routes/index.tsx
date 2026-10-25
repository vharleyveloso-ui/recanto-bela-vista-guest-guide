import { createFileRoute, Link } from "@tanstack/react-router";
import { AIRBNB_URL, NAV, PHOTOS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recanto Bela Vista · Casa com piscina em Cabo Frio" },
      { name: "description", content: "Casa inteira em Cabo Frio com piscina privativa, churrasqueira e 2 quartos. Reserve pelo Airbnb." },
      { property: "og:title", content: "Recanto Bela Vista · Cabo Frio" },
      { property: "og:description", content: "Casa com piscina privativa e churrasqueira em Cabo Frio. Reserve pelo Airbnb." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: PHOTOS[0] },
      { name: "twitter:image", content: PHOTOS[0] },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate min-h-[85vh] overflow-hidden">
        <img src={PHOTOS[0]} alt="Recanto Bela Vista" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-6 pb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-hero-foreground/80">Cabo Frio · RJ</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl text-hero-foreground">Recanto Bela Vista</h1>
          <p className="mt-4 max-w-xl text-lg text-hero-foreground/90">
            Piscina com cascata, churrasqueira e sol o dia inteiro. 4 hóspedes · 2 quartos · 2 banheiros.
          </p>
          <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer"
             className="mt-8 inline-flex w-fit rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-soft transition hover:opacity-90">
            Reservar no Airbnb
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 py-16 md:grid-cols-4">
        {PHOTOS.slice(1).map((src, i) => (
          <img key={i} src={src} alt="" className="aspect-square w-full rounded-2xl object-cover" />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-3xl md:text-4xl">Guia do hóspede</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-soft">
              <span className="font-display text-xl">{n.label}</span>
              <span className="mt-2 block text-sm text-primary group-hover:underline">Ver página →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
