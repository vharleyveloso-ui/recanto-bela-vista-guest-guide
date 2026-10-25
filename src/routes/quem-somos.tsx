import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => pageHead("Quem somos", "Conheça os anfitriões do Recanto Bela Vista em Cabo Frio."),
  component: () => <InfoPage eyebrow="Conheça" title="Quem somos" />,
});
