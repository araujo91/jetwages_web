# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Live marketing landing: hero, how it works, features, screenshots, privacy, FAQ, and signup CTAs. Uses real app screenshots from **`screenshots/MainPage/`** and **`graphics/Instructions/`**, plus app terminology (Pie View, Basic / Sector / Commission / Extras / Deductions).
- **`index.css`** — Stylesheet for the live landing page (extracted from the page; not inlined). Shares the site design tokens (light/dark).
- **`constants-init.js` / `constants.js`** — Site URLs and `data-const` link resolution (used by supporting pages and archived copies).
- **`theme.js`** — Colour theme helper for pages that use the shared `.theme-toggle` control. The live landing embeds its own Auto → Light → Dark toggle in-page.
- **`instructions.html`** / **`instructions.css`** — Setup guide with sticky header, cards, and theme toggle; tabbed Quick Setup / Preparation / How to Use. Screenshots under **`graphics/Instructions/`**.
- **`screenshots/MainPage/`** — Landing gallery images (welcome, calendar, stats, pie).
- **`privacy-policy.html`**, **`terms.html`**, **`licenses.html`** — Supporting pages with their own CSS (`privacy-policy.css` is shared by privacy and terms; **`licenses.css`**) using the same design tokens.
- **`privacy-policy.md`** — Markdown source of the privacy & data policy (keep in step with the HTML).

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

- **Privacy:** Encrypted and online backups include the tax code, student loan, and National Insurance category. A plain backup file still leaves them out. The sign-in token stays on the phone. Fingerprint or Face ID is optional in the app settings, for anyone, because pay stays on the phone. Last updated 29 September 2026.

- **Privacy:** Tax code, student loan, and National Insurance category stay on the phone. Pie View can download public UK rate tables from `tax.jetwages.com`; that request sends no personal details and the service stores none.

- **Terms of Use** (`terms.html`) and **Privacy & Data Policy** updated for the live app: optional JetWages account (staff number), Swap board, Friends (E2E clocks), PDF parsing, calendar/camera permissions, and store subscriptions. Creating or signing into an account means the user accepts the current terms and data policy; pay tracking still works without an account. Landing privacy cards, FAQ, and “on your device” copy no longer say there is no login.


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
