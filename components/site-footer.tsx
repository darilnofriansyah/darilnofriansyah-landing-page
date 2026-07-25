import Link from "next/link";
import { contactMethods, site } from "@/lib/portfolio";

const github = contactMethods.find((method) => method.label === "GitHub");
const linkedIn = contactMethods.find((method) => method.label === "LinkedIn");

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-950">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Systems, automation, and intelligent products.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600 [&_a]:rounded-sm [&_a]:py-2 [&_a]:transition-colors [&_a]:hover:text-zinc-950"
        >
          <a href={github?.href}>GitHub</a>
          <a href={linkedIn?.href}>LinkedIn</a>
          <Link href="/contact">Contact</Link>
          <Link href="/nexus">Nexus Archive</Link>
        </nav>
        <p className="border-t border-zinc-200 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500 md:col-span-2">
          Archive status: online
        </p>
      </div>
    </footer>
  );
}
