# CleaningBusiness.ai Landing Page

A single high-converting landing page at `/` for CleaningBusiness.ai, co-branded between Order of Work and ISSA Canada, driving sign-ups to the Stripe checkout link.

## Visual direction

- **Tone:** Professional, trustworthy, modern SaaS for the cleaning/facilities industry. Confident but not flashy.
- **Color palette:** ISSA Canada blues as primary (deep navy + bright cyan-blue gradient from the logo), Order of Work red as a high-impact accent for CTAs and price highlights, charcoal/near-black for contrast sections, off-white background.
- **Typography:** Clean modern sans (Inter / Geist-style) with a bolder display weight for hero and section headers.
- **Logos:** Both uploaded logos (ISSA Canada, Order of Work "OW" mark) uploaded as Lovable Assets and shown in the nav as a co-branded lockup ("In partnership with"). ISSA logo also reinforced in the member-offer section.

## Page sections (in order)

1. **Nav bar** — Co-branded lockup (OW mark + ISSA Canada), domain wordmark "CleaningBusiness.ai", primary "Sign Up" button (Stripe link).
2. **Hero**
   - Eyebrow: "In partnership with ISSA Canada"
   - H1: "Turn Local Cleaning Opportunities Into New Contracts"
   - Sub: "Your AI Sales Assistant for Cleaning Business Growth"
   - Short paragraph from the brief
   - Primary CTA → Stripe link, secondary "See what's included" (anchor to features)
   - Right side: stylized AI-assistant/dashboard visual (CSS-composed mock card showing daily opportunities — no stock photos)
3. **Value strip** — "More Leads. Better Follow-Up. More Wins." with the three "No more…" lines as crossed-out pain points.
4. **Features grid (4 cards)** — Find New Sales Opportunities Daily / Know Your Competition / Close Deals Faster / Stay Focused. Each with an icon (Lucide), headline, and the supplied description.
5. **How it works** — 3 short steps (Sign up → AI scans your service area daily → You act on prioritized opportunities).
6. **Pricing — Exclusive ISSA Canada Member Offer**
   - Two-card comparison: Regular ($875/mo, $1,750 setup) shown struck-through/muted vs. Member ($299/mo, $575 setup) highlighted with red accent.
   - "Save over 65%" badge.
   - CTA → Stripe link.
7. **Final CTA band** — "Start Building Your Sales Pipeline Today" + Sign Up button + "Limited-time offer for active ISSA Canada members."
8. **Footer** — Co-branded lockup, copyright, simple links (Contact, Terms — placeholder anchors), small "Powered by Order of Work" line.

All CTA buttons link to `https://buy.stripe.com/dRm9AVgJigVObCyebt8bS05` (target=_blank, rel=noopener).

## SEO

- `<title>`: "CleaningBusiness.ai — AI Sales Assistant for Canadian Cleaning Businesses"
- Meta description ~155 chars highlighting ISSA Canada partnership and member pricing.
- OG title/description/image set on the route's `head()`.
- Single H1, semantic section headings, alt text on both logos.

## Technical details

- Single route: replace placeholder in `src/routes/index.tsx` with the landing page content; per project conventions also set route `head()` meta.
- Components co-located: `src/components/landing/{Nav,Hero,ValueStrip,Features,HowItWorks,Pricing,FinalCta,Footer}.tsx`.
- Logos uploaded via `lovable-assets` CLI from `/mnt/user-uploads/sitelogo.png` and `/mnt/user-uploads/logo-mark.png` → `src/assets/*.asset.json`, imported as ES modules.
- Design tokens (ISSA blue, OW red, navy, neutrals, gradients, shadows) added to `src/styles.css` in `oklch` and wired through `@theme inline`. All components use semantic tokens, no hard-coded colors.
- shadcn `Button` and `Card` reused; Lucide icons for features.
- No backend changes; Stripe link is a plain external anchor — no Lovable Cloud needed.
