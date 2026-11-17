import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const CANTINHO_DA_LILI_MAPS_URL = "https://maps.app.goo.gl/JxfWA83sL8SjRyct8?g_st=iw";

export const Route = createFileRoute("/restaurantes")({
  head: () => pageHead("Restaurantes", "Restaurantes recomendados perto do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Dicas locais" title="Restaurantes">
      <div className="rounded-3xl border border-border bg-card p-6 text-center text-foreground shadow-soft">
        <h2 className="font-display text-2xl">Cantinho da Lili</h2>
        <p className="mt-2 text-base text-muted-foreground">
          Consulte a localização e como chegar pelo Google Maps.
        </p>
      </div>
      <a
        href={CANTINHO_DA_LILI_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-3xl shadow-soft"
      >
        <iframe
          title="Mapa do Cantinho da Lili"
          src="https://www.google.com/maps?q=Cantinho+da+Lili+Unamar+Cabo+Frio&output=embed"
          className="pointer-events-none h-72 w-full border-0"
          loading="lazy"
        />
      </a>
      <div className="rounded-3xl border border-border bg-card p-6 text-center text-foreground shadow-soft">
        <a
          href={CANTINHO_DA_LILI_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft"
        >
          <MapPin className="h-5 w-5" /> Abrir no Google Maps
        </a>
      </div>
    </InfoPage>
  ),
});
