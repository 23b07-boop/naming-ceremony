# Invitation Nation — Naming Ceremony Invitation

A pixel-accurate recreation of the **Invitation Nation** naming ceremony webpage built with **React.js + Vite** for the Code Nimbus Solutions Front-End Developer Intern assignment.

## Tech Stack

- React 18
- Vite 6
- JavaScript (ES2022+)
- Vanilla CSS (CSS Custom Properties)
- Lucide React (icons)

## Features

- ✅ Sticky blurred navigation bar with scroll effect
- ✅ Hero invitation card with arched design and baby portrait oval
- ✅ Live countdown timer to the ceremony date
- ✅ Warm invite section with decorative pink bow
- ✅ Venue section with circular image and map link
- ✅ Interactive wishes carousel with slide animation
- ✅ Send wishes form with success feedback
- ✅ Event schedule grid with bow decorations
- ✅ Embedded video section
- ✅ Scroll-reveal animations (IntersectionObserver)
- ✅ Hover effects on buttons, circles, and cards
- ✅ Desktop-first layout (1200px max-width)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
cd invitation-nation
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build

```bash
npm run build
```

The output is in the `dist/` folder.

---

## Deployment on Vercel (Recommended)

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — Vercel Dashboard (no CLI needed)

1. Push this project to a **GitHub repository**.
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** → **"Import Git Repository"**.
4. Select this repo → Vercel auto-detects Vite. Click **Deploy**.
5. Your live URL will be ready in ~60 seconds.

---

## Deployment on Netlify

1. Push to GitHub.
2. Go to [https://netlify.com](https://netlify.com) → **"Add new site"** → **"Import an existing project"**.
3. Connect GitHub, select the repo.
4. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
5. Click **Deploy site**.

---

## Project Structure

```
src/
  components/
    Navbar.jsx / Navbar.css
    Hero.jsx   / Hero.css
    Countdown.jsx / Countdown.css
    WarmInvite.jsx / WarmInvite.css
    Venue.jsx  / Venue.css
    WishesCarousel.jsx / WishesCarousel.css
    SendWishes.jsx / SendWishes.css
    Schedule.jsx / Schedule.css
    VideoSection.jsx / VideoSection.css
    Footer.jsx / Footer.css
  App.jsx / App.css
  index.css
  main.jsx
```

---

## Assignment

- **Company:** Code Nimbus Solutions
- **Position:** Front-End Developer Intern
- **Reference:** https://nam002-livedemo.invitationnation.in/#home
- **Deadline:** 21 September 2026
