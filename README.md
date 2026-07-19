# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Landing page: hero, features, links, and a **Privacy, Data & Licenses** section. The privacy and licenses actions sit in a centered **`.policy-btn-row`**: two equal-width buttons side by side on wider viewports, stacked in one column under ~520px (`index.css`).
- **`index.css`** — Shared styles for the landing page, including the policy button row and **`.btn-grad`** (teal→navy gradient CTA using `--grad-a` / `--grad-b`).
- **`constants-init.js` / `constants.js`** — Site URLs and `data-const` link resolution.
- **`theme.js`** — Colour theme: follows OS `prefers-color-scheme`, optional `data-theme` override via the **`.theme-toggle`** control (cycles Auto → Light → Dark), persisted in `localStorage` (`jw-theme`).
- **`instructions.html`** / **`instructions.css`** — Setup guide with the same sticky header, container, cards, buttons, and theme toggle as the landing page; tabbed Quick Setup / Full Set-up / How to Use content.
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

- **`instructions.html` / `instructions.css`**: restyled to match the landing page — sticky header with brand + nav + theme toggle, shared system-ui typography / container / card / button tokens, centred page hero, gradient active tabs, footer with year, and a home CTA instead of the floating back button. Content tabs (Quick Setup / Full Set-up / How to Use) and lightbox behaviour are unchanged.


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