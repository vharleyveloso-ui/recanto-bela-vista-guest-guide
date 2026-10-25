import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/padarias-e-cafes")({
  head: () => pageHead("Padarias e cafés", "Padarias e cafés perto do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Dicas locais" title="Padarias e cafés" />,
});
