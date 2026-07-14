# Legal Pages Dark Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the four public legal pages so they visually match the premium dark Escalando Labs landing while preserving legal content and adding the confirmed address and fiscal ID.

**Architecture:** Keep `LegalPageLayout.tsx` as the single shared structural component and add a colocated CSS Module for all legal-page visuals. Existing page content stays untouched except for the two confirmed fields in `/contacto`; legacy utility classes are supported by mapping their CSS variables inside the new legal root.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, CSS Modules, `next/font`, `next/image`.

## Global Constraints

- Work only on `agent/legal-pages-dark-refresh`.
- Do not alter legal meaning, metadata, routes, backend, analytics, Supabase, auth, RLS, n8n, Meta integration or environment variables.
- Use Manrope and IBM Plex Mono, matching the current premium landing.
- Use the confirmed address `San Francisco 324, Turdera, Buenos Aires, Argentina`.
- Use the confirmed fiscal ID / CUIT `20-32475318-5`.
- Do not merge into `main` without explicit approval.

---

### Task 1: Shared legal layout and visual system

**Files:**
- Modify: `app/components/legal/LegalPageLayout.tsx`
- Create: `app/components/legal/LegalPageLayout.module.css`

**Interfaces:**
- Consumes: existing `title`, `subtitle`, `eyebrow` and `children` props.
- Produces: the same exported `LegalPageLayout`, `LegalSection` and `LegalList` APIs so all four pages continue compiling without content changes.

- [ ] **Step 1: Replace the current Tailwind-heavy shell with the premium dark shared structure**

Implement a root `<div>`, skip link, sticky header, brand link, legal navigation, main hero, two-column content layout, sticky related-pages aside and footer. Use `Image`, `Manrope`, `IBM_Plex_Mono` and the CSS Module.

- [ ] **Step 2: Add the CSS Module**

Define the dark palette, legacy variable mapping, responsive shell, header, brand, hero, content card, legal typography, list markers, related navigation, footer, focus states and mobile breakpoints. Override existing rounded utility blocks inside legal content to use restrained 10 px corners.

- [ ] **Step 3: Verify API compatibility**

Confirm all four page imports remain valid and no individual legal document requires structural rewrites.

### Task 2: Confirmed public business information

**Files:**
- Modify: `app/contacto/page.tsx`

**Interfaces:**
- Consumes: existing `LegalPageLayout`, `LegalSection` and `LegalList`.
- Produces: public contact information without placeholders.

- [ ] **Step 1: Replace placeholders**

Replace the legal-address placeholder with `San Francisco 324, Turdera, Buenos Aires, Argentina` and the fiscal-identification placeholder with `CUIT 20-32475318-5`.

- [ ] **Step 2: Preserve all other contact wording and metadata**

Do not change email, operator name, country, canonical URL or client-final guidance.

### Task 3: Validation and preview

**Files:**
- Review: `app/privacidad/page.tsx`
- Review: `app/terminos/page.tsx`
- Review: `app/contacto/page.tsx`
- Review: `app/eliminacion-datos/page.tsx`

- [ ] **Step 1: Run static validation**

Run `npm run lint`, `node ./node_modules/typescript/bin/tsc --noEmit` and `npm run build`. Expected: zero new errors; only previously documented warnings may remain.

- [ ] **Step 2: Verify deployment**

Push the branch and wait for the Vercel preview to reach READY.

- [ ] **Step 3: Verify routes**

Confirm `/privacidad`, `/terminos`, `/contacto` and `/eliminacion-datos` each return HTTP 200 and include the new shared legal shell.

- [ ] **Step 4: Review responsive behavior**

Check no horizontal overflow and readable hierarchy at 1440, 768, 430, 390 and 360 px. Confirm sticky desktop navigation degrades cleanly on mobile.

- [ ] **Step 5: Open a pull request**

Create a PR to `main` summarizing the visual refresh, preserved legal scope, confirmed public information and validation results. Do not merge.