import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/localizacao")({
  head: () => pageHead("Localização", "Localização do Recanto Bela Vista em Cabo Frio, RJ."),
  component: () => <InfoPage eyebrow="Onde estamos" title="Localização" />,
});
