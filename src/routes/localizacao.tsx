import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const MAPS_URL = "https://maps.app.goo.gl/NWR7nGksu5XgQ3oB7?g_st=ic";

export const Route = createFileRoute("/localizacao")({
  head: () => pageHead("Localização", "Endereço e mapa do Recanto Bela Vista em Cabo Frio, RJ."),
  component: () => (
    <InfoPage eyebrow="Onde estamos" title="Localização">
      <div className="rounded-3xl bg-card p-6 text-center text-foreground shadow-soft">
        <p className="font-display text-2xl">Condomínio Boungville 4</p>
        <p className="mt-2">Casa 01 · Quadra 02 · Lote 23</p>
      </div>
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-3xl shadow-soft">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Condominio+Bougainville+4+Cabo+Frio+RJ&output=embed"
          className="pointer-events-none h-72 w-full border-0"
          loading="lazy"
        />
      </a>
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft">
        <MapPin className="h-5 w-5" /> Abrir no Google Maps
      </a>
    </InfoPage>
  ),
});
