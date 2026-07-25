"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { navItems, site } from "@/lib/portfolio";

type NavigationLinksProps = {
  pathname: string;
  onNavigate?: () => void;
};

function isActiveRoute(href: string, pathname: string) {
  return href === pathname || (href === "/projects" && pathname.startsWith("/projects/"));
}

function NavigationLinks({ pathname, onNavigate }: NavigationLinksProps) {
  return (
    <>
      {navItems.map((item) => {
        const isActive = isActiveRoute(item.href, pathname);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${isActive ? "nav-link-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            onNavigate={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => {
    window.setTimeout(() => mobileMenuRef.current?.removeAttribute("open"));
  };
  const isContactPage = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-[#fafafa]/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
          aria-label="Daril Nofriansyah home"
        >
          <Image src="/logo.svg" alt="" width={32} height={32} priority />
          <span className="min-w-0">
            <span className="block truncate text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-zinc-950 sm:text-sm">
              {site.name}
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.18em] text-zinc-500 sm:block">
              {site.role}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm text-zinc-600 lg:flex"
        >
          <NavigationLinks pathname={pathname} />
          <Link
            href="/contact"
            className={`button button-dark h-10 px-5 ${isContactPage ? "ring-2 ring-indigo-500 ring-offset-2" : ""}`}
            aria-current={isContactPage ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>

        <details ref={mobileMenuRef} className="mobile-menu relative lg:hidden">
          <summary className="button h-10 cursor-pointer border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-900">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 flex w-56 flex-col gap-1 border border-zinc-200 bg-white p-2 shadow-lg"
          >
            <NavigationLinks pathname={pathname} onNavigate={closeMobileMenu} />
            <Link
              href="/contact"
              className={`button button-dark mt-1 h-11 px-4 ${isContactPage ? "ring-2 ring-indigo-500 ring-inset" : ""}`}
              aria-current={isContactPage ? "page" : undefined}
              onNavigate={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
