# Milimetrik website

Open `index.html` in a browser, or serve the folder (`python -m http.server --directory site`).

## Clinic photos

Stills taken from the clinic's opening video on Instagram
(instagram.com/reel/C_0rxnitFUZ), cropped above the burned-in subtitles:
`assets/img/clinic/` — exterior, exterior-wide, lounge, treatment-room,
reception, signature-wall. To use professional photos instead, replace these
files with the same names. A missing file falls back to a green branded placeholder.

The raw downloads (original posts and the video) are kept in `../ig-raw/`,
outside the site folder; they are not needed to run the site.

## Before / after cases

Cases live in `assets/js/data.js` → `CASES`. Each case currently uses an
illustrated sample (marked "Örnek görsel"). To use real photos, put them in
`assets/cases/` and set `images` on the case:

```js
images: {
  before: "assets/cases/zirkonya-1/before.jpg",
  after:  "assets/cases/zirkonya-1/after.jpg",
  angles: [
    { before: "assets/cases/zirkonya-1/left-before.jpg",  after: "assets/cases/zirkonya-1/left-after.jpg" },
    { before: "assets/cases/zirkonya-1/right-before.jpg", after: "assets/cases/zirkonya-1/right-after.jpg" }
  ]
}
```

Each view also takes a `ratio` (width / height) and an optional `label`
(`front`, `side`, `face`, `left`, `right`). Before/after photos of the same
view must share the same size and framing so the slider lines up.

The zirconia case (`assets/cases/zirkonya/`) is the clinic's real case from
instagram.com/p/DeUccusDKiM — the only before/after post visible on their
public profile. Its pairs were aligned so the lips line up under the slider,
and the face view is cropped from the nose down so the patient can't be
recognised.

Two more real cases come from photos supplied directly by the clinic:
`assets/cases/protez-yenileme/` (old crowns and bridges renewed) and
`assets/cases/gulus-tasarimi/` (smile design for yellowed, worn teeth). Each
pair was scaled and shifted so the upper teeth line up under the slider. These
photos came without dates, so no treatment duration is shown; add a `duration`
to the case in `data.js` if the clinic provides one.

The other case texts are templates with drawn sample images —
replace or remove them as real cases arrive. Set `featured: true` to show a
case full-width.

## Doctors, specialties, text

- Doctors: `DOCTORS` in `assets/js/data.js` (Dr. Ramin Eyyub is first).
- Specialties: `SERVICES` in the same file.
- Interface text in all five languages: `assets/js/i18n.js`.
