import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/como-chegar")({
  head: () => pageHead("Como chegar", "Instruções para chegar ao Recanto Bela Vista em Cabo Frio."),
  component: () => <InfoPage eyebrow="Chegada" title="Como chegar" />,
});
