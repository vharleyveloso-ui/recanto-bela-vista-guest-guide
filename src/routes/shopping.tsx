import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const MAPS_URL = "https://maps.app.goo.gl/zT6mkwHCMjyUXKyv5?g_st=iw";

export const Route = createFileRoute("/shopping")({
  head: () =>
    pageHead(
      "Shopping",
      "Shopping UNApark em Unamar, Cabo Frio: mapa e como chegar pelo Google Maps.",
    ),
  component: () => (
    <InfoPage eyebrow="Dicas locais" title="Shopping">
      <div className="rounded-3xl bg-card p-6 text-center text-foreground shadow-soft">
        <p className="font-display text-2xl">Shopping UNApark</p>
        <p className="mt-2">Av. Independência, 500 · Lote 16, QD. 15</p>
        <p className="mt-1">Unamar · Cabo Frio – RJ</p>
      </div>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-3xl shadow-soft"
      >
        <iframe
          title="Mapa do Shopping UNApark"
          src="https://www.google.com/maps?q=Shopping+UNApark+Cabo+Frio&output=embed"
          className="pointer-events-none h-72 w-full border-0"
          loading="lazy"
        />
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft"
      >
        <MapPin className="h-5 w-5" /> Abrir no Google Maps
      </a>
    </InfoPage>
  ),
});
