import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/restaurantes")({
  head: () => pageHead("Restaurantes", "Restaurantes recomendados perto do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Dicas locais" title="Restaurantes" />,
});
