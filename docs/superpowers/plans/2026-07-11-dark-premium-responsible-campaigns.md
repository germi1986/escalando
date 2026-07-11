# Dark Premium Landing + Responsible Campaigns Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the active editorial landing with a dark premium, product-led landing that clearly explains attention, follow-up and responsible WhatsApp campaigns.

**Architecture:** Add a new isolated server-rendered home component and dedicated CSS files, then switch only `app/page.tsx` to the new implementation. Keep `HomeV45`, `HomeStable` and their CSS files untouched for rollback. All product visuals remain static HTML/CSS and illustrative.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `next/image`, `next/font`, plain CSS, Vercel preview deployments.

## Global Constraints

- Modify only the public home component, landing-specific CSS, consent-banner landing override and landing documentation.
- Do not modify Supabase, auth, RLS, panel routes, APIs, n8n, WhatsApp sending logic, campaign backend logic, analytics, environment variables, legal pages or pricing values.
- Do not use Three.js, Canvas, GLB, autoplay scenes, glassmorphism or blur-heavy panels.
- Do not claim that Meta removed free broadcast lists universally.
- Do not publish a permanent fixed price per 1,000 messages.
- Do not claim that Escalando Labs guarantees template approval, prevents bans or bypasses Meta fees.
- Preserve `/demo`, `/contacto`, `/privacidad`, `/terminos`, `/eliminacion-datos` and `/api/meta/conversions`.
- Keep prior landing implementations available for rollback.

---

### Task 1: Create the dark premium home component

**Files:**
- Create: `app/HomeDarkPremium.tsx`

**Interfaces:**
- Consumes: `/brand-icon.png`, existing `/demo` and legal routes, the public WhatsApp contact URL.
- Produces: default exported `HomeDarkPremium` React server component with root class `landing-dark`.

- [ ] **Step 1: Build the content model**

Define local constants for navigation, operating outcomes, workflow stages, plans and FAQ. Keep copy aligned with the approved spec and distinguish implemented capabilities from principles or implementation scope.

- [ ] **Step 2: Build a compact header and hero**

Use one moderate-size headline, two CTAs and one static product workspace showing conversation, intent, AI/human state and next follow-up. Avoid oversized display type and visible editorial numbering.

- [ ] **Step 3: Build the commercial narrative**

Add broad sections for the operational problem, the change in WhatsApp economics/rules, responsible campaigns, workflow, product depth, industry adaptability, plans, FAQ and final CTA.

- [ ] **Step 4: Validate semantic structure**

Ensure one `h1`, ordered `h2` hierarchy, accessible nav labels, native `details` for FAQ/mobile navigation, disabled non-interactive mock controls and no unavailable-feature claims.

- [ ] **Step 5: Commit**

```bash
git add app/HomeDarkPremium.tsx
git commit -m "feat: add dark premium landing content"
```

### Task 2: Create the dark premium visual system

**Files:**
- Create: `app/home-dark-premium.css`

**Interfaces:**
- Consumes: class names defined in `HomeDarkPremium.tsx`.
- Produces: responsive dark premium layout scoped under `.landing-dark`.

- [ ] **Step 1: Define scoped design tokens**

Create CSS custom properties for deep graphite backgrounds, elevated blue-black surfaces, soft-white text, cool-grey secondary text, controlled blue accent, green status and amber warning.

- [ ] **Step 2: Implement hierarchy and spacing**

Use broad section grouping, restrained max-widths, moderate heading sizes and natural whitespace. Do not expose a page grid or rely on repeated equal-size cards.

- [ ] **Step 3: Implement the product workspace**

Create a believable desktop product view with modest radius, subtle borders and restrained shadow. Product text must remain readable and simplify on smaller screens by hiding secondary panels.

- [ ] **Step 4: Implement responsive and accessible states**

Support desktop, tablet and mobile without horizontal overflow. Add visible focus states, minimum practical touch targets and `prefers-reduced-motion` handling.

- [ ] **Step 5: Commit**

```bash
git add app/home-dark-premium.css
git commit -m "style: add dark premium landing system"
```

### Task 3: Align the consent banner and activate the new home

**Files:**
- Create: `app/home-dark-consent-overrides.css`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: existing consent-banner markup/classes.
- Produces: active `/` route importing `HomeDarkPremium`, `home-dark-premium.css` and `home-dark-consent-overrides.css`.

- [ ] **Step 1: Create dark consent overrides**

Scope overrides under `.landing-dark` where possible and use restrained radius, dark surface, readable text, clear button hierarchy and no blur-heavy effect.

- [ ] **Step 2: Switch the active home import**

Replace the editorial imports in `app/page.tsx` with:

```tsx
import './home-dark-premium.css'
import './home-dark-consent-overrides.css'
import HomeDarkPremium from './HomeDarkPremium'

export default function HomePage() {
  return <HomeDarkPremium />
}
```

- [ ] **Step 3: Confirm rollback files remain untouched**

Verify `HomeV45.tsx`, `HomeStable.tsx`, `home-v45.css`, `home-stable.css` and `home-consent-overrides.css` still exist.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/home-dark-consent-overrides.css
git commit -m "feat: activate dark premium landing"
```

### Task 4: Verify build, routes and claims

**Files:**
- Modify: `docs/superpowers/specs/2026-07-11-dark-premium-responsible-campaigns-redesign.md` only if implementation details require clarification.
- Modify: PR #2 description.

**Interfaces:**
- Consumes: final branch head.
- Produces: successful Vercel preview and accurate draft PR metadata.

- [ ] **Step 1: Run the production build**

```bash
npm run build
```

Expected: Next.js compilation succeeds, TypeScript completes without errors and all static routes generate.

- [ ] **Step 2: Verify active route isolation**

Confirm `app/page.tsx` imports no Three.js, Canvas, GLB, `HomeV45` or `HomeStable` implementation.

- [ ] **Step 3: Verify public copy safety**

Search the active component for universal removal claims, fixed USD-per-1,000 pricing, guaranteed approval, ban prevention or fee-bypass claims. Expected: no matches.

- [ ] **Step 4: Verify preview**

Confirm branch deployment is `READY`, `/` returns HTTP 200 and the protected branch preview renders the new `landing-dark` root.

- [ ] **Step 5: Update PR metadata**

Describe the dark premium direction, responsible-campaign positioning, files changed, untouched systems and verification result. Keep PR as draft pending Germán’s visual review.

- [ ] **Step 6: Commit documentation changes if any**

```bash
git add docs/superpowers/specs/2026-07-11-dark-premium-responsible-campaigns-redesign.md
git commit -m "docs: align dark landing implementation notes"
```
