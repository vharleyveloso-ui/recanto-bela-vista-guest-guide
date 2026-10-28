export const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1773108355789463524?unique_share_id=97bb971f-4401-4e7a-8522-47a2e19913cf&viralityEntryPoint=1&s=76";

const base = "https://a0.muscache.com/im/pictures/hosting/Hosting-1773108355789463524/original/";
export const PHOTOS = [
  base + "feb0cd70-16f6-4d45-9c27-f0961e902a7a.png?im_w=1200",
  base + "739e27da-7c3e-4dd5-a7b6-08c9cfe3d44d.png?im_w=720",
  base + "8b0430ea-2514-4f71-9c8f-64d5bf6a5503.jpeg?im_w=720",
  base + "3ca84e25-61c3-4bc5-95dc-1023cf9adf74.jpeg?im_w=720",
  base + "0576cd69-65e7-4d67-b25d-cca9bd6ccd3e.jpeg?im_w=720",
];

export const NAV = [
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/check-in", label: "Check-in" },
  { to: "/regras", label: "Regras da casa" },
  { to: "/contato", label: "Contato" },
  { to: "/localizacao", label: "Localização" },
  { to: "/wifi", label: "Wi‑Fi" },
  { to: "/padarias-e-cafes", label: "Padarias e cafés" },
  { to: "/bares", label: "Bares" },
  { to: "/restaurantes", label: "Restaurantes" },
  { to: "/shopping", label: "Shopping" },
  { to: "/check-out", label: "Check-out" },
] as const;

export function pageHead(title: string, description: string) {
  const t = `${title} · Recanto Bela Vista`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
