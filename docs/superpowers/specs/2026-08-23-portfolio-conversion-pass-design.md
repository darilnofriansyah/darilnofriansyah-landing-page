# Portfolio Conversion Pass Design

## Goal

Reorder and refine the existing portfolio so visitors reach credible engineering evidence quickly, while preserving the current archive-inspired visual identity and existing routes.

## Scope

This pass changes only:

- Homepage hierarchy and conversion copy.
- Evidence shown for existing projects.
- Aegis and Veyra concept-data disclosure and responsive readability.
- Shared typography, interaction, and accessibility details required by those pages.

The Nexus, Research, Projects, and Contact routes remain available. Their information architecture is not redesigned in this pass.

## Non-Goals

- No new routes, CMS, analytics service, contact form, testimonials, or resume system.
- No new runtime or UI dependency.
- No invented customers, metrics, dates, outcomes, or production claims.
- No replacement of the current fonts, artwork, neutral palette, or project-specific Aegis and Veyra colors.
- No Figma deliverable.

## Design Direction

Use a content-first refinement instead of a visual rewrite. Keep the existing grid, typography family, restrained borders, dark project pages, and asymmetric hero. Reduce the amount of abstract material visitors must pass before seeing concrete work.

Project-specific colors remain inside Aegis and Veyra. General portfolio pages use the existing neutral palette with one subdued indigo accent.

## Homepage Information Architecture

The homepage order becomes:

1. Hero.
2. Featured work.
3. Nexus initiative summary.
4. About and capabilities.
5. Contact call to action.

The standalone working-philosophy, planned-research, and archive-timeline sections are removed from the homepage. Their underlying data and destination pages remain intact where already used.

### Hero

The hero keeps its split layout and current initiative panel. Its copy becomes more concrete:

- Identify Daril as a systems engineer working across automation, backend services, AI-integrated products, and quality engineering.
- Describe the work in terms of shipped systems and responsibilities, without unsupported outcome claims.
- Use `View Featured Work` as the primary action and `Contact` as the secondary action.
- Replace `Building since 2024` with `Based in Indonesia`, `Current focus: Nexus`, and `Available for collaboration` metadata. Do not claim availability beyond that neutral wording.

### Featured Work

Reuse `featuredProjects` as the homepage evidence source. Show Aegis, Veyra, and the portfolio itself as asymmetric case-study rows rather than generic equal cards.

Each entry shows only verified information already present in the repository:

- Project name and type.
- What was built.
- Practical impact stated without numeric claims.
- Technology stack.
- Internal case-study link when one exists.

The portfolio entry remains non-linked unless an explicit destination is added later. A missing link is rendered as a neutral `Current site` label rather than a disabled control.

### Nexus Summary

Keep the existing dark Nexus section and relationship diagram, but treat it as supporting context after featured work. Increase diagram label readability on mobile and preserve the existing `/nexus` link.

### About and Capabilities

Keep the current About content and discipline list. Remove the separate philosophy and archive sections instead of merging their copy into another long section.

### Contact Call to Action

Add a compact final section before the footer with one sentence and a link to `/contact`. Reuse the existing button styles and do not add a form.

## Project Detail Trust Model

Aegis and Veyra remain concept-oriented product pages. Their simulated dashboards must not be mistaken for production evidence.

### Disclosure

Place a visible disclosure immediately before each dashboard console:

> Concept interface — all operational and financial data below is illustrative.

The disclosure uses normal body-size text, sufficient contrast, and is included in the accessible reading order. The existing small `ILLUSTRATIVE` console code may remain as secondary decoration.

### Engineering Context

Add a compact factual block before the concept preview on each page:

- `Purpose`: the responsibility described by the current page copy.
- `Implementation`: the technologies already documented in `featuredProjects`.
- `Current status`: `Active concept`.
- `Evidence boundary`: the interface demonstrates intended behavior; displayed data is not a production result.

Do not add performance, user, revenue, reliability, or adoption claims.

## Responsive Readability

- Preserve single-column mobile layouts and prevent horizontal overflow at 390px.
- Collapse complex project grids by 1024px instead of waiting until 767px when their minimum columns become cramped.
- Use at least `0.75rem` for metadata and console labels and `0.875rem` for explanatory body copy.
- Reduce decorative metadata before shrinking essential content.
- Keep the Aegis and Veyra hero artwork, but ensure copy and primary action remain understandable in the first mobile viewport.
- Retain full dashboard information on mobile; stack it into a readable order rather than hiding evidence.

## Accessibility and Interaction

- Add `text-wrap: balance` to headings while retaining safe overflow wrapping.
- Add a tactile `.button:active` transform without overriding focus styles.
- Maintain the existing skip link, semantic landmarks, visible focus outline, and reduced-motion behavior.
- Keep status meaning in text; color remains supplementary.
- Provide a screen-reader-readable list of Veyra chart values and its threshold while leaving decorative bars hidden.
- Target at least 4.5:1 contrast for normal-size text in dark console surfaces.
- Mark above-fold Aegis and Veyra artwork as eager/priority images to match their actual loading role.

## Data and Component Boundaries

- `lib/portfolio.ts` remains the content source. Extend `featuredProjects` only with fields required by the featured-work rendering; do not introduce a second project model.
- `components/home-sections.tsx` owns homepage sections and may add focused featured-work and contact sections.
- `components/system-card.tsx` remains the system-index card; it is not expanded into a universal case-study component.
- Aegis and Veyra keep their page-local illustrative datasets because no other page consumes them.
- Shared visual rules stay in `app/globals.css`; page-specific rules remain under the existing Aegis and Veyra class namespaces.

## Verification

The implementation is accepted when:

- `npm run lint` passes.
- `npm run build` passes.
- Fresh 1440×1000 and 390×844 screenshots show no horizontal overflow, clipped headings, loading state, or accidental development overlay.
- Featured work appears immediately after the hero on desktop and mobile.
- Homepage research and archive timeline no longer render.
- Every featured project shows verified summary, impact, and stack content.
- Aegis and Veyra disclosures are visible before simulated data.
- Veyra chart values are available to assistive technology.
- Keyboard focus remains visible on navigation, featured-work links, and calls to action.

## Expected File Impact

- Modify `app/page.tsx`.
- Modify `components/home-sections.tsx`.
- Modify `lib/portfolio.ts`.
- Modify `app/projects/aegis/page.tsx`.
- Modify `app/projects/veyra/page.tsx`.
- Modify `app/globals.css`.
- Add no production component unless the implementation plan proves reuse makes it smaller than page-local markup.
