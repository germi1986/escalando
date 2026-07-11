# Landing Stabilization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a lightweight, clearer and conversion-oriented Escalando Labs homepage without changing product, auth, data or integration code.

**Architecture:** Route `app/page.tsx` to a new server-rendered homepage component and a self-contained stylesheet. Keep the legacy landing files unreachable until the preview is approved, then clean them in a separate task.

**Tech Stack:** Next.js 16 App Router, React 19 Server Components, CSS, `next/image`.

## Global Constraints

- Do not modify Supabase, auth, panel routes, API routes, n8n, WhatsApp workflows, analytics or environment variables.
- Do not add dependencies.
- Do not use Three.js, Canvas, GLB assets or automatic carousels in the active homepage.
- Keep pricing and commercial claims transparent.

---

### Task 1: Create the stable homepage component

**Files:**
- Create: `app/HomeStable.tsx`

**Interfaces:**
- Consumes: `/brand-icon.png`, `/whatsapp-icon.png`, `/demo`, legal routes.
- Produces: default React Server Component `HomeStable`.

- [ ] Build semantic header, main sections and footer.
- [ ] Add native mobile navigation using `<details>`.
- [ ] Add one static, explicitly illustrative product preview.
- [ ] Add plan-specific WhatsApp CTAs and final commercial CTAs.
- [ ] Use the exact section IDs consumed by navigation and preserve an alias for `#planes`.

### Task 2: Add the isolated visual system

**Files:**
- Create: `app/home-stable.css`

**Interfaces:**
- Consumes: class names from `HomeStable.tsx`.
- Produces: responsive desktop/mobile styling without runtime animation.

- [ ] Define the dark navy and cyan visual system.
- [ ] Style readable typography and restrained surfaces.
- [ ] Add focus-visible, skip-link and reduced-motion rules.
- [ ] Validate mobile stacking and native navigation.

### Task 3: Switch the public route

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `HomeStable` and `home-stable.css`.
- Produces: public `/` route.

- [ ] Remove the active imports of `HomeV45` and `home-v45.css`.
- [ ] Import and render only the stable homepage.

### Task 4: Verify through Git and Vercel

**Files:**
- No source file changes unless verification finds an issue.

- [ ] Open a draft PR against `main`.
- [ ] Confirm the Vercel preview build status.
- [ ] Inspect the preview homepage on desktop and mobile.
- [ ] Check navigation anchors, `/demo`, WhatsApp links, plan CTAs and FAQ interactions.
- [ ] Confirm unrelated routes were not modified.
