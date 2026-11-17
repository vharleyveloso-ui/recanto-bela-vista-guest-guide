import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const O_BAR_MAPS_URL = "https://maps.app.goo.gl/SD4wF77BGWTFA8P19?g_st=iw";

export const Route = createFileRoute("/bares")({
  head: () => pageHead("Bares", "Bares recomendados perto do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Dicas locais" title="Bares">
      <div className="rounded-3xl border border-border bg-card p-6 text-center text-foreground shadow-soft">
        <h2 className="font-display text-2xl">O Bar</h2>
        <p className="mt-2 text-base text-muted-foreground">
          Consulte a localização e como chegar pelo Google Maps.
        </p>
        <a
          href={O_BAR_MAPS_URL}
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
