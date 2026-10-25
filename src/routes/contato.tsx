import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("Contato", "Números de contato dos anfitriões do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Fale conosco" title="Contato" />,
});
