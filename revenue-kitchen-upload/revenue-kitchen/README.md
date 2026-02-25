# Revenue Kitchen — Next.js Website

## Quick Start

```bash
# 1. Scaffold a new Next.js app (if you haven't already)
npx create-next-app@latest revenue-kitchen --typescript --tailwind --eslint --app --no-src-dir

# 2. Replace the generated files with this repo's files
# (copy everything from this folder into your new project)

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
revenue-kitchen/
├── app/
│   ├── layout.tsx        # Root layout + Google Fonts
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # Design tokens + animations
├── components/
│   ├── Nav.tsx           # Sticky nav, mobile menu
│   ├── Hero.tsx          # Hero section
│   ├── ProofStrip.tsx    # Scrolling ticker
│   ├── Services.tsx      # 6-card service grid
│   ├── CaseStudies.tsx   # Case studies + animated bar charts
│   ├── About.tsx         # About Danny
│   ├── Contact.tsx       # Contact form (wire up to Resend/Formspree)
│   └── Footer.tsx        # Footer
├── tailwind.config.ts    # Custom teal/white theme
└── README.md
```

## Customise

- **Photo**: In `About.tsx`, replace the placeholder div with `<Image src="/danny.jpg" ... />`
- **Contact form**: In `Contact.tsx`, replace `console.log` with your email API (Resend recommended)
- **Booking link**: Swap the form for a Calendly embed if preferred
- **Content**: All copy lives inside each component file — easy to edit

## Deploy

Easiest: [Vercel](https://vercel.com) — connect your GitHub repo and it deploys automatically.

```bash
npm run build   # Check for errors before deploying
```
