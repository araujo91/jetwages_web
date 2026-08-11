# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Current live landing page: hero, features, links, and a **Privacy, Data & Licenses** section. The privacy and licenses actions sit in a centered **`.policy-btn-row`**: two equal-width buttons side by side on wider viewports, stacked in one column under ~520px (`index.css`).
- **`indexv2.html`** — Redesigned marketing landing (not yet the live home). Self-contained CSS/JS. Uses real app screenshots from **`screenshots/MainPage/`** and **`graphics/Instructions/`**, app terminology (Pie View, Basic / Sector / Commission / Extras / Deductions, Add Sales, Add Extras), and privacy copy aligned with **`privacy-policy.html`** (on-device storage; PDFs deleted after parse). Primary CTA is sign-up for updates (same form as `index.html`).
- **`index.css`** — Shared styles for the live landing page, including the policy button row and **`.btn-grad`** (teal→navy gradient CTA using `--grad-a` / `--grad-b`).
- **`constants-init.js` / `constants.js`** — Site URLs and `data-const` link resolution.
- **`theme.js`** — Colour theme: follows OS `prefers-color-scheme`, optional `data-theme` override via the **`.theme-toggle`** control (cycles Auto → Light → Dark), persisted in `localStorage` (`jw-theme`). `indexv2.html` embeds its own equivalent toggle.
- **`instructions.html`** / **`instructions.css`** — Setup guide with the same sticky header, container, cards, buttons, and theme toggle as the landing page; tabbed Quick Setup / Preparation / How to Use content. Screenshots live under **`graphics/Instructions/`** (`Setup/`, `calendarSync/`, `EditDay/`, plus root images for sales, extras, pie view, and dark mode).
- **`screenshots/MainPage/`** — Landing gallery images (welcome, calendar, stats, pie) used by `index.html` and `indexv2.html`.
- **`privacy-policy.html`**, **`licenses.html`** — Supporting pages with their own CSS (`privacy-policy.css`, **`licenses.css`**) using the same design tokens.

## Design-system colour palette

All page stylesheets (`index.css`, `instructions.css`, `licenses.css`, `privacy-policy.css`) share the same CSS variables. Theme follows **`prefers-color-scheme`**, and can be forced with **`data-theme="light"`** or **`data-theme="dark"`** on `<html>` (set by `theme.js`).

| Token | Role |
| --- | --- |
| `--bg` | Page background |
| `--panel` | Cards / elevated surfaces |
| `--text` / `--muted` | Body / secondary text |
| `--brand` / `--brand-2` | Primary CTAs & links / hover |
| `--primary-muted` | Soft selected / chip states |
| `--green` / `--red` / `--accent` | Success / error / highlight |
| `--grad-a` → `--grad-b` | Chart / hero gradients; also `.btn-grad` fill |
| `--surface-muted` | Quiet surfaces |
| `--border` / `--border-muted` | Dividers |
| `--on-primary` | Text on brand (or accent) fills — navy in light, `#0d2130` in dark |

## Latest change

- Updated **`indexv2.html`** to use real screenshots (`graphics/icon.png`, `screenshots/MainPage/*`, `graphics/Instructions/*`) instead of missing `app/` placeholders; replaced faux PDF mocks and invented pay figures with actual app screens; aligned marketing copy with app language and the privacy policy; CTAs point at the updates signup form and instructions rather than placeholder store links.


### Day-to-day workflow
\`\`\`bash
git add .
git commit -m "message"
git push gitea main       # work-in-progress, private
\`\`\`

### Publishing to GitHub
Only push to \`origin\` when a feature is finished and ready to go live:
\`\`\`bash
git push origin main
\`\`\`