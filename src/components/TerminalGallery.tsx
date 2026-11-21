import Image from "next/image";

/**
 * Terminals the practice actually supports — the same product shots published
 * on merchantadvisoryservices.com, grouped by where they belong on a counter.
 */
export const terminals = [
  {
    slug: "verifone-mx925",
    name: "Verifone Mx925",
    file: "Verifone-Mx925-1.webp", w: 614, h: 614,
    fit: "Countertop",
    use: "Full-service and high-ticket retail where the customer signs on screen.",
  },
  {
    slug: "clover-flex",
    name: "Clover Flex",
    file: "Clover_Flex_Large.webp", w: 800, h: 716,
    fit: "Handheld",
    use: "Tableside and line-busting — restaurants and busy counters.",
  },
  {
    slug: "pax-a920",
    name: "PAX A920",
    file: "Pax-a920.webp", w: 812, h: 541,
    fit: "Handheld",
    use: "Android smart terminal for mobile operators and pop-ups.",
  },
  {
    slug: "clover-mini",
    name: "Clover Mini",
    file: "CloverMini.webp", w: 600, h: 600,
    fit: "Countertop",
    use: "Small-footprint station that doubles as a customer-facing display.",
  },
  {
    slug: "valor-vp550e",
    name: "Valor VP550E",
    file: "Valor-VP550E.webp", w: 700, h: 694,
    fit: "Handheld",
    use: "Contactless reader for quick-service and delivery.",
  },
  {
    slug: "verifone-t650c",
    name: "Verifone T650c",
    file: "Verifone-T650c.webp", w: 577, h: 561,
    fit: "Countertop",
    use: "Compact PIN pad with a colour screen for higher-volume tills.",
  },
  {
    slug: "clover-station",
    name: "Clover Station",
    file: "Clover_Station_1_edit.webp", w: 600, h: 600,
    fit: "Full POS",
    use: "Till, inventory and reporting in one — for shops with a real back room.",
  },
  {
    slug: "genius-pos",
    name: "Genius POS",
    file: "genius-pos.webp", w: 1080, h: 1080,
    fit: "Full POS",
    use: "PC or tablet till with a reporting dashboard for multi-terminal sites.",
  },
];

export function TerminalGallery({ slugs }: { slugs?: string[] }) {
  const list = slugs
    ? (slugs
        .map((s) => terminals.find((t) => t.slug === s))
        .filter(Boolean) as typeof terminals)
    : terminals;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((t) => (
        <figure
          key={t.slug}
          className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
        >
          <div className="flex h-52 items-center justify-center bg-gradient-to-b from-mist to-white">
            <Image
              src={`/terminals/${t.file}`}
              alt={`${t.name} card terminal`}
              width={t.w}
              height={t.h}
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 220px"
              className="h-auto max-h-40 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </div>
          <figcaption className="border-t border-line p-5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand">
              {t.fit}
            </p>
            <p className="mt-1.5 font-display text-[17px] text-navy-900">
              {t.name}
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">
              {t.use}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
