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

  function pubItem(p) {
    const links = Object.entries(p.links || {})
      .filter(([, url]) => url)
      .map(([k, url]) => `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${esc(k)}</a>`)
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
