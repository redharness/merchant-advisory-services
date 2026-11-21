import Image from "next/image";

// JP's real mark, pulled from the live site and recoloured to the brand tones.
export function Mark({
  variant = "navy",
  className = "h-9 w-auto",
}: {
  variant?: "navy" | "white" | "ink";
  className?: string;
}) {
  const src =
    variant === "white"
      ? "/brand/mas-mark-white.png"
      : variant === "ink"
        ? "/brand/mas-mark-ink.png"
        : "/brand/mas-mark-navy.png";

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={506}
      height={274}
      className={className}
      priority
    />
  );
}

export function Wordmark({
  light = false,
  markClass = "h-8 w-auto",
}: {
  light?: boolean;
  markClass?: string;
}) {
  return (
    <span className="flex items-center gap-3">
      <Mark variant={light ? "white" : "navy"} className={markClass} />
      <span className="hidden leading-tight sm:block">
        <span
          className={`block text-[14px] font-semibold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Merchant Advisory Services
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.16em] ${
            light ? "text-white/55" : "text-slate-500"
          }`}
        >
          Payments advisory · Since 2016
        </span>
      </span>
    </span>
  );
}
