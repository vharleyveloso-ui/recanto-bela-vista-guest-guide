import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";
import { pageHead } from "@/lib/site";

const WHATSAPP =
  "https://wa.me/5573991361433?text=Ola%20J%C3%A9ssica%20tudo%20bem%2Cencontrei%20sua%20pousada%20pelo%20Instagram%20%20%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const INSTAGRAM = "https://www.instagram.com/recantobelavistarj?vrfl=NGgyazJnazNpdGR5";

const btn = "flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-medium shadow-soft";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("Contato", "Fale com os anfitriões do Recanto Bela Vista pelo WhatsApp ou Instagram."),
  component: () => (
    <InfoPage eyebrow="Fale conosco" title="Contato">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${btn} bg-primary text-primary-foreground`}>
        <MessageCircle className="h-6 w-6" /> Conversar pelo WhatsApp
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-primary bg-card text-primary`}>
        <Instagram className="h-6 w-6" /> Falar pelo Instagram
      </a>
    </InfoPage>
  ),
});
