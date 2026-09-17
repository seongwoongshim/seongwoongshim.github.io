# Seongwoong Shim — personal site

Static personal homepage (no framework, no build step for the site itself) plus a
**LaTeX CV that GitHub Actions compiles on every push**.

```
index.html                      the whole page
assets/css/style.css            theme + layout
assets/js/data.js               ← all content lives here (profile, links, publications)
assets/img/profile.jpg          ← your photo goes here
assets/js/main.js               rendering logic
cv/cv.tex                       CV source
cv/cv.pdf                       produced by CI (safe to delete locally)
cv/build-info.json              produced by CI — drives the "compiled …" line on the site
.github/workflows/deploy.yml    compile cv.tex → publish site to Pages
```

## 1. First-time setup

1. Create a repository named **`tlatjddnd101.github.io`** and push these files to `main`.
2. **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**
   (Not "Deploy from a branch" — this repo deploys through the workflow.)
3. Drop a square photo at `assets/img/profile.jpg` (see `assets/img/README.md`).
   Until then the page shows a grey placeholder with that path written on it, so it is
   obvious what is missing. A different filename, or no photo at all, is a one-line
   change to `PROFILE.photo` in `assets/js/data.js`.

Everything else is already filled in: the site, the CV and the workflow all point at
`tlatjddnd101` / `tlatjddnd101.github.io`.

## 2. How the CV pipeline works

Push anything → the workflow spins up a full TeX Live container →
`latexmk -pdf cv/cv.tex` → the resulting `cv.pdf` is bundled with the site and
deployed. Nothing PDF-shaped is ever committed to the repo.

The "CV (PDF)" link in the header and the `cv` link in the top bar both point at
`cv/cv.pdf`, so they always serve whatever the last push compiled — there is nothing
to update by hand.

The workflow also writes `cv/build-info.json` (build time + commit). Nothing on the
page reads it right now; it is there if you ever want to show a "last compiled" line.

Triggers: every push to `main`, a manual **Run workflow** button, and a monthly
cron so the timestamp never goes stale.

### Editing the CV
Edit `cv/cv.tex`, commit, push. That is the whole workflow.
`cv.tex` is deliberately `pdflatex`-clean and uses only core TeX Live packages,
so it compiles in a few seconds and has no font dependencies to break.

### Compiling locally (optional)
```bash
cd cv && latexmk -pdf cv.tex        # or: docker run --rm -v "$PWD":/w -w /w texlive/texlive latexmk -pdf cv.tex
```

## 3. Adding a publication

Open `assets/js/data.js`. `SELECTED` is the short list at the top of the page,
`OTHER` is everything else — same shape:

```js
{
  id: "C7",
  title: "…",
  authors: ["Seongwoong Shim*", "…", "Byung-Jun Lee"],   // trailing * = equal contribution
  venue: "International Conference on Machine Learning (ICML 2026)",
  links: { arXiv: "https://arxiv.org/abs/…", Code: "https://github.com/…" },
},
```

Your own name (the `ME` constant) is bolded automatically. Then mirror the entry
in `cv/cv.tex` with `\cvpub{C7}{title}{authors}{full venue}{short venue}`.

## 4. Sections

The page is intentionally short: intro, Research Interest, Publications, CV.
Education and academic service live in the CV only — to bring either back to the
page, add a `<section>` to `index.html` and render it from `data.js` the way
`SELECTED` is rendered in `main.js`.

## 5. Local preview

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```
Open it over `http://`, not `file://` — the CV build-status fetch needs a real origin.
