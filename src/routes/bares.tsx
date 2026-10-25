import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/bares")({
  head: () => pageHead("Bares", "Bares recomendados perto do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Dicas locais" title="Bares" />,
});
