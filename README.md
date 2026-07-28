# ROTTU KADAI — Restaurant Website

A premium, mobile-first, fully static homepage for a fast-food shop, built with
React (Vite), Tailwind CSS, React Router DOM, Framer Motion, and React Icons.
No backend, database, auth, or ordering system — showcase site only.

## Design tokens
- Primary (yolk): `#FACC15`
- Background (ink): `#0F0F0F`
- Card (ink-card): `#18181B`
- Secondary text (smoke): `#A1A1AA`
- Accent (chili): `#DC2626` — used sparingly for spice cues
- Fonts: **Outfit** (display/headings) + **Poppins** (body)
- Radius: 16px (`rounded-card`)

### Signature design element
A "roadside tin-signboard" visual language: a tilted yolk-yellow logo badge,
notched "steel-plate" card edges (`.plate-edge`) on dish photography, a rising
steam animation on the hero dish, and a hand-lettered "Today's Special"
chalk tag — all nodding to the Tamil-Nadu roadside *kadai* the brand is named
after, rather than a generic template look.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/
    Navbar.jsx          Sticky nav + mobile hamburger menu
    Hero.jsx             Full-screen hero with stats + marquee
    PopularDishes.jsx    6 featured dish cards
    WhyChooseUs.jsx      4 value-prop cards
    Reviews.jsx           3 customer review cards
    GalleryPreview.jsx    Responsive image grid + CTA
    ContactPreview.jsx    Address / phone / hours / map / WhatsApp
    Footer.jsx             Logo, links, contact, socials
  pages/
    Home.jsx              Assembles all homepage sections
    PagePlaceholder.jsx   Stub for /menu /gallery /about /contact routes
  App.jsx                 Router + shared layout
  main.jsx                Entry point
  index.css               Tailwind + custom utilities (grain, plate-edge, etc.)
```

## Notes
- All dish, gallery, and hero images are Unsplash placeholder photography —
  swap the URLs in `PopularDishes.jsx`, `Hero.jsx`, and `GalleryPreview.jsx`
  with your own food photography before going live.
- Phone number, WhatsApp number, and address are placeholders — update the
  constants at the top of `Navbar.jsx`, `ContactPreview.jsx`, and `Footer.jsx`.
- The Google Map embed in `ContactPreview.jsx` uses a generic query string;
  replace it with your exact `maps.google.com` embed link for the real address.
- Nav links (`Menu`, `Gallery`, `About`, `Contact`) scroll to in-page sections
  by default (`/#menu`, `/#gallery`, etc). Dedicated routes (`/menu`,
  `/gallery`, `/about`, `/contact`) exist as placeholders, ready for you to
  build out full pages later.
