/* Renders the page from assets/js/data.js. No dependencies. */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* theme: follows the OS unless the visitor picks one */
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  $("#theme-toggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });

  /* header */
  $("#desc").innerHTML   = PROFILE.desc;
  $("#email").textContent = PROFILE.email;
  /* every link in this row leaves the page (external site or the PDF), so all open in a new tab */
  $("#socials").innerHTML = PROFILE.links.map((l) =>
    `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`
  ).join("");

  /* profile photo: the image when it loads, a labelled placeholder when it does not */
  if (PROFILE.photo) {
    const img = $("#profile-img");
    $("#profile").hidden = false;
    img.addEventListener("error", () => { img.remove(); $("#profile-placeholder").hidden = false; });
    img.src = PROFILE.photo;
  }

  /* research interest */
  $("#interest-list").innerHTML = INTERESTS
    .map((i) => `<li><strong>${esc(i.label)}:</strong> ${esc(i.detail)}</li>`).join("");

  /* publications */
  function authors(list) {
    return list.map((a) => {
      const eq = a.endsWith("*");
      const name = eq ? a.slice(0, -1) : a;
      const html = esc(name) + (eq ? "*" : "");
      return name === ME ? `<span class="me">${html}</span>` : html;
    }).join(", ");
  }

  /* small monochrome glyphs for the link buttons, keyed by the link label (case-insensitive) */
  const SVG = (d) => `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICONS = {
    arxiv: SVG('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h8"/>'),
    paper: SVG('<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'),
    code:  SVG('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
    pdf:   SVG('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>'),
    slides:SVG('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    video: SVG('<rect x="3" y="5" width="15" height="14" rx="2"/><path d="m18 10 4-2v8l-4-2z"/>'),
    poster:SVG('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'),
    project:SVG('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  };
  const iconFor = (label) => ICONS[label.toLowerCase()]
    || SVG('<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>');

  function pubItem(p) {
    const links = Object.entries(p.links || {})
      .filter(([, url]) => url)
      .map(([k, url]) => `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${iconFor(k)}${esc(k)}</a>`)
      .join("");
    return `<li>
      <div class="row">
        <div class="col-thumb">
          <div class="thumb">
            ${p.thumb ? `<img src="${esc(p.thumb)}" alt="" loading="lazy" onerror="this.remove()" />` : ""}
            <span class="thumb-fallback">${esc(p.short || p.id)}</span>
          </div>
        </div>
        <div class="col-body">
          <div class="title"><span class="pub-id">[${esc(p.id)}]</span>${esc(p.title)}</div>
          <div class="author">${authors(p.authors)}</div>
          <div class="periodical"><em>${esc(p.venue)}</em></div>
          ${links ? `<div class="links">${links}</div>` : ""}
        </div>
      </div>
    </li>`;
  }

  $("#selected-list").innerHTML = SELECTED.map(pubItem).join("");
  $("#other-list").innerHTML    = OTHER.map(pubItem).join("");

  $("#year").textContent = new Date().getFullYear();
})();
