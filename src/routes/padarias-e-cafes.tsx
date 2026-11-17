import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const PADARIAS = [
  {
    name: "Padaria Sonhos & Pães",
    mapsUrl: "https://maps.app.goo.gl/vyTEUT7ojDrqgpPy5?g_st=iw",
  },
  {
    name: "Padaria do Assis",
    mapsUrl: "https://maps.app.goo.gl/jUstqckcEjTNVwSo8?g_st=iw",
  },
];

export const Route = createFileRoute("/padarias-e-cafes")({
  head: () => pageHead("Padarias e cafés", "Padarias e cafés perto do Recanto Bela Vista."),
  component: () => (
    <InfoPage eyebrow="Dicas locais" title="Padarias e cafés">
      <div className="grid gap-4 sm:grid-cols-2">
        {PADARIAS.map((padaria) => (
          <div
            key={padaria.name}
            className="rounded-3xl border border-border bg-card p-6 text-center text-foreground shadow-soft"
          >
            <h2 className="font-display text-2xl">{padaria.name}</h2>
            <a
              href={padaria.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft"
            >
              <MapPin className="h-5 w-5" /> Abrir no Google Maps
            </a>
          </div>
        ))}
      </div>
    </InfoPage>
  ),
});
