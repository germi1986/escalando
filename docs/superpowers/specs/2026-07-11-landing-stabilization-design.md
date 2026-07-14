# Landing stabilization design

## Objective

Replace the current public homepage runtime with a lightweight, server-rendered commercial landing that communicates the product clearly and cannot regress to the Three.js hero through the active route.

## Scope

- Public homepage only.
- Preserve the existing dark Escalando Labs identity.
- Clarify the value proposition around WhatsApp, AI, CRM, follow-up and human takeover.
- Use one illustrative product view instead of several competing mockups.
- Keep `/demo`, legal pages, analytics, Supabase, auth, WhatsApp flows and the panel untouched.

## Architecture

- `app/page.tsx` becomes the single source of truth for the public homepage and imports only the new stable component and stylesheet.
- `app/HomeStable.tsx` is a React Server Component containing navigation, hero, funnel sections, pricing, FAQ and footer.
- `app/home-stable.css` is self-contained and does not depend on the legacy V4.5 stylesheet.
- The legacy V4.5 and Three.js files remain in the repository for now but are unreachable from the public route. Their deletion and dependency cleanup are deferred until the preview is validated.

## UX decisions

- Primary CTA: `Ver demo interactiva`.
- Secondary CTA: direct WhatsApp commercial conversation.
- Header navigation: Plataforma, Cómo funciona, Casos de uso, Precios, FAQ.
- Mobile navigation uses native `<details>` and requires no client-side JavaScript.
- Pricing cards include plan-specific CTAs.
- Claims are illustrative and explicitly labelled; no fabricated lead counts or customer proof.
- The final CTA does not point to the legal contact page.

## Visual decisions

- Dark navy background, one cyan accent and one restrained green support accent.
- No WebGL, 3D models, automatic carousel or continuous animation.
- One static product preview with readable type and clear hierarchy.
- Reduced glassmorphism, gradients and decorative layers.
- Visible keyboard focus, skip link and reduced-motion support.

## Validation

- Vercel preview build must succeed.
- Homepage must load without importing Three.js in its active component graph.
- Verify desktop and mobile navigation, all anchors, `/demo`, WhatsApp links, pricing CTAs and FAQ controls.
- Confirm `/demo`, legal pages and panel routes remain unchanged.
