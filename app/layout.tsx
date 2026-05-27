import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { navItems, site } from "@/lib/portfolio";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daril Nofriansyah",
    template: "%s | Daril Nofriansyah",
  },
  description: site.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 bg-[#050816]/72 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 sm:justify-between lg:px-8">
              <Link
                href="/"
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-200"
              >
                <Image
                  src="/logo.svg"
                  alt="Daril Logo"
                  width={28}
                  height={28}
                />
                {site.name}
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-cyan-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <p>Daril Nofriansyah</p>
              <p>Light-blue neon visuals, clean structure, and fast delivery.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
