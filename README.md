# Paul Angelo Magbanua — Portfolio

A modern, responsive software developer portfolio built with **Nuxt 3**, **Vue 3 (Composition API)**, and **TypeScript**.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server (http://localhost:3000):

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Generate a static site (for static hosting):

```bash
npm run generate
```

## Project Structure

```
app/
├── assets/
│   ├── css/main.css       # Design tokens & global styles
│   └── images/            # Source images
├── components/
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── About.vue
│   ├── Skills.vue
│   ├── Projects.vue
│   ├── Education.vue      # includes "Currently Learning"
│   ├── Contact.vue
│   └── Footer.vue
├── plugins/
│   └── reveal.client.ts   # v-reveal scroll-in animation directive
├── pages/
│   └── index.vue
└── app.vue

public/
├── profile.jpg            # placeholder — replace with your photo
├── favicon.png            # placeholder
└── resume.pdf             # placeholder — replace with your real resume
```

## Customizing Content

- **Profile photo**: replace `public/profile.jpg` (used by `Hero.vue`).
- **Resume**: replace `public/resume.pdf` (linked from the "Download Resume" button).
- **Projects**: edit the `projects` array in `app/components/Projects.vue` — update the GitHub and Live Demo links (currently `#` placeholders).
- **Social links**: update the `socials` array in `app/components/Contact.vue`.
- **Contact form**: `handleSubmit()` in `Contact.vue` currently only shows a confirmation state. Wire it up to an email service (e.g. Formspree, EmailJS) or a Nuxt server API route (`server/api/contact.post.ts`) to actually deliver messages.

## Design Tokens

Colors, fonts, spacing, and shadow values are all defined as CSS variables in `app/assets/css/main.css`, following the palette:

| Role       | Color     |
|------------|-----------|
| Primary    | `#2563EB` |
| Secondary  | `#1E293B` |
| Accent     | `#38BDF8` |
| Background | `#F8FAFC` |
| Text       | `#0F172A` |

Fonts: **Poppins** (headings) and **Inter** (body), loaded via Google Fonts in `nuxt.config.ts`. **JetBrains Mono** is used sparingly for code-style accents (section eyebrows, chips) to reflect a developer's portfolio.

## Deployment

The project is ready to deploy on **Vercel** or **Netlify** — both auto-detect Nuxt 3 and require no extra configuration for the default `npm run build` output.
