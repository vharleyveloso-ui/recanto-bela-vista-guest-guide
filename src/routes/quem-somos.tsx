import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";
import hosts from "@/assets/carlos-jessica.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () =>
    pageHead(
      "Quem somos",
      "Conheça Carlos e Jessica, os anfitriões do Recanto Bela Vista em Cabo Frio.",
    ),
  component: () => (
    <InfoPage eyebrow="Conheça" title="Quem somos">
      <div className="flex justify-center pt-2">
        <img
          src={hosts}
          alt="Carlos e Jessica, anfitriões do Recanto Bela Vista"
          className="w-full max-w-xs rounded-3xl object-cover shadow-soft sm:max-w-sm"
        />
      </div>

      <p className="pt-4 text-center text-xl leading-relaxed text-foreground/90">
        Somos <span className="font-semibold text-primary">Carlos e Jessica</span>, um casal que
        valoriza a hospitalidade e o bem-estar dos nossos hóspedes. ❤️
      </p>

      <p className="text-center text-lg leading-relaxed">
        Será um prazer receber você em nosso Recanto, um lugar calmo e tranquilo, e proporcionar uma
        estadia especial, exclusiva e confortável. Estamos à disposição para ajudar no que for
        necessário.
      </p>

      <p
        className="pt-4 text-center font-script text-4xl text-primary sm:text-5xl"
        style={{ fontFamily: "var(--font-script)" }}
      >
        Seja bem-vindo!
      </p>
    </InfoPage>
  ),
});
