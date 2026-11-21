"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Wordmark } from "./Brand";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/partner", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Link href="/">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-md px-3 text-[14px] transition-colors ${
                  active
                    ? "font-medium text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden text-[13px] font-medium text-navy-900 transition-opacity hover:opacity-70 xl:block"
          >
            {site.phone}
          </a>
          <Link
            href="/savings-quote"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-navy-700"
          >
            Free savings quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
              <path
                d={open ? "M1 1l14 10M15 1L1 11" : "M0 1h16M0 6h16M0 11h16"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="container-x py-3">
            {[...nav, { href: "/savings-quote", label: "Free savings quote" }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-line py-3 text-[15px] text-navy-900 last:border-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li className="pt-3">
              <a href={site.phoneHref} className="text-[14px] text-brand">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
