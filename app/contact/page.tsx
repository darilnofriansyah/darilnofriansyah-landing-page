import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { SectionLabel } from "@/components/section-label";
import { contactMethods } from "@/lib/portfolio";

export const metadata = {
  title: "Contact",
  description:
    "Contact Daril Nofriansyah about systems, automation, backend services, and quality engineering.",
};

export default function ContactPage() {
  return (
    <div className="page-shell page-enter">
      <section>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="page-title mt-6">Let&apos;s discuss a system worth building.</h1>
        <p className="page-intro mt-7">
          Reach out about automation, backend platforms, AI-integrated product work,
          quality engineering systems, or a responsibility that needs a better
          technical foundation.
        </p>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="surface p-6 sm:p-8">
          <SectionLabel>Contact details</SectionLabel>
          <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="group block py-5 focus-visible:outline-offset-2"
                aria-label={`Contact Daril via ${method.label}`}
              >
                <p className="metadata-label">{method.label}</p>
                <p className="mt-2 break-words text-sm font-medium text-zinc-900 group-hover:text-indigo-600">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="surface p-6 sm:p-8 lg:p-10">
          <SectionLabel>Start with context</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-zinc-950">
            A short description of the responsibility is enough.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-zinc-600">
            <p>
              Share what needs to work, who it needs to help, and what currently
              makes the problem difficult.
            </p>
            <p>
              Existing architecture, constraints, and a preferred delivery
              window are useful when available, but not required for a first
              conversation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:darilnofriansyah@gmail.com"
              className="button button-dark h-12 px-6"
            >
              Email Daril
            </a>
            <CopyEmailButton email="darilnofriansyah@gmail.com" />
            <Link
              href="/projects"
              className="button h-12 border border-zinc-300 bg-white px-6 text-zinc-900 hover:bg-zinc-100"
            >
              Review systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
