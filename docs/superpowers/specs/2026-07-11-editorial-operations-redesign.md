# Editorial Operations Redesign

## Objective

Replace the current card-heavy SaaS visual language with a distinctive editorial-industrial system that feels serious, deliberate and operational.

## Approved Direction

Combine editorial industrial design with an operations-center product language.

- Editorial narrative: oversized typography, strict grid, strong rules, asymmetric layouts and clear visual rhythm.
- Operational product: dense but readable interface, explicit states, measurable flow and technical labels.
- No rounded cards, glassmorphism, soft shadows, floating panels or decorative gradients.

## Palette

- Paper: `#F2EFE7`
- White: `#FAF9F5`
- Ink: `#111317`
- Graphite: `#2B3038`
- Rule: `#C8C4BA`
- Cobalt: `#2557F6`
- Signal green: `#20D68A`

Cobalt is the commercial action color. Signal green is reserved for operational status and proof.

## Typography

- Display and body: Archivo.
- Technical labels and status: IBM Plex Mono.
- Large display type uses tight tracking but readable line-height.
- Labels use uppercase monospace with restrained tracking.

## Geometry

- Default border radius: `0`.
- Buttons and controls may use at most `2px` radius.
- Sections are divided with one-pixel rules, not floating surfaces.
- Product previews are framed as technical workspaces with square corners.

## Page Structure

1. Fixed rectangular header with wordmark, minimal navigation and one cobalt CTA.
2. Hero using an asymmetric editorial grid and one large operations console.
3. Black trust strip with configurable-industry statement.
4. Problem section rendered as numbered editorial rows.
5. Three-step operating flow joined by rules, not cards.
6. Full-width product narrative with a large operational interface.
7. Industry use cases rendered as a matrix.
8. Pricing rendered as three columns separated by vertical rules.
9. FAQ rendered as ruled rows.
10. Final cobalt call-to-action block.

## Hero

Headline: `Que ninguna consulta quede sin seguimiento.`

Supporting message must explain that Escalando Labs unifies WhatsApp, AI and CRM with human control. The hero contains only two actions: interactive demo and WhatsApp evaluation.

The product visual must be static, server rendered and labelled as illustrative. It must not use Three.js, Canvas, GLB assets, auto-rotation or client hydration.

## Interaction

- No automatic motion.
- Hover changes are immediate and structural: underline, inversion or one-pixel translation.
- Native `details` remains for mobile navigation and FAQ.
- Visible keyboard focus is mandatory.
- Reduced motion remains supported.

## Responsive Behavior

- Desktop uses a twelve-column grid.
- Tablet collapses the hero into one column while preserving product density.
- Mobile removes secondary product columns instead of shrinking text below readable sizes.
- Navigation remains available through a square native menu.

## Scope

Modify only the public landing implementation and its local design documentation.

Do not modify Supabase, authentication, panel routes, APIs, analytics, n8n, WhatsApp integration, environment variables or legal pages.

## Validation

- Vercel production build must compile successfully.
- Home must return HTTP 200 in preview.
- `/demo`, legal routes and API routes must continue building.
- Desktop and mobile screenshots must be reviewed.
- Confirm no active import from Three.js or the V4.5 landing in `app/page.tsx`.
