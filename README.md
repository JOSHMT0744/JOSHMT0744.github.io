# Josh Thompson — Personal Portfolio

A neobrutalism-styled personal portfolio and project showcase, built with Next.js and Tailwind CSS. The site presents my background, experience, and projects in a bold, windowed layout that works across desktop, tablet, and phone viewports.

## What’s on the site

- **Home** — Short intro, profile photo, and links to Gmail, GitHub, LinkedIn, and Armature Labs. Tabbed sections:
  - **About Me** — Favourite words and phrases (values and quotes).
  - **Education & Experience** — MSci Maths & Computer Science (Durham), interests in autonomous systems, RL, and Bayesian statistics; hover cards for societal positions (e.g. VM Tennis, Hockey, Lacrosse) and volunteering (Code Club); an infinite **marquee** of roles and employers (e.g. Data Consultant/Engineer/Scientist, Co-Founder at Armature Labs) with company logos.
  - **Contact Me** — Email, LinkedIn profile, and location (London).
- **Projects** — Scrollable list of projects (Armature Labs, Entropy-Regularised IoT, MerlinPDF, Grade 8 Piano) with preview images, descriptions, and optional “Visit” / “Github” links. Layout and buttons adapt when a project has only one link.
- **Layout** — Fixed “window” (max width 1000px), sidebar with name on larger screens, top nav (Home, Projects, theme toggle). Responsive so the window uses full width on small screens and tabs/lists stack on narrow viewports.

## Tech stack

- **Next.js** (App Router)
- **Tailwind CSS** (custom breakpoints, theme)
- **Radix UI** (Tabs, Hover Card, etc.)
- **next-themes** for light/dark mode
- Icons: **Simple Icons**, **Lucide**, custom (e.g. Armature Labs, star)

## Get started

### Install and run

This project uses **pnpm**. Install dependencies and run the dev server:

```bash
pnpm i
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm run build
pnpm start
```

## Project structure (high level)

- `src/app/` — App Router: `layout.tsx`, `page.tsx` (home), `work/page.tsx` (projects).
- `src/components/` — Nav, theme provider, UI primitives (tabs, hover-card, image-card, label, marquee, etc.), icons and stars.
- `public/` — Static assets (images, logos, SVGs).
- Styling: `src/app/globals.css` (theme, keyframes), `tailwind.config.ts` (screens, animations).

## Customisation

- **Site metadata** — Edit `src/app/layout.tsx` (e.g. `metadata.title`).
- **Home content** — Update copy, links, marquee items, and tab content in `src/app/page.tsx`.
- **Projects** — Edit the `PROJECTS` array in `src/app/work/page.tsx` (name, description, `previewImage`, `liveLink`, `repoUrl`). Use `/filename` for images in `public/`.
- **Styling** — Adjust colours and tokens in `src/app/globals.css`; extend breakpoints or animations in `tailwind.config.ts`.

Based on the [windowed portfolio](https://github.com/neobrutalism-templates/windowed-portfolio) template (neobrutalism). Styling ideas: [neobrutalism.dev](https://www.neobrutalism.dev/).
