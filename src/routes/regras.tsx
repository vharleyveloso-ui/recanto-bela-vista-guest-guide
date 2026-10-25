import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/regras")({
  head: () => pageHead("Regras da casa", "Regras da casa do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Convivência" title="Regras da casa" />,
});
