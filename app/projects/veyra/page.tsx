import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const spending = [48, 63, 42, 76, 58, 71, 55, 68, 83, 74, 62, 89] as const;

const transactions = [
  { merchant: "Tokopedia", category: "Household", amount: -482000, status: "Reviewed" },
  { merchant: "Salary deposit", category: "Income", amount: 8500000, status: "Verified" },
  { merchant: "Cloud services", category: "Subscription", amount: -219000, status: "Recurring" },
  { merchant: "Unknown transfer", category: "Unclassified", amount: -925000, status: "Inspect" },
] as const;

const interventions = [
  {
    signal: "Budget threshold",
    title: "Dining is approaching its limit.",
    detail: `${currency.format(620000)} remains. At the current pace, the category closes 4 days early.`,
    level: "Watch",
  },
  {
    signal: "Transaction risk",
    title: "One transfer needs classification.",
    detail: `${currency.format(925000)} left the primary account without a recognized merchant or recurring pattern.`,
    level: "Inspect",
  },
  {
    signal: "Burn-rate forecast",
    title: "The month is recoverable.",
    detail: `Hold discretionary spend below ${currency.format(185000)} per day to finish inside plan.`,
    level: "Action",
  },
] as const;

const VEYRA_ARTWORK = {
  src: "/images/agents/veyra-hero-photoroom.png",
  alt: "Veyra, the Nexus Initiative financial intelligence agent",
} as const;

export const metadata = {
  title: "Veyra — Financial Intelligence",
  description:
    "Veyra is the Nexus Initiative financial intelligence agent for transaction observation, budget control, and financial risk detection.",
};

function VeyraArtwork() {
  return (
    <div className="veyra-art-stage">
      <div className="veyra-art-light" aria-hidden="true" />
      <div className="veyra-art-scan" aria-hidden="true" />
      {/*
        Final Veyra artwork handoff:
        - Current asset: /images/agents/veyra-hero-photoroom.png with descriptive alt text.
        - Recommended source: 1600 × 2000 px (4:5), transparent WebP or PNG.
        - Pose: 3/4 or forward-facing, looking slightly left toward the hero copy.
        - Keep the top 10% and outer 8% transparent; do not crop the head or shoulders.
        - Place the body in the right 70% with lower-body crop tolerance below 82%.
        - Desktop object position: 58% 42% at 1.8× scale; mobile: 50% 22% at 1.5×.
      */}
      <Image
        className="veyra-artwork"
        src={VEYRA_ARTWORK.src}
        alt={VEYRA_ARTWORK.alt}
        fill
        sizes="(max-width: 767px) 92vw, (max-width: 1199px) 48vw, 44vw"
        fetchPriority="high"
      />
    </div>
  );
}

export default function VeyraPage() {
  return (
    <div className="veyra-page page-enter">
      <section className="veyra-hero" aria-labelledby="veyra-title">
        <div className="veyra-hero-grid" aria-hidden="true" />
        <div className="veyra-signal-path" aria-hidden="true" />
        <div className="veyra-shell veyra-hero-layout">
          <div className="veyra-hero-copy">
            <Link href="/nexus" className="veyra-kicker-link">
              Nexus Initiative / Agent 02
            </Link>
            <p className="veyra-status"><span aria-hidden="true" /> Financial intelligence online</p>
            <h1 id="veyra-title" className="entity-display veyra-title">Veyra</h1>
            <p className="veyra-thesis">Personal finance intelligence. Built for accountability.</p>
            <p className="veyra-hero-summary">
              Veyra observes transactions, budgets, and spending behavior—then intervenes before drift becomes damage.
            </p>
            <div className="veyra-hero-actions">
              <Link href="#intelligence-preview" className="button veyra-primary-button">
                Inspect the Monthly Verdict
              </Link>
              <Link href="/nexus" className="veyra-secondary-link">
                Return to Nexus Archive
              </Link>
            </div>
          </div>

          <VeyraArtwork />

          <dl className="veyra-hero-readout">
            <div><dt>Mandate</dt><dd>Financial accountability</dd></div>
            <div><dt>Observation</dt><dd>Continuous</dd></div>
            <div><dt>Intervention</dt><dd>Threshold-based</dd></div>
          </dl>
        </div>
      </section>

      <section className="veyra-shell veyra-identity" aria-labelledby="identity-title">
        <div>
          <p className="veyra-section-label">Identity / Financial intelligence</p>
          <h2 id="identity-title" className="entity-display">A strict second pair of eyes.</h2>
        </div>
        <div className="veyra-identity-copy">
          <p>
            Inside Nexus, Veyra carries one responsibility: make money behavior visible while there is still time to change it.
          </p>
          <p>
            She records the ledger, tests the plan against reality, and surfaces the decision that cannot wait.
          </p>
        </div>
      </section>

      <section id="intelligence-preview" className="veyra-shell veyra-preview-section" aria-labelledby="preview-title">
        <header className="veyra-section-heading">
          <div>
            <p className="veyra-section-label">Product preview / Sample month</p>
            <h2 id="preview-title" className="entity-display">Monthly intelligence, not dashboard theatre.</h2>
          </div>
          <p>One view of the plan, the ledger, and the risk between them.</p>
        </header>

        <div className="veyra-console">
          <header className="veyra-console-header">
            <div>
              <p className="veyra-console-code">VYR / MONTH-07 / ILLUSTRATIVE</p>
              <h3>Monthly Financial Verdict</h3>
            </div>
            <p className="veyra-verdict"><span aria-hidden="true" /> Controlled, with 2 interventions</p>
          </header>

          <div className="veyra-console-grid">
            <section className="veyra-spending-panel" aria-labelledby="spending-title">
              <div className="veyra-panel-heading">
                <div>
                  <p>Observed spend</p>
                  <h3 id="spending-title">{currency.format(5420000)}</h3>
                </div>
                <p className="veyra-delta">7.8% below forecast</p>
              </div>

              <figure className="veyra-chart">
                <div className="veyra-threshold-label">Plan threshold · {currency.format(6200000)}</div>
                <div className="veyra-chart-bars" aria-hidden="true">
                  {spending.map((value, index) => (
                    <span
                      key={index}
                      style={{ "--bar-size": `${value}%` } as CSSProperties}
                      className={index === spending.length - 1 ? "is-current" : undefined}
                    />
                  ))}
                </div>
                <figcaption>Weekly spending pressure remains below plan; the final period is rising.</figcaption>
              </figure>

              <div className="veyra-budget">
                <div><span>Budget remaining</span><strong>{currency.format(3780000)}</strong></div>
                <progress value="62" max="100">62%</progress>
                <p>62% remains · 12 days in cycle</p>
              </div>
            </section>

            <aside className="veyra-snapshot" aria-label="Financial snapshot">
              <p className="veyra-panel-label">Signal summary</p>
              <dl>
                <div><dt>Top merchant</dt><dd>Tokopedia</dd></div>
                <div><dt>Top category</dt><dd>Household</dd></div>
                <div><dt>Daily burn rate</dt><dd>{currency.format(174000)}</dd></div>
                <div className="is-warning"><dt>Projected close</dt><dd>{currency.format(9150000)}</dd></div>
              </dl>
              <div className="veyra-watch-note">
                <p>Watchdog note</p>
                <strong>Dining accelerates after 19:00. 3 repeat purchases account for 41% of the category.</strong>
              </div>
            </aside>
          </div>

          <section className="veyra-transactions" aria-labelledby="transactions-title">
            <div className="veyra-table-heading">
              <div><p className="veyra-panel-label">Ledger inspection</p><h3 id="transactions-title">Recent Transactions</h3></div>
              <p>4 signals</p>
            </div>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.merchant}>
                  <span className="veyra-transaction-marker" aria-hidden="true" />
                  <span><strong>{transaction.merchant}</strong><small>{transaction.category}</small></span>
                  <span className={transaction.status === "Inspect" ? "is-risk" : undefined}>{transaction.status}</span>
                  <data value={transaction.amount}>
                    {transaction.amount < 0 ? "−" : "+"}{currency.format(Math.abs(transaction.amount))}
                  </data>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="veyra-watchdog" aria-labelledby="watchdog-title">
        <div className="veyra-shell">
          <header className="veyra-section-heading">
            <div>
              <p className="veyra-section-label">Watchdog / Active intervention</p>
              <h2 id="watchdog-title" className="entity-display">Recording is passive. Veyra is not.</h2>
            </div>
            <p>Each intervention names the signal, the consequence, and the next useful action.</p>
          </header>

          <ol className="veyra-interventions">
            {interventions.map((intervention, index) => (
              <li key={intervention.signal}>
                <span className="veyra-intervention-index">{String(index + 1).padStart(2, "0")}</span>
                <div><p>{intervention.signal}</p><h3>{intervention.title}</h3></div>
                <p>{intervention.detail}</p>
                <strong>{intervention.level}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="veyra-shell veyra-nexus-return" aria-labelledby="nexus-return-title">
        <div>
          <p className="veyra-section-label">Nexus Initiative / Connected system</p>
          <h2 id="nexus-return-title" className="entity-display">One intelligence. A wider responsibility.</h2>
        </div>
        <div>
          <p>Veyra governs financial awareness. Nexus Core carries the shared infrastructure. Aegis watches operational reliability.</p>
          <Link href="/nexus" className="button veyra-outline-button">Explore the Nexus Initiative</Link>
        </div>
      </section>
    </div>
  );
}
