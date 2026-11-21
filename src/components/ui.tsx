import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const styles = {
  primary: "bg-navy-900 text-white hover:bg-navy-700",
  ghost: "border border-line bg-white text-navy-900 hover:border-navy-900 hover:bg-mist",
  light: "bg-white text-navy-900 hover:bg-white/90",
  outlineLight:
    "border border-white/25 text-white hover:border-white hover:bg-white/10",
} as const;

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
      <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-teal" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
}) {
  const cls = `${base} ${styles[variant]}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-x py-20 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="container-x py-16 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-[40px] leading-[1.06] tracking-tight text-navy-900 sm:text-[52px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-600">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-[15px] leading-[1.75] text-slate-600 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:leading-snug [&_h2]:text-navy-900 [&_h3]:mt-8 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-navy-900 [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-navy-900">
      {children}
    </div>
  );
}
