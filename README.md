# JetWages web

Static marketing and support pages for JetWages (GitHub Pages–style layout).

## Main files

- **`index.html`** — Landing page: hero, features, links, and a **Privacy, Data & Licenses** section. The privacy and licenses actions sit in a centered **`.policy-btn-row`**: two equal-width buttons side by side on wider viewports, stacked in one column under ~520px (`index.css`).
- **`index.css`** — Shared styles for the landing page, including the policy button row.
- **`constants-init.js` / `constants.js`** — Site URLs and `data-const` link resolution.
- **`instructions.html`**, **`privacy-policy.html`**, **`licenses.html`** — Supporting pages with their own CSS where applicable.

## Latest change

- Policy section: Privacy & Data Policy and Licenses links are grouped in `.policy-btn-row` for equal width, horizontal centering, and responsive stacking on small screens.
