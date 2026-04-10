"use client";

import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navigation: readonly NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-3.5 md:py-4">
        <a href="#home" className="flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-display text-base font-extrabold tracking-[0.24em] text-primary md:text-lg">
            SHOP SPHERE
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-muted">
            Pvt Ltd
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.92rem] font-semibold text-slate-700 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-secondary md:inline-flex"
          >
            Get Consultation
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-white md:hidden">
          <div className="section-shell flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
