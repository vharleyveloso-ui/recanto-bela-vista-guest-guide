import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/wifi")({
  head: () => pageHead("Wi‑Fi", "Rede e senha do Wi‑Fi do Recanto Bela Vista."),
  component: () => <InfoPage eyebrow="Conectar" title="Wi‑Fi" />,
});
