# Privacy & Data Policy – JetWages
_Last updated: 15 November 2026_

JetWages is an independent app run from the United Kingdom. This policy explains what happens to your data. We follow UK and EU privacy laws (UK GDPR / EU GDPR).

**Creating a JetWages account means you accept this policy and the [Terms of Use](terms.html).** Registering with a staff number and password, or signing in afterwards, is your agreement to the current versions of both documents. A copy from the App Store or Google Play signs in before it can download pay rules. Roster and pay figures stay on the phone.

The published page is [privacy-policy.html](privacy-policy.html).

---

## 1. Overview

Your roster, pay history, sales, and settings stay on your phone or tablet. A store install downloads pay rules after you sign in. Data leaves your device only in the cases described below — for example PDF parsing, a pay-rule download, an optional flight-time lookup, a download of public UK tax rate tables, a JetWages account for Swap, Friends, and encrypted cloud backup, store subscriptions, forms you choose to send, an optional layout or pay-rule description when JetWages is still adding your employer, or the optional payslip cleaner on the website.

## 2. Who is responsible

**Email:** [data@jetwages.com](mailto:data@jetwages.com)
**Location:** United Kingdom

## 3. Your pay data stays on your device

- Roster, pay breakdowns, sales, commission, extras, and settings are stored **on your device**.
- There is **no plaintext cloud database of your pay**. A JetWages account is used for Swap, Friends, the pay-rule download, flight-time lookup, and (if you turn it on) encrypted cloud backup. JetWages cannot read that backup.
- If PDF parsing needs our server, we send the **PDF file**. A signed-in phone also sends the sign-in token. Files travel over HTTPS and are **deleted as soon as parsing finishes**.
- When you are helping JetWages add an employer, you can optionally upload a **layout description**: which words sat next to the pay figures you confirmed, and which roster reader you kept, plus how many duties each reader found. That upload does not include the amounts, the payslip, your name, or the duties. It does not use your sign-in token. Reading the PDF on iPhone still uses the short-lived parse upload above.
- You can also send a **description of that employer’s pay rules** to `contribute.jetwages.com`: the airline name, an airline id, the app version, and the shape of the rules, including published amounts such as delay or night-stop figures. That post does not include your salary, your payslip, or your roster, and it does not use your sign-in token.
- The payslip cleaner at [jetwages.com/incognito.html](https://www.jetwages.com/incognito.html) runs in your browser. The name, address, staff number, and other values you type stay on that device. After the page rebuilds the PDF, it can send that **cleaned** file to `incognito.jetwages.com` to look for a leftover National Insurance number, email, or sort code. The check is not kept. The original payslip is not uploaded. Pay figures can remain in the cleaned file.

## 4. What the app stores on your device

The app keeps roster, pay history, country, currency, and airline settings, sales reminders, calendar-sync choices, the last pay-rule file, and (if you sign in) a session token plus Friends encryption keys and nicknames. A tax code, student loan plan, and National Insurance category used for the after-tax estimate stay on the device. If you set a 4-digit app-lock PIN, the phone stores a hash of it in the keystore. A plain backup file leaves the tax details out, and leaves out a name still waiting to be encrypted for a staff-number request. An encrypted backup file or online backup includes them inside the locked copy. Friend nicknames, the Home friend filter, the saved friend list, and the offline pairing queue are in every backup. Uninstalling removes this from the device. It does not automatically delete a JetWages account — email us if you want that removed.

## 5. JetWages account

A store install signs in before it can download pay rules. Swap, Friends, flight-time lookup, and optional cloud backup share **one** JetWages account. Creating that account, or signing in, means you accept this policy and the Terms of Use.

### Account (accounts.jetwages.com)

- Register with airline, staff number, password (stored as a one-way hash), home base (the 3-letter code), and role (FA or CM).
- The email address is used to prove the account, and again if you reset a forgotten sign-in password. It is **not stored**. Unused verification emails and password-reset codes are purged. A reset request can say whether that staff number is registered.
- After a successful check we may keep a **one-way hash** of that mailbox so it cannot verify a second account.
- An employer JetWages does not already support is stored as an “other” id. Friends, Swap, and online backup stay off until that account is approved. The address itself is still deleted after the code is accepted.

### Pay rules (engines.jetwages.com)

After a verified account, the phone downloads that account’s pay rules. The request is the sign-in token. A store install also sends a Play Integrity check (App Attest on iPhone) so the download is limited to a store copy of the app. The roster is not sent. The file can include sector bands, a commission pool, hourly-duty offsets, and approved rules for an employer JetWages is still adding. The last file stays on the phone.

### Swap board (swap.jetwages.com)

Crew profile (home base, FA/CM) and match fields (airline, base, position, date, status). Duty details and messages are encrypted at rest. The Swap service can read them to show the board. Friends and cloud backup are different: JetWages cannot read those. After an accept, the other staff number is shown. Past-day offers are deleted automatically. Swap is not a copy of your pay.

### Friends (friends.jetwages.com)

Redacted days off and flying or ground-duty start–finish times, encrypted on the device before upload. Routes, pay, sales, notes, and extras are not included. The server stores ciphertext and cannot read the clocks. Nicknames are not sent to this service. Pairing is not limited to your airline. Scanning a QR uses the camera; you can type a short code instead. A Friends QR code lasts until you tap Refresh, until someone uses it, or for 14 days. You can also search by staff number and airline. That request stays until the other person declines or you cancel. The name you send so they can recognise you is encrypted on your phone. The server stores only that ciphertext and deletes it when the request ends. It cannot read the name.

### Cloud backup (backup.jetwages.com)

If you turn on cloud backup, the app uploads an **encrypted snapshot** of your on-device data: roster, pay history, settings, friend nicknames, the Home friend filter, the saved friend list, the offline pairing queue, tax details such as your tax code, student loan, and National Insurance category, and a name still waiting to be encrypted for a staff-number request. The sign-in token stays on the phone. Encryption happens on the phone. You can turn on fingerprint or Face ID, or a 4-digit PIN, in Settings so opening the app confirms it is you. The PIN is a hash in the phone keystore. It does not leave the phone and does not unlock the backup. If online backup is also on, a successful fingerprint or Face ID check lets this visit update the backup. We store only ciphertext, key-wrapping metadata, and account linkage (who uploaded, when, size). We cannot read the backup. Forgotten passphrase plus lost recovery words plus no local file means the copy cannot be recovered. We will not email the words. You can delete the cloud copy from Settings.

## 6. PDF processing

- **iOS:** The PDF is sent to the parsing server over HTTPS, together with the sign-in token when you are signed in, then deleted.
- **Android:** A text-layer PDF is read on the device with the PDF.js copy inside the app. An image-only file falls back to the same server.

Parsed figures stay in the app. They are not sent to any other server.

## 6.1 Optional flight times

If you tap **Update actual arrival**, the app sends **airline, date, flight number, origin, and destination** to `flights.jetwages.com`, which queries Flightradar24. The request includes the sign-in token. Pay, sales, and the rest of the roster stay on the phone. The server returns derived departure and arrival times and does not keep Flightradar24 payloads past a short cache. Those times are stored on the device as your pay record, not as a copy of the raw API response. Visible credit: **Actual arrival times: Flightradar24**.

If you use **Auto** on Edit Day, the app sends **airline, date, and the flight numbers**, with the same sign-in token. The server returns the route and times. Origin and destination are not in that request.

## 6.2 Tax rates (tax.jetwages.com)

If you open Pie View or tap **Check for updated rates**, the app downloads published UK tax and National Insurance thresholds with a plain `GET`. The request does not include your tax code, pay, student loan, or staff number. `tax.jetwages.com` stores none of that. The estimate itself is calculated on your phone.

## 7. Device permissions

Calendar (read-only, for sync), location (timezone for sales reminders only), local notifications, camera (Friends QR scan only), fingerprint or Face ID, and an optional 4-digit PIN. The PIN is a hash in the phone keystore. It opens the app and does not unlock a backup. All optional. Fingerprint or Face ID is used only if you turn that on in Settings, to confirm it is you when you open the app.

## 8. Backup and export

JSON backup from Settings can be a **plain file** (readable by anyone who has it) or an **encrypted** envelope, both shared via the system share sheet. Both include friend nicknames, the Home friend filter, the saved friend list, and the offline pairing queue. A plain file leaves out the sign-in token, the Friends private key, the tax details, and a name still waiting to be encrypted for a staff-number request. An encrypted envelope includes the tax details, the Friends key, and that waiting name, and still leaves out the sign-in token. Optional cloud backup (section 5) stores the encrypted envelope on `backup.jetwages.com`. JetWages cannot decrypt encrypted files or cloud copies. Import accepts both formats.

## 9. Subscriptions

Optional subscriptions go through Apple, Google, and RevenueCat. While you are signed in, the phone tells RevenueCat the account id, airline, and staff number. Roster, pay, and salary are not sent to RevenueCat. Card details are not stored by JetWages. See [RevenueCat’s privacy policy](https://www.revenuecat.com/privacy).

## 10. Other services

Cloudflare provides the secure connection in front of these sites. Flightradar24 is used only when you run a flight lookup, via `flights.jetwages.com`. Google Play Integrity and Apple App Attest are used for the store-install check on the pay-rule download. Public tax rate tables come from `tax.jetwages.com` and include no personal details. The optional layout description and the optional pay-rule description, both in section 3, are stored as those descriptions only. The payslip cleaner, also in section 3, loads PDF.js and pdf-lib from a CDN. The payslip is not sent to that CDN. Optional Google Forms / Sheets for feedback are not linked to in-app data. If you message support on WhatsApp, that chat is handled by WhatsApp. No advertising or behaviour tracking.

## 11. How long we keep data

PDFs are not kept after parsing. A cleaned payslip sent for the leftover check on `incognito.jetwages.com` is not kept. The pay-rule download is not a copy of your roster; the last file stays on your phone. Flight-lookup cache on `flights.jetwages.com` is short-lived (minutes). The tax rate service keeps no personal data. The incognito check keeps no personal data. Layout descriptions and pay-rule descriptions are kept until they are no longer needed to add an employer, or until you ask us to delete them. Pay data stays on the device. Account records stay until you ask for deletion. Encrypted cloud-backup blobs stay until you delete them in the app or ask us to remove the account. Swap posts expire with the duty date. A Friends QR code lasts until you tap Refresh, until someone uses it, or for 14 days. A staff-number friend request stays until it is declined, cancelled, or accepted, and the encrypted name is deleted with it. Form answers are kept only as long as needed, or until you ask us to delete them.

## 12. Email

Voluntary contact email (updates, feedback) is used only for JetWages and only with consent where a form asks. The address used to prove an account is not added to a marketing list.

## 13. Setup notes on your device

Local-only setup notes (backup vs manual, file counts, duration) are **not sent automatically**.

## 14. Legal basis

- **Contract:** account, Swap, Friends, the pay-rule download, and optional cloud backup.
- **Consent:** PDF uploads, the optional cleaned-payslip check, optional flight-time lookup, the optional layout upload, the optional pay-rule description, forms, email, Friends pairing, Swap posts, optional permissions.
- **Legitimate interests:** securing servers, the store-install check on the pay-rule download, preventing abuse, support.

## 15. Security

HTTPS in transit. Hashed passwords. Swap duty text is encrypted at rest, and the Swap service can decrypt it to show the board. Friends snapshots and cloud backups are encrypted on the device, and JetWages cannot read them. The app-lock PIN is stored as a hash on the device. Local pay data stays in device storage.

## 16. Data outside the UK / Europe

Google, Apple, Cloudflare, Flightradar24 (if you use a flight lookup), and RevenueCat may process a small amount of data outside the UK or EEA, using approved safeguards where the law requires it. That includes Play Integrity, App Attest, store subscriptions, and the account id, airline, and staff number sent to RevenueCat.

## 17. Your rights

Access, correction, deletion (including the JetWages account), withdraw consent, object or limit where the law allows, data portability, and complaint to a data protection authority (UK: [ICO](https://ico.org.uk/)). Email [data@jetwages.com](mailto:data@jetwages.com). Uninstalling the app is not enough to delete an account.

## 18. Contact

[data@jetwages.com](mailto:data@jetwages.com)
