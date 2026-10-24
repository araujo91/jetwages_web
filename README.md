# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Live marketing landing: hero, how it works, features, screenshots, privacy, FAQ, and signup CTAs. Uses real app screenshots from **`screenshots/MainPage/`** and **`graphics/Instructions/`**, plus app terminology (Pie View, Basic / Sector / Commission / Extras / Deductions).
- **`index.css`** — Stylesheet for the live landing page (extracted from the page; not inlined). Shares the site design tokens (light/dark).
- **`constants-init.js` / `constants.js`** — Site URLs, `data-const` link resolution, and the landing-page airline checker. Support levels live in `constants.js` (`airlineGroups`, `airlineCountrySupport`).
- **`theme.js`** — Colour theme helper for pages that use the shared `.theme-toggle` control. The live landing embeds its own Auto → Light → Dark toggle in-page.
- **`instructions.html`** / **`instructions.css`** — Setup guide with sticky header, cards, and theme toggle; tabbed Quick Setup / Preparation / How to Use. Screenshots under **`graphics/Instructions/`**.
- **`screenshots/MainPage/`** — Landing gallery images (welcome, calendar, stats, pie).
- **`privacy-policy.html`**, **`terms.html`**, **`licenses.html`** — Supporting pages with their own CSS (`privacy-policy.css` is shared by privacy and terms; **`licenses.css`**) using the same design tokens.
- **`shares.html`** — Standalone share-scheme takeover calculator. A JetWages banner at the top and bottom links to [jetwages.com](https://www.jetwages.com/), with **Click to join** opening the same signup form as the landing page. Enter a monthly SAYE amount for SAYE24, SAYE25 and SAYE26, pick an expected Effective Date month, and enter a BAYE / Performance share count. SAYE is the Court Sanction exercise (the former Choice A). BAYE / Performance is the share count × £7.15. The full calculation is one table: each SAYE scheme, then a BAYE / Performance column, then a total that includes that payout. Amounts stay in `localStorage` under `saye-calc-v3` (older saves were a list of monthly amounts; a new save also keeps the share count). Figures are before tax and assume every SAYE contribution was paid.
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

- **Share scheme calculator** (`shares.html`): the full calculation is one table. BAYE / Performance is a column next to the SAYE schemes, and the total includes shares × £7.15. Rows that only apply to SAYE (payments and compensation months) are left blank for that column.

- **Share scheme calculator** (`shares.html`): the extra-months question and the Choice B compensation rule are gone. Enter a BAYE / Performance share count instead. The two results are **SAYE** (exercise on Court Sanction, the former Choice A) and **BAYE / Performance** (shares × £7.15). Monthly SAYE amounts already saved under `saye-calc-v3` still load.

- **Sharesave calculator** (`shares.html`): the script uses ordinary names (`monthlySavings`, `paymentsAtSanction`, `compensationMonths`). The SAYE sums are unchanged. Each banner still has **Click to join**.

- **Airline checker:** The landing page asks for an airline, and for a base when that airline differs by country. It says whether support works, partly works, or is not available yet. An unsupported name opens the request form with the airline filled in. The list is in `constants.js`.

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
