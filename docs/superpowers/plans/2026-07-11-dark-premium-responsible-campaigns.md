# Dark Premium Landing + Responsible Campaigns Implementation Plan

Implementation completed on branch `agent/landing-stabilization`.

## Goal

Replace the rejected editorial landing with a dark premium, product-led landing that clearly explains attention, follow-up and responsible WhatsApp campaigns.

## Completed Work

- Added `app/HomeDarkPremium.tsx`.
- Added `app/home-dark-premium.css`.
- Added `app/home-dark-consent-overrides.css`.
- Switched `app/page.tsx` to the new isolated implementation.
- Preserved previous landing files for rollback.
- Kept Supabase, auth, RLS, panel routes, APIs, n8n, WhatsApp sending logic, campaign backend, analytics, environment variables, legal pages and pricing values unchanged.

## Responsible Messaging Constraints

- No universal claim that Meta removed all free broadcast lists.
- No permanent fixed price per 1,000 messages.
- No claim that Escalando Labs guarantees template approval, prevents restrictions or bypasses provider fees.
- Public copy emphasizes consent, opt-out respect, segmentation, frequency, official templates when required and number-quality protection.

## Verification

- Active implementation commit: `946bb19abf3154f6fab2d07aa1df3d63ea359efe`.
- Vercel deployment: `dpl_FpWHbG7EVSCWdutUXZ4TtNhjh88C`.
- Deployment status: `READY`.
- Next.js 16.2.6 compiled successfully.
- TypeScript completed successfully.
- Static generation completed for 14/14 pages.
- `/` returned HTTP 200 and rendered root class `landing-dark`.
- `/demo`, `/contacto`, `/privacidad`, `/terminos`, `/eliminacion-datos` and `/api/meta/conversions` remained in the build.
- Production remains unchanged.

## Preview

`https://escalando-git-agent-landing-stabilization-holazapas-projects.vercel.app/`

PR #2 remains draft pending Germán’s visual review.
