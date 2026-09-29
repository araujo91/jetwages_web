# Privacy & Data Policy – JetWages
_Last updated: 29 September 2026_

JetWages is an independent app run from the United Kingdom. This policy explains what happens to your data. We follow UK and EU privacy laws (UK GDPR / EU GDPR).

**Creating a JetWages account means you accept this policy and the [Terms of Use](terms.html).** Registering with a staff number and password, or signing in afterwards, is your agreement to the current versions of both documents. You can still use the on-device pay tracker without an account.

The published page is [privacy-policy.html](privacy-policy.html).

---

## 1. Overview

Your roster, pay history, sales, and settings stay on your phone or tablet. Pay tracking does not need an account. Data only leaves your device in the cases described below — for example optional PDF parsing, optional actual-arrival lookup for Jet2 FDSA, a download of public UK tax rate tables, an optional JetWages account for Swap, Friends, and encrypted cloud backup, store subscriptions, or forms you choose to send.

## 2. Who is responsible

**Email:** [data@jetwages.com](mailto:data@jetwages.com)
**Location:** United Kingdom

## 3. Your pay data stays on your device

- Roster, pay breakdowns, sales, commission, extras, and settings are stored **on your device**.
- There is **no plaintext cloud database of your pay**. An optional JetWages account is for Swap, Friends, and (if you turn it on) encrypted cloud backup — JetWages cannot read that backup.
- If PDF parsing needs our server, we only send the **PDF file**. Files travel over HTTPS and are **deleted as soon as parsing finishes**.
- Other airline setup can optionally upload a **layout description**: which words sat next to the pay figures you confirmed, and which existing roster reader you kept (eCrew or the crew schedule report), plus how many duties each reader found. That upload does not include the amounts, the payslip, your name, or the duties. Reading the PDF on iPhone still uses the short-lived parse upload above.

## 4. What the app stores on your device

The app keeps roster, pay history, country/currency/airline settings, sales reminders, calendar-sync choices, and (if you sign in) a session token plus Friends encryption keys and nicknames. A tax code, student loan plan, and National Insurance category used for the after-tax estimate stay on the device. A plain backup file leaves them out. An encrypted backup file or online backup includes them inside the locked copy. Uninstalling removes this from the device. It does not automatically delete a JetWages account — email us if you want that removed.

## 5. Optional JetWages account (Swap, Friends, and cloud backup)

Pay tracking works without signing in. Swap, Friends, and optional cloud backup share **one** JetWages account. Creating that account, or signing in, means you accept this policy and the Terms of Use.

### Account (accounts.jetwages.com)

- Register with airline, staff number, and password (stored as a one-way hash).
- Work email is used to prove you are staff, and again if you reset a forgotten sign-in password. It is **not stored**. Unused verification emails and password-reset codes are purged.
- After a successful check we may keep a **one-way hash** of that mailbox so it cannot verify a second account.

### Swap board (swap.jetwages.com)

Crew profile (home base, FA/CM) and match fields (airline, base, position, date, status). Duty details and messages are encrypted at rest. After an accept, the other staff number is shown. Past-day offers are deleted automatically. Swap is not a copy of your pay.

### Friends (friends.jetwages.com)

Redacted days off and flying/ADTY start–finish times, encrypted on the device before upload. Routes, pay, sales, notes, and extras are not included. The server stores ciphertext and cannot read the clocks. Nicknames stay on the phone. Pairing is not limited to your airline. Scanning a QR uses the camera; you can type a short code instead.

### Cloud backup (backup.jetwages.com)

If you turn on cloud backup, the app uploads an **encrypted snapshot** of your on-device data (roster, pay history, settings, and tax details such as your tax code, student loan, and National Insurance category). The sign-in token stays on the phone. Encryption happens on the phone. If you choose fingerprint or Face ID, opening the app asks for that before this visit can update the backup. We store only ciphertext, key-wrapping metadata, and account linkage (who uploaded, when, size). We cannot read the backup. Forgotten passphrase plus lost recovery words plus no local file means the copy cannot be recovered. We will not email the words. You can delete the cloud copy from Settings.

## 6. PDF processing

- **iOS:** PDF sent to the parsing server over HTTPS; file only, then deleted.
- **Android:** Tries to read the PDF on the device with PDF.js; falls back to the same server for image-only files.

Parsed figures stay in the app. They are not sent to any other server.

## 6.1 Optional actual arrival lookup (Jet2 FDSA)

If you tap **Update actual arrival** on a Jet2 flying day, the app sends only **flight number, date, origin, and destination** to `flights.jetwages.com`, which queries Flightradar24. No roster pay, staff number, or sales leave the device. The server returns a derived landing time and does not keep Flightradar24 payloads past a short cache. Checkout used for FDSA (ATA + 45 minutes) is stored on the device as your pay record, not as a copy of the raw API response. Visible credit: **Actual arrival times: Flightradar24**.

## 6.2 Tax rates (tax.jetwages.com)

If you open Pie View or tap **Check for updated rates**, the app downloads published UK tax and National Insurance thresholds with a plain `GET`. The request does not include your tax code, pay, student loan, or staff number. `tax.jetwages.com` stores none of that. The estimate itself is calculated on your phone.

## 7. Device permissions

Calendar (read-only, for sync), location (timezone for sales reminders only), local notifications, camera (Friends QR scan only), and fingerprint or Face ID (only if you turn that on in Settings, to confirm it is you when you open the app). All optional.

## 8. Backup and export

JSON backup from Settings can be a **plain file** (readable by anyone who has it) or an **encrypted** envelope, both shared via the system share sheet. A plain file leaves out the sign-in token, the Friends private key, and the tax code and student loan plan. An encrypted envelope includes the tax details and the Friends key, and still leaves out the sign-in token. Optional cloud backup (section 5) stores the encrypted envelope on `backup.jetwages.com`. JetWages cannot decrypt encrypted files or cloud copies. Import accepts both formats.

## 9. Subscriptions

Optional subscriptions go through Apple, Google, and RevenueCat. Roster, pay, and salary are not sent to RevenueCat. Card details are not stored by JetWages. See [RevenueCat’s privacy policy](https://www.revenuecat.com/privacy).

## 10. Other services

Cloudflare (TLS / Access; PDF.js CDN on Android). Flightradar24 (only if you tap Update actual arrival; via `flights.jetwages.com`). Public tax rate tables from `tax.jetwages.com` (no personal details). An optional Other-airline layout upload, described in section 3, stores that description only. Optional Google Forms / Sheets for feedback — not linked to in-app data. No advertising or behaviour tracking.

## 11. How long we keep data

PDFs are not kept after parsing. Actual-arrival cache on `flights.jetwages.com` is short-lived (minutes). The tax rate service keeps no personal data. Layout descriptions are kept until they are no longer needed to add an airline, or until you ask us to delete them. Pay data stays on the device. Account records stay until you ask for deletion. Encrypted cloud-backup blobs stay until you delete them in the app or ask us to remove the account. Swap posts expire with the duty date. Friends invites expire. Form answers are kept only as long as needed, or until you ask us to delete them.

## 12. Email

Voluntary contact email (updates, feedback) is used only for JetWages and only with consent where a form asks. Airline work email for account verification is not added to a marketing list.

## 13. Setup notes on your device

Local-only setup notes (backup vs manual, file counts, duration) are **not sent automatically**.

## 14. Legal basis

- **Contract:** account, Swap, Friends, and optional cloud backup.
- **Consent:** PDF uploads, optional actual-arrival lookup, the optional layout upload, forms, email, Friends pairing, Swap posts, optional permissions.
- **Legitimate interests:** securing servers, preventing abuse, support.

## 15. Security

HTTPS in transit. Hashed passwords. Swap encrypted at rest. Friends snapshots and cloud backups encrypted on device. Device storage for local pay data.

## 16. Data outside the UK / Europe

Google, Cloudflare, Flightradar24 (if you use actual arrivals), RevenueCat, Apple, and Google Play may process a small amount of data outside the UK or EEA, using approved safeguards where the law requires it.

## 17. Your rights

Access, correction, deletion (including the JetWages account), withdraw consent, object or limit where the law allows, data portability, and complaint to a data protection authority (UK: [ICO](https://ico.org.uk/)). Email [data@jetwages.com](mailto:data@jetwages.com). Uninstalling the app is not enough to delete an account.

## 18. Contact

[data@jetwages.com](mailto:data@jetwages.com)
