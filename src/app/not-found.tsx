import Link from "next/link";
import { Mark } from "@/components/Brand";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Mark className="h-10 w-auto" />
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
        404
      </p>
      <h1 className="mt-3 font-display text-[34px] leading-tight text-navy-900 sm:text-[42px]">
        That page isn&apos;t here.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
        The link may be out of date. The services and the savings quote are both
        one click from the navigation.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-navy-900 px-6 py-3 text-[14px] font-medium text-white hover:bg-navy-700"
        >
          Back to home
        </Link>
        <Link
          href="/savings-quote"
          className="rounded-full border border-line px-6 py-3 text-[14px] font-medium text-navy-900 hover:border-navy-900"
        >
          Free savings quote
        </Link>
      </div>
    </section>
  );
}
