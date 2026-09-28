# Westside Brazilian Zouk — website

A small React + TypeScript site built with Vite. The only runtime dependency is React, so there is little to break or update.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:5173
```

Edits show up in the browser as soon as you save.

## Where to change things

| I want to change… | Edit this file |
| --- | --- |
| Colors, fonts, spacing, corner rounding | `src/styles/theme.css` |
| Font files that load | the Google Fonts link in `index.html` |
| Site name, tagline, logo, email, Instagram, venue, report-form link | `src/config/site.ts` |
| Text on a page | `src/pages/<Page>Page.tsx` |
| Class night, time, prices | top of `src/pages/ClassesPage.tsx` |
| Menu order, page titles, add/remove a page | `src/routes.tsx` |
| Header / footer | `src/components/layout/` |

Search the project for `TBD` to find every placeholder that still needs real info.

### Use your brand later

1. **Colors & fonts:** change the values in `src/styles/theme.css`. Every component reads from these tokens, so the whole site updates.
2. **Logo:** put the file in `public/` (e.g. `public/logo.svg`) and set `logo.src: "./logo.svg"` in `src/config/site.ts`.
3. **Favicon:** replace `public/favicon.svg`.

### Add a page

1. Copy an existing file in `src/pages/` (e.g. `AboutPage.tsx`) and rename it.
2. Add it to the list in `src/routes.tsx`. Give it a `navLabel` to show it in the menu.

## Project structure

```
src/
  config/site.ts          site-wide settings
  routes.tsx              page list + menu
  router/router.tsx       tiny hash router (no extra library)
  styles/theme.css        design tokens (colors, fonts, spacing)
  styles/global.css       base element styles
  components/layout/      Header, Footer, Layout
  components/ui/          reusable blocks: Section, Card, Button, Callout, Faq, PageHeader
  pages/                  one file per page
```

Each component keeps its styles in a matching `.module.css` file, so styles never leak between components.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site automatically (see `.github/workflows/deploy.yml`).

Page URLs look like `yoursite/#/classes`. This "hash" style is what lets every link and refresh work on GitHub Pages without extra setup.

To use a custom domain (e.g. `westsidezouk.com`), add it under **Settings → Pages → Custom domain**.

## Checks

```bash
npm run typecheck   # catches mistakes in the code
npm run build       # typecheck + production build into dist/
```
