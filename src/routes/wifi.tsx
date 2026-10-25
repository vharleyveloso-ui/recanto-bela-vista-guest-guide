import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

function Wifi() {
  return (
    <InfoPage eyebrow="Conectar" title="Wi‑Fi">
      <p className="text-muted-foreground">Conecte‑se à rede abaixo durante a sua estadia.</p>

      <div className="grid gap-4 pt-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Rede</p>
          <p className="mt-2 font-display text-2xl text-foreground select-all">JHEU SANTOS</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Senha</p>
          <p className="mt-2 font-display text-2xl text-foreground select-all">VICTOR22</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Dica: toque no nome da rede ou na senha para copiar.
      </p>
    </InfoPage>
  );
}

export const Route = createFileRoute("/wifi")({
  head: () => pageHead("Wi‑Fi", "Rede e senha do Wi‑Fi do Recanto Bela Vista."),
  component: Wifi,
});
