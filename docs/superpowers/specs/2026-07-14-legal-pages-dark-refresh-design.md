# Legal Pages Dark Refresh Design

## Objective

Align `/privacidad`, `/terminos`, `/contacto` and `/eliminacion-datos` with the premium dark visual system already used by the public Escalando Labs landing, without changing the substantive legal content.

## Scope

- Redesign the shared `LegalPageLayout` used by all four pages.
- Add a focused CSS Module for the legal-page visual system.
- Preserve metadata, route structure, legal wording and document hierarchy.
- Complete the confirmed public business information in `/contacto`:
  - Legal address: San Francisco 324, Turdera, Buenos Aires, Argentina.
  - Fiscal ID / CUIT: 20-32475318-5.

## Visual Direction

- Reuse the landing palette: near-black background, restrained blue accent, light primary text and muted secondary text.
- Use Manrope for interface and body text and IBM Plex Mono for labels and eyebrows.
- Keep borders subtle and corners moderately square, avoiding glassmorphism and oversized rounding.
- Match the landing brand treatment with the official icon, Escalando Labs wordmark, sticky header and restrained footer.
- Keep legal content highly readable with a wide text column, clear section rhythm and a sticky related-pages navigation on desktop.

## Architecture

- `app/components/legal/LegalPageLayout.tsx` remains the single shared structural component.
- `app/components/legal/LegalPageLayout.module.css` owns all new legal-page styles and maps legacy CSS variables used by existing page-level utility classes to the new palette.
- Individual legal pages remain content-focused. Only `/contacto` requires content modification for confirmed legal and fiscal data.

## Accessibility

- Preserve a skip link.
- Use one top-level `<main>` element per page.
- Keep visible focus states.
- Preserve semantic headings, lists, links and navigation labels.
- Maintain responsive behavior down to 360 px without horizontal overflow.

## Validation

- TypeScript and production build must pass.
- Vercel preview must reach READY.
- The four routes must return HTTP 200.
- Verify desktop and mobile hierarchy, navigation, long-form readability and no clipped content.
- Confirm `main` and production remain unchanged until explicit merge approval.