# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Live marketing landing: hero, how it works, features, screenshots, privacy, FAQ, and signup CTAs. Uses real app screenshots from **`screenshots/MainPage/`** and **`graphics/Instructions/`**, plus app terminology (Pie View, Basic / Sector / Commission / Extras / Deductions).
- **`index.css`** — Stylesheet for the live landing page (extracted from the page; not inlined). Shares the site design tokens (light/dark).
- **`constants-init.js` / `constants.js`** — Site URLs and `data-const` link resolution (used by supporting pages and archived copies).
- **`theme.js`** — Colour theme helper for pages that use the shared `.theme-toggle` control. The live landing embeds its own Auto → Light → Dark toggle in-page.
- **`instructions.html`** / **`instructions.css`** — Setup guide with sticky header, cards, and theme toggle; tabbed Quick Setup / Preparation / How to Use. Screenshots under **`graphics/Instructions/`**.
- **`screenshots/MainPage/`** — Landing gallery images (welcome, calendar, stats, pie).
- **`privacy-policy.html`**, **`licenses.html`** — Supporting pages with their own CSS (`privacy-policy.css`, **`licenses.css`**) using the same design tokens.

## Archive (kept in git, not published)

- **`_archive/`** — Previous landing and privacy pages (`index.html`, `index.css`, `privacy-policy.html`), kept for reference only.
- On **GitHub Pages** (Jekyll), folders that start with `_` are **not published**, so these files stay in the repo but are not available online. Do **not** add a root `.nojekyll` file, or the archive would become public.
- Archived HTML includes `noindex, nofollow` as a backup if the folder is ever served by a non-Jekyll host. Asset paths point at the live site root via `../`.

## Design-system colour palette

All page stylesheets (`index.css`, `instructions.css`, `licenses.css`, `privacy-policy.css`) share the same CSS variables. Theme follows **`prefers-color-scheme`**, and can be forced with **`data-theme="light"`** or **`data-theme="dark"`** on `<html>`.

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

- Header **Get updates** button on small screens: label stays on one line (`white-space: nowrap`) and the font/padding scale down with viewport width instead of wrapping and stretching the bar. Nav gaps also tighten once the desktop links hide.


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
