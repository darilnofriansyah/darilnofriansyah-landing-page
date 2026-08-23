# Portfolio Conversion Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing portfolio into a shorter, evidence-first conversion path while making the Aegis and Veyra concept boundaries, responsive layouts, and accessibility explicit.

**Architecture:** Keep the current Next.js App Router structure and existing visual system. Recompose the homepage from existing data and components, add only two small homepage sections, and patch each project page in place. Use native JSX, CSS, and semantic HTML; add no dependency, route, CMS, test framework, or speculative abstraction.

**Tech Stack:** Next.js 16.3 canary App Router, React 19, TypeScript, Tailwind CSS 4 plus the existing global CSS, ESLint.

**Spec:** [2026-08-23-portfolio-conversion-pass-design.md](../specs/2026-08-23-portfolio-conversion-pass-design.md)

## Global Constraints

- Preserve the existing warm editorial visual language, navigation, footer, skip link, focus styles, and reduced-motion handling.
- Do not add claims that are not already supported by repository content.
- Reuse `featuredProjects` exactly as it exists in `lib/portfolio.ts`; it already contains every field this pass needs. The only data-file edit is replacing the homepage's stale Archive navigation anchor with Featured Work.
- Remove Philosophy, Research, and Archive only from the homepage composition. Preserve their routes and source data.
- Keep all project dashboard content on mobile; reflow it instead of hiding it.
- Follow the local Next.js Image guide at `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`: use `loading="eager"` for the above-the-fold project hero images and remove `fetchPriority="high"`; do not use deprecated `priority`.
- Prefix repository shell commands with `rtk`.
- Keep the existing dirty user files (`PROJECT_REVIEW.md` and `.serena/`) untouched.

---

## Task 1: Recompose the homepage around featured work

**Files:**

- Modify: `components/home-sections.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `lib/portfolio.ts`

- [ ] **Step 1: Record the current homepage composition**

Run:

```bash
rtk rg -n "PhilosophySection|ArchiveTimeline|ResearchCard|featuredProjects|ContactCtaSection" app/page.tsx components/home-sections.tsx
```

Expected before the change: `app/page.tsx` renders Philosophy, Research, and Archive; neither file renders `featuredProjects` or `ContactCtaSection`.

- [ ] **Step 2: Replace the hero copy and actions in `HeroSection`**

Keep the existing structure and responsive classes, but set the content to:

```tsx
<h1>Systems engineering for work that needs to hold up.</h1>
<p>
  I design and build automation, backend services, AI-integrated products,
  and quality engineering systems from idea to deployment.
</p>
<Link className="button" href="#featured-work">View Featured Work</Link>
<Link className="button button-secondary" href="/contact">Contact</Link>
```

Replace the three metadata values with:

```tsx
<dt>Based in</dt><dd>Indonesia</dd>
<dt>Current focus</dt><dd>Nexus</dd>
<dt>Availability</dt><dd>Available for collaboration</dd>
```

Do not add a new hero component or configuration object.

- [ ] **Step 3: Replace the stale homepage Archive navigation anchor**

In `lib/portfolio.ts`, change only this entry:

```tsx
{ href: "/#featured-work", label: "Work" },
```

Keep the dedicated `/projects` and `/research` navigation entries and all underlying portfolio data intact.

- [ ] **Step 4: Add `FeaturedWorkSection` beside the existing homepage sections**

Import `featuredProjects` and `Link` in `components/home-sections.tsx`. Render an asymmetric editorial list from the existing array:

```tsx
export function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="featured-work section-space scroll-mt-24">
      <header className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Systems built around responsibility, not decoration.</h2>
      </header>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article className="featured-project" key={project.title}>
            <div className="featured-project-identity">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <ul aria-label={`${project.title} technology`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="featured-project-summary">
              <p>{project.summary}</p>
              <p>{project.impact}</p>
              {"href" in project ? (
                <Link href={project.href}>Read case study</Link>
              ) : (
                <span>Current site</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

Use existing typography, border, tag, and link conventions where their classes already fit. Add only the minimum new `featured-*` selectors required for the two-column alternating rows, and collapse each row to one column below 768px.

- [ ] **Step 5: Add the final contact CTA**

Add a compact exported section in `components/home-sections.tsx`:

```tsx
export function ContactCtaSection() {
  return (
    <section className="contact-cta section-space" aria-labelledby="contact-cta-title">
      <p className="eyebrow">Start a conversation</p>
      <h2 id="contact-cta-title">Have a system that needs a clearer technical foundation?</h2>
      <p>Share the responsibility, constraints, and what needs to work.</p>
      <Link className="button" href="/contact">Contact</Link>
    </section>
  );
}
```

Style it with the existing spacing, border, color, and button tokens; do not create a generic CTA abstraction.

- [ ] **Step 6: Reorder `app/page.tsx` and remove homepage-only dead imports**

The `main` sequence must be exactly:

```tsx
<HeroSection />
<FeaturedWorkSection />
<section id="nexus">{/* preserve current Nexus content and diagram */}</section>
<AboutSection />
<ContactCtaSection />
```

Delete the homepage imports and JSX for `PhilosophySection`, `SystemCard`, `systems`, `ResearchCard`, `researchEntries`, and `ArchiveTimeline`. Since `PhilosophySection` and `ArchiveTimeline` have no other callers, delete those two now-unused component definitions and their imports from `components/home-sections.tsx`; preserve their source data and all dedicated routes.

- [ ] **Step 7: Add the shared interaction and readability CSS**

Extend the existing selectors rather than introducing another stylesheet:

```css
h1,
h2,
h3 {
  overflow-wrap: anywhere;
  text-wrap: balance;
}

.button:active {
  transform: translateY(0) scale(0.98);
}

.relationship-node span,
.relationship-branch span {
  font-size: 0.75rem;
  line-height: 1.4;
}
```

Ensure the relationship labels remain legible at 390px without changing or hiding diagram content.

- [ ] **Step 8: Verify the homepage task**

Run:

```bash
rtk npm run lint
rtk npm run build
rtk rg -n "PhilosophySection|ArchiveTimeline|ResearchCard|researchEntries" app/page.tsx
rtk rg -n "id=\"featured-work\"|View Featured Work|Available for collaboration|ContactCtaSection" app/page.tsx components/home-sections.tsx
rtk rg -n 'href: "/#featured-work", label: "Work"' lib/portfolio.ts
```

Expected: lint and build exit 0; the removal search returns no matches; the addition search finds every required element.

- [ ] **Step 9: Commit Task 1**

```bash
rtk git add app/page.tsx components/home-sections.tsx app/globals.css lib/portfolio.ts
rtk git commit -m "feat: focus homepage on featured work"
```

---

## Task 2: Make the Aegis case study truthful and readable

**Files:**

- Modify: `app/projects/aegis/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Prove the required Aegis content is absent**

Run:

```bash
rtk rg -n "Concept interface|Purpose|Implementation|Active concept|Evidence boundary|loading=\"eager\"" app/projects/aegis/page.tsx
```

Expected before the change: no matches for the new disclosure/context copy or eager loading.

- [ ] **Step 2: Correct the above-the-fold image loading hint**

On the Aegis hero `<Image>`, replace `fetchPriority="high"` with:

```tsx
loading="eager"
```

Keep `fill`, `sizes`, alt text, and the existing artwork unchanged.

- [ ] **Step 3: Add factual engineering context after the identity section**

Add one semantic definition list using the existing bordered project-section language:

```tsx
<dl className="project-context" aria-label="Aegis engineering context">
  <div><dt>Purpose</dt><dd>Surface workflow failures and keep recovery paths visible.</dd></div>
  <div><dt>Implementation</dt><dd>Telegram Bot · n8n · System Monitoring</dd></div>
  <div><dt>Current status</dt><dd>Active concept</dd></div>
  <div><dt>Evidence boundary</dt><dd>Interface behavior is demonstrated with illustrative operational data.</dd></div>
</dl>
```

Do not infer client names, production usage, traffic, revenue, or measured outcomes.

- [ ] **Step 4: Put the disclosure before the first console**

Immediately before the existing `#system-health` preview/console, render visible body text:

```tsx
<p className="concept-disclosure">
  Concept interface — all operational data below is illustrative.
</p>
```

The disclosure must not be an eyebrow, badge, tooltip, or screen-reader-only element. Keep the existing in-console `ILLUSTRATIVE` label as redundant confirmation.

- [ ] **Step 5: Add shared project-context/disclosure CSS and Aegis readability overrides**

Use one shared `.project-context` and `.concept-disclosure` block for both project pages. For Aegis:

- make metadata and console labels at least `0.75rem`;
- make explanatory copy at least `0.875rem`;
- use an existing light steel/neutral token that reaches 4.5:1 contrast on the dark console;
- preserve explicit words such as `SEV-2`, `healthy`, `failed`, and recovery state so status never relies on color;
- at `max-width: 1023px`, make `.aegis-identity`, `.aegis-section-heading`, `.aegis-console-grid`, and `.aegis-nexus-return` one-column grids;
- preserve the existing `max-width: 767px` hero stack and every dashboard datum.

Prefer grouped selectors over repeating declarations, for example:

```css
.aegis-console-label,
.aegis-readout dt,
.aegis-diagnostic dt,
.aegis-service-health small {
  color: var(--steel);
  font-size: 0.75rem;
  line-height: 1.4;
}

@media (max-width: 1023px) {
  .aegis-identity,
  .aegis-section-heading,
  .aegis-console-grid,
  .aegis-nexus-return {
    grid-template-columns: minmax(0, 1fr);
  }
}
```

Confirm actual selector names against `app/globals.css`; extend the current selectors instead of duplicating them.

- [ ] **Step 6: Verify and commit Aegis**

Run:

```bash
rtk npm run lint
rtk npm run build
rtk rg -n "Concept interface — all operational data below is illustrative|Active concept|Evidence boundary|loading=\"eager\"" app/projects/aegis/page.tsx
rtk rg -n "fetchPriority|priority" app/projects/aegis/page.tsx
```

Expected: lint and build exit 0; all required copy is found; the final search returns no matches.

```bash
rtk git add app/projects/aegis/page.tsx app/globals.css
rtk git commit -m "feat: clarify Aegis concept evidence"
```

---

## Task 3: Make the Veyra case study truthful, readable, and chart-accessible

**Files:**

- Modify: `app/projects/veyra/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Prove the required Veyra content is absent**

Run:

```bash
rtk rg -n "Concept interface|Purpose|Implementation|Active concept|Evidence boundary|loading=\"eager\"|Period 1" app/projects/veyra/page.tsx
```

Expected before the change: no matches for the new disclosure/context copy, eager loading, or accessible period values.

- [ ] **Step 2: Correct the hero image hint and add engineering context**

Replace `fetchPriority="high"` with `loading="eager"` on the hero image.

After the identity section, reuse `.project-context` with this exact page-specific content:

```tsx
<dl className="project-context" aria-label="Veyra engineering context">
  <div><dt>Purpose</dt><dd>Make spending, budget drift, and financial decisions visible in conversation.</dd></div>
  <div><dt>Implementation</dt><dd>Telegram · n8n · Workflow Automation</dd></div>
  <div><dt>Current status</dt><dd>Active concept</dd></div>
  <div><dt>Evidence boundary</dt><dd>Interface behavior is demonstrated with illustrative financial data.</dd></div>
</dl>
```

- [ ] **Step 3: Put the Veyra disclosure before the first console**

Immediately before the existing dashboard preview, add:

```tsx
<p className="concept-disclosure">
  Concept interface — all financial data below is illustrative.
</p>
```

Keep the existing in-console `ILLUSTRATIVE` label.

- [ ] **Step 4: Add a semantic text equivalent for the spending chart**

Leave the decorative bars `aria-hidden`. Inside the chart `<figure>`, add a visually hidden list generated from the existing `spending` array plus the displayed threshold:

```tsx
<ul className="sr-only">
  {spending.map((value, index) => (
    <li key={index}>Period {index + 1}: {value}% of the illustrative chart scale</li>
  ))}
  <li>Plan threshold: Rp 6,200,000</li>
</ul>
```

This is the only new chart representation. Do not add a chart library, SVG abstraction, or duplicate data array.

- [ ] **Step 5: Add Veyra readability and 1024px reflow overrides**

Mirror the Aegis rules using the existing Veyra selectors:

- metadata and console labels at least `0.75rem`;
- explanatory body text and transaction detail at least `0.875rem`;
- normal text contrast at least 4.5:1 against dark surfaces;
- at `max-width: 1023px`, make `.veyra-identity`, `.veyra-section-heading`, `.veyra-console-grid`, and `.veyra-nexus-return` one-column grids;
- preserve all chart, budget, snapshot, transaction, and intervention content on mobile.

Use grouped overrides, not per-element copies:

```css
.veyra-console-label,
.veyra-readout dt,
.veyra-threshold-label,
.veyra-transactions small {
  color: var(--steel);
  font-size: 0.75rem;
  line-height: 1.4;
}

@media (max-width: 1023px) {
  .veyra-identity,
  .veyra-section-heading,
  .veyra-console-grid,
  .veyra-nexus-return {
    grid-template-columns: minmax(0, 1fr);
  }
}
```

Confirm actual selector names before editing. Do not hide rows to make the layout fit.

- [ ] **Step 6: Run full verification**

Run:

```bash
rtk npm run lint
rtk npm run build
rtk rg -n "Concept interface — all financial data below is illustrative|Active concept|Evidence boundary|loading=\"eager\"|Plan threshold: Rp 6,200,000" app/projects/veyra/page.tsx
rtk rg -n "fetchPriority|priority" app/projects/veyra/page.tsx
rtk git diff --check
rtk git status --short
```

Expected: lint/build/diff check exit 0; required copy and chart equivalent are found; the priority search returns no matches; status lists only the intended implementation files plus the pre-existing user changes.

- [ ] **Step 7: Perform responsive and accessibility acceptance checks**

Run the production server:

```bash
rtk npm run start
```

Inspect `/`, `/projects/aegis`, and `/projects/veyra` at 1440px and 390px widths. Confirm:

- no horizontal overflow;
- homepage order is Hero → Featured Work → Nexus → About → Contact;
- every homepage project shows name, type, summary, impact, stack, and either a case-study link or `Current site`;
- Nexus relationship labels are readable at 390px;
- disclosures are visible before project consoles;
- complex project grids are single-column by 1023px and no dashboard data disappears;
- keyboard focus remains visible, buttons show hover and active feedback, and reduced-motion behavior remains intact;
- Veyra chart values and threshold are present in the accessibility tree while bars remain decorative.

If a browser automation tool is available, save screenshots outside the repository or in the existing visualization workspace. Do not add Playwright or screenshot artifacts to the app merely for this pass.

- [ ] **Step 8: Commit Task 3**

```bash
rtk git add app/projects/veyra/page.tsx app/globals.css
rtk git commit -m "feat: clarify Veyra concept evidence"
```

---

## Final Review Gate

- [ ] Compare the implementation line by line with the linked design spec and check every requirement above.
- [ ] Run `rtk rg -n 'TB[D]|TO[D]O|implement[[:space:]]later|similar[[:space:]]to' docs/superpowers/plans/2026-08-23-portfolio-conversion-pass.md`; expected: no matches.
- [ ] Run `rtk npm run lint && rtk npm run build && rtk git diff --check`; expected: all exit 0.
- [ ] Confirm no new dependency, route, CMS, global state, or production component abstraction was added.
- [ ] Confirm `PROJECT_REVIEW.md` and `.serena/` remain outside all implementation commits.
