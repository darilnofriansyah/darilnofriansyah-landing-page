import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "nexus-orchestrator", status: "Protected", detail: "99.98%" },
  { name: "telegram-relay", status: "Recovering", detail: "68%" },
  { name: "veyra-ledger", status: "Protected", detail: "42 ms" },
] as const;

const containment = [
  { step: "Detected", detail: "Repeated timeout pattern recognized", state: "Complete" },
  { step: "Classified", detail: "Upstream delivery failure · SEV-2", state: "Complete" },
  { step: "Contained", detail: "Relay retries isolated from the workflow", state: "Active" },
  { step: "Recovering", detail: "Backoff applied · delivery queue draining", state: "68%" },
] as const;

const AEGIS_ARTWORK = {
  src: "/images/agents/aegis-hero-guard.png",
  alt: "Aegis, the Nexus Initiative reliability and protection agent",
} as const;

export const metadata = {
  title: "Aegis — Operational Defense",
  description:
    "Aegis is the Nexus Initiative reliability agent for fault detection, incident containment, and guided recovery.",
};

function AegisArtwork() {
  return (
    <div className="aegis-art-stage">
      <div className="aegis-art-light" aria-hidden="true" />
      <div className="aegis-perimeter" aria-hidden="true">
        <span />
      </div>
      <div className="aegis-art-scan" aria-hidden="true" />
      {/*
        Aegis artwork integration:
        - Asset: /public/images/agents/aegis-hero-guard.png.
        - Current source: 1122 × 1402 px, transparent PNG.
        - Pose: stable and guarding, with face and torso oriented left toward the copy.
        - Desktop object position: 58% 42%; tablet: 54% 42%; mobile: 50% 22%.
        - Perimeter, scan, floor shadow, and status layers stay outside the artwork file.
      */}
      <Image
        className="aegis-artwork"
        src={AEGIS_ARTWORK.src}
        alt={AEGIS_ARTWORK.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 48vw, 50vw"
        loading="eager"
      />
    </div>
  );
}

export default function AegisPage() {
  return (
    <div className="aegis-page page-enter">
      <section className="aegis-hero" aria-labelledby="aegis-title">
        <div className="aegis-hero-grid" aria-hidden="true" />
        <div className="aegis-shell aegis-hero-layout">
          <div className="aegis-hero-copy">
            <Link href="/nexus" className="aegis-kicker-link">
              Nexus Initiative / Agent 01
            </Link>
            <p className="aegis-status"><span aria-hidden="true" /> Protection layer stable</p>
            <h1 id="aegis-title" className="entity-display aegis-title">Aegis</h1>
            <p className="aegis-thesis">Nothing breaks unnoticed.</p>
            <p className="aegis-hero-summary">
              Aegis detects faults, interprets failures, and contains incidents before instability reaches the wider Nexus system.
            </p>
            <div className="aegis-hero-actions">
              <Link href="#system-health" className="button aegis-primary-button">
                Inspect System Health
              </Link>
              <Link href="/nexus" className="aegis-secondary-link">
                Return to Nexus Archive
              </Link>
            </div>
          </div>

          <AegisArtwork />

          <dl className="aegis-hero-readout">
            <div><dt>Mandate</dt><dd>Operational defense</dd></div>
            <div><dt>Coverage</dt><dd>Nexus system</dd></div>
            <div><dt>Current state</dt><dd>Protected</dd></div>
          </dl>
        </div>
      </section>

      <section className="aegis-shell aegis-identity" aria-labelledby="aegis-identity-title">
        <div>
          <p className="aegis-section-label">Identity / Reliability &amp; protection</p>
          <h2 id="aegis-identity-title" className="entity-display">The intelligence that keeps the system standing.</h2>
        </div>
        <div className="aegis-identity-copy">
          <p>
            Inside Nexus, Aegis watches the points where services depend on one another. When a fault appears, he gives it structure, limits its reach, and keeps the path to recovery visible.
          </p>
          <p>
            Protection is not permanent alarm. It is the discipline to detect early, contain precisely, and restore control.
          </p>
        </div>
      </section>

      <dl className="project-context" aria-label="Aegis engineering context">
        <div><dt>Purpose</dt><dd>Surface workflow failures and keep recovery paths visible.</dd></div>
        <div><dt>Implementation</dt><dd>Telegram Bot · n8n · System Monitoring</dd></div>
        <div><dt>Current status</dt><dd>Active concept</dd></div>
        <div><dt>Evidence boundary</dt><dd>Interface behavior is demonstrated with illustrative operational data.</dd></div>
      </dl>

      <section id="system-health" className="aegis-shell aegis-health-section" aria-labelledby="health-title">
        <header className="aegis-section-heading">
          <div>
            <p className="aegis-section-label">Operational preview / Example incident</p>
            <h2 id="health-title" className="entity-display">One incident. The system remains protected.</h2>
          </div>
          <p>A focused view of the fault, its reach, and the containment already in place.</p>
        </header>

        <p className="concept-disclosure">
          Concept interface — all operational data below is illustrative.
        </p>

        <div className="aegis-console">
          <header className="aegis-console-header">
            <div>
              <p className="aegis-console-code">AEG / NEXUS-HEALTH / ILLUSTRATIVE</p>
              <h3>Nexus System Health</h3>
            </div>
            <p className="aegis-protected"><span aria-hidden="true" /> Protected · 1 contained incident</p>
          </header>

          <div className="aegis-console-grid">
            <section className="aegis-incident" aria-labelledby="incident-title">
              <div className="aegis-incident-heading">
                <div>
                  <p className="aegis-panel-label">Current intervention</p>
                  <h3 id="incident-title">Telegram relay exceeded its delivery window.</h3>
                </div>
                <p className="aegis-severity"><span aria-hidden="true">!</span> SEV-2 · Degraded</p>
              </div>

              <dl className="aegis-incident-facts">
                <div><dt>Incident</dt><dd translate="no">INC-2048</dd></div>
                <div><dt>Affected service</dt><dd translate="no">telegram-relay</dd></div>
                <div><dt>First observed</dt><dd><time dateTime="2026-07-19T14:32:08+07:00">14:32:08 WIB</time></dd></div>
                <div><dt>Containment</dt><dd className="is-contained">Active · retries isolated</dd></div>
              </dl>

              <div className="aegis-diagnostic">
                <p className="aegis-panel-label">Aegis interpretation</p>
                <h4>The workflow completed. Its notification did not.</h4>
                <p>
                  Telegram rejected 3 delivery attempts after the connection timed out. The failure is limited to the alert relay; the originating n8n workflow and Nexus data remain intact.
                </p>
                <dl>
                  <div><dt>Likely cause</dt><dd>Transient upstream connection timeout</dd></div>
                  <div><dt>Recommended response</dt><dd>Hold manual retry while the isolated queue drains</dd></div>
                </dl>
              </div>
            </section>

            <aside className="aegis-service-health" aria-label="Service health">
              <p className="aegis-panel-label">Protected boundary</p>
              <ul>
                {services.map((service) => (
                  <li key={service.name} className={`is-${service.status.toLowerCase()}`}>
                    <span className="aegis-service-marker" aria-hidden="true" />
                    <span><strong translate="no">{service.name}</strong><small>{service.status}</small></span>
                    <data value={service.detail}>{service.detail}</data>
                  </li>
                ))}
              </ul>
              <div className="aegis-recovery">
                <div><span>Recovery progress</span><strong>68%</strong></div>
                <progress value="68" max="100">68%</progress>
                <p>Queue depth 8 → 3 · next check in 30 seconds</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="aegis-containment" aria-labelledby="containment-title">
        <div className="aegis-shell">
          <header className="aegis-section-heading">
            <div>
              <p className="aegis-section-label">Containment / Active sequence</p>
              <h2 id="containment-title" className="entity-display">Faults move. Boundaries hold.</h2>
            </div>
            <p>Aegis follows one controlled path from detection to recovery, preserving every unaffected service.</p>
          </header>

          <ol className="aegis-containment-sequence">
            {containment.map((item, index) => (
              <li key={item.step} className={item.state === "Active" ? "is-active" : undefined}>
                <span className="aegis-sequence-index">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.step}</h3><p>{item.detail}</p></div>
                <strong>{item.state}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="aegis-shell aegis-nexus-return" aria-labelledby="aegis-nexus-title">
        <div>
          <p className="aegis-section-label">Nexus Initiative / Connected system</p>
          <h2 id="aegis-nexus-title" className="entity-display">Protection serves the whole.</h2>
        </div>
        <div>
          <p>Aegis protects the shared infrastructure where Veyra observes financial signals and every future Nexus agent performs its work.</p>
          <Link href="/nexus" className="button aegis-outline-button">Explore the Nexus Initiative</Link>
        </div>
      </section>
    </div>
  );
}
