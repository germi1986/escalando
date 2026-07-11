# Editorial Operations Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the public landing's generic rounded-card SaaS style with a square, editorial-industrial design centered on operational clarity.

**Architecture:** Keep the homepage server rendered and isolated in `app/HomeStable.tsx` plus `app/home-stable.css`. Preserve all existing routes, analytics and integrations. Use semantic HTML, native `details`, `next/image` and `next/font/google`; do not add client state or animation libraries.

**Tech Stack:** Next.js 16 App Router, React 19 server components, CSS, Archivo, IBM Plex Mono, Vercel previews.

## Global Constraints

- Default border radius is `0`; controls may use at most `2px`.
- No gradients, glassmorphism, soft shadows, floating cards, Three.js, Canvas or GLB assets.
- Cobalt `#2557F6` is the commercial action color.
- Signal green `#20D68A` is reserved for operational states.
- Preserve `/demo`, `/contacto`, `/privacidad`, `/terminos`, `/eliminacion-datos` and `/api/meta/conversions`.
- Do not modify Supabase, authentication, panel routes, APIs, analytics, n8n, WhatsApp integration, environment variables or legal pages.

---

### Task 1: Rebuild the homepage semantic structure

**Files:**
- Modify: `app/HomeStable.tsx`

**Interfaces:**
- Consumes: `/brand-icon.png`, `/whatsapp-icon.png`, `/demo`, WhatsApp `wa.me` links.
- Produces: default server component `HomeStable` and the class names consumed by `app/home-stable.css`.

- [ ] **Step 1: Replace generic card vocabulary**

Use `Archivo` and `IBM_Plex_Mono` from `next/font/google` and expose their variables on the root landing element:

```tsx
const archivo = Archivo({ subsets: ['latin'], variable: '--font-editorial', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-technical', display: 'swap' })

<div className={`landing-editorial ${archivo.variable} ${plexMono.variable}`} id="inicio">
```

- [ ] **Step 2: Build the editorial hero**

Render a twelve-column layout with a technical index, the approved headline, two CTAs and a static operations console. Keep the product label `Ejemplo ilustrativo` visible.

- [ ] **Step 3: Convert repeated cards into ruled layouts**

Render problem statements as numbered rows, operating steps as a connected sequence, industry cases as a matrix, pricing as three columns with vertical rules and FAQ as horizontal ruled rows.

- [ ] **Step 4: Preserve accessibility and routing**

Keep the skip link, semantic `main`, keyboard-visible links, native mobile `details`, `#planes` alias and all legal links.

- [ ] **Step 5: Commit**

```bash
git add app/HomeStable.tsx
git commit -m "feat: rebuild landing as editorial operations page"
```

### Task 2: Replace the visual system

**Files:**
- Modify: `app/home-stable.css`

**Interfaces:**
- Consumes: class names emitted by `HomeStable.tsx`.
- Produces: responsive desktop, tablet and mobile layouts.

- [ ] **Step 1: Define the palette and geometry**

```css
.landing-editorial {
  --paper: #f2efe7;
  --white: #faf9f5;
  --ink: #111317;
  --graphite: #2b3038;
  --rule: #c8c4ba;
  --cobalt: #2557f6;
  --signal: #20d68a;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--font-editorial), Arial, sans-serif;
}
```

Set all major blocks, buttons, navigation and product frames to square corners. Do not use `box-shadow`, `backdrop-filter`, `filter: blur()` or gradient backgrounds.

- [ ] **Step 2: Implement the editorial grid**

Use CSS Grid with strong one-pixel rules and large typography. Keep content width at `min(1440px, 100%)` and align major sections to consistent columns.

- [ ] **Step 3: Implement the operations console**

Use a black frame, white workspace, cobalt selection states and green operational statuses. Hide the secondary inbox/context columns on narrow mobile screens instead of shrinking labels below `12px`.

- [ ] **Step 4: Implement responsive behavior**

At `max-width: 980px`, collapse hero and product story to one column. At `max-width: 700px`, show the native menu, stack pricing columns and preserve one-pixel separators.

- [ ] **Step 5: Commit**

```bash
git add app/home-stable.css
git commit -m "style: apply editorial industrial landing system"
```

### Task 3: Validate the complete preview

**Files:**
- Verify: `app/page.tsx`
- Verify: `app/HomeStable.tsx`
- Verify: `app/home-stable.css`

**Interfaces:**
- Consumes: Vercel Git preview deployment.
- Produces: build evidence and visual screenshots.

- [ ] **Step 1: Confirm source isolation**

Run:

```bash
grep -R "HomeV45\|@react-three\|three'\|three\"" app/page.tsx app/HomeStable.tsx
```

Expected: no output.

- [ ] **Step 2: Build production output**

Run:

```bash
npm run build
```

Expected: successful Next.js compile, TypeScript completion and all static routes generated.

- [ ] **Step 3: Inspect preview response**

Run:

```bash
curl -I "$PREVIEW_URL"
```

Expected: HTTP 200.

- [ ] **Step 4: Review desktop and mobile screenshots**

Capture full-page screenshots at approximately 1440px and 390px widths. Confirm no rounded cards, no clipped headline, readable product labels, accessible mobile navigation and aligned pricing columns.

- [ ] **Step 5: Update PR evidence**

Add a PR comment containing build status, preview URL, visual review notes and any known limitations.
