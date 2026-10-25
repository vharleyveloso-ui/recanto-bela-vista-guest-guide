import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

function WifiCard({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — user can still select the text
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl text-foreground select-all">{value}</p>
      <p className="mt-2 text-sm text-primary">{copied ? "Copiado ✓" : "Toque para copiar"}</p>
    </button>
  );
}

function Wifi() {
  return (
    <InfoPage eyebrow="Conectar" title="Wi‑Fi">
      <p className="text-muted-foreground">Conecte‑se à rede abaixo durante a sua estadia.</p>

      <div className="grid gap-4 pt-4 sm:grid-cols-2">
        <WifiCard label="Rede" value="JHEU SANTOS" />
        <WifiCard label="Senha" value="VICTOR22" />
      </div>
    </InfoPage>
  );
}

export const Route = createFileRoute("/wifi")({
  head: () => pageHead("Wi‑Fi", "Rede e senha do Wi‑Fi do Recanto Bela Vista."),
  component: Wifi,
});
