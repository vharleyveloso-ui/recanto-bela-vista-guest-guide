import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const PADARIAS = [
  {
    name: "Padaria Sonhos & Pães",
    mapsUrl: "https://maps.app.goo.gl/vyTEUT7ojDrqgpPy5?g_st=iw",
    mapsQuery: "Padaria+Sonhos+e+Paes+Unamar+Cabo+Frio",
  },
  {
    name: "Padaria do Assis",
    mapsUrl: "https://maps.app.goo.gl/jUstqckcEjTNVwSo8?g_st=iw",
    mapsQuery: "Padaria+do+Assis+Unamar+Cabo+Frio",
  },
];

export const Route = createFileRoute("/padarias-e-cafes")({
  head: () => pageHead("Padarias e cafés", "Padarias e cafés perto do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Dicas locais" title="Padarias e cafés">
      <div className="space-y-8">
        {PADARIAS.map((padaria) => (
          <div key={padaria.name} className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6 text-center text-foreground shadow-soft">
              <h2 className="font-display text-2xl">{padaria.name}</h2>
            </div>
            <a
              href={padaria.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-3xl shadow-soft"
            >
              <iframe
                title={`Mapa da ${padaria.name}`}
                src={`https://www.google.com/maps?q=${padaria.mapsQuery}&output=embed`}
                className="pointer-events-none h-72 w-full border-0"
                loading="lazy"
              />
            </a>
            <a
              href={padaria.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft"
            >
              <MapPin className="h-5 w-5" /> Abrir no Google Maps
            </a>
          </div>
        ))}
      </div>
    </InfoPage>
  ),
});
