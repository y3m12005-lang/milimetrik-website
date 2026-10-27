(function () {
  "use strict";

  const LANGS = ["tr", "en", "ru", "ar", "de"];
  const ROUTES = ["home", "dentists", "services", "cases", "location"];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  let lang = "tr";
  try {
    const saved = localStorage.getItem("mm-lang");
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) lang = fromUrl;
    else if (LANGS.includes(saved)) lang = saved;
  } catch (e) { /* storage unavailable */ }

  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.tr[key] || key;
  const L = (obj) => (obj ? obj[lang] || obj.tr : "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const doctorById = (id) => DOCTORS.find((d) => d.id === id);

  /* ---------------- icons ---------------- */
  const ICONS = {
    braces: '<path d="M4 9c2.5-2 5-2.5 8-2.5S17.5 7 20 9M4 15c2.5 2 5 2.5 8 2.5s5.5-.5 8-2.5"/><rect x="5.5" y="10" width="3" height="4" rx=".6"/><rect x="10.5" y="10" width="3" height="4" rx=".6"/><rect x="15.5" y="10" width="3" height="4" rx=".6"/><path d="M4 12h16"/>',
    crown: '<path d="M5 9 7 5l3 3 2-4 2 4 3-3 2 4"/><path d="M6.5 9.5h11c.4 4.5-.6 9.5-2.6 9.5-1.4 0-1.4-4-2.9-4s-1.5 4-2.9 4c-2 0-3-5-2.6-9.5z"/>',
    root: '<path d="M7.2 3.5c1.6 0 2.8 1 4.8 1s3.2-1 4.8-1c2 0 3.2 2 3 4.4-.3 3-1.8 4.5-2.4 7.8-.4 2.6-.8 4.8-2 4.8-1.6 0-1.4-5-3.4-5s-1.8 5-3.4 5c-1.2 0-1.6-2.2-2-4.8-.6-3.3-2.1-4.8-2.4-7.8-.2-2.4 1-4.4 3-4.4z"/><path d="M10.5 9.5c.3 2.5.2 5 .4 7.5M13.5 9.5c-.3 2.5-.2 5-.4 7.5" stroke-dasharray="1.6 1.4"/>',
    sparkle: '<path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9z"/><path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    implant: '<path d="M8 3.5h8c.8 0 1.4.7 1.2 1.5L16.4 8H7.6L6.8 5c-.2-.8.4-1.5 1.2-1.5z"/><path d="M9 8h6l-.4 2H9.4zM9.6 11.5h4.8M9.9 13.5h4.2M10.2 15.5h3.6M10.6 17.5h2.8M11 19.5h2"/><path d="M9.4 10 11 20.5h2L14.6 10"/>',
    jaw: '<path d="M4 6c0 7 3 12 8 12s8-5 8-12"/><path d="M4 6c2 1 3 3 3 5M20 6c-2 1-3 3-3 5"/><path d="M8.5 13.5h7"/><path d="M9.5 13.5v1.5M12 13.5v1.8M14.5 13.5v1.5"/>',
    gum: '<path d="M3.5 8.5c2.5-2 5.5-3 8.5-3s6 1 8.5 3c-1 1.6-2.6 2.3-4.2 2-1.4 1.6-2.7 1.6-4.3 0-1.6 1.6-2.9 1.6-4.3 0-1.6.3-3.2-.4-4.2-2z"/><path d="M7.8 10.5c0 4 .7 8 2.1 8s.8-5 2.1-5 .7 5 2.1 5 2.1-4 2.1-8"/>',
    moon: '<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/><path d="M15.5 4.5v2M14.5 5.5h2M19 8.5v1.6M18.2 9.3h1.6"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;

  /* ---------------- placeholder for missing photos ---------------- */
  function phMarkup(label) {
    return `<div class="ph"><div><img src="assets/img/logo-white.png" alt="">${label ? esc(label) : ""}</div></div>`;
  }
  function wirePlaceholders(root = document) {
    $$("img.ph-able", root).forEach((img) => {
      const swap = () => {
        if (img.dataset.swapped) return;
        img.dataset.swapped = "1";
        const wrap = document.createElement("div");
        wrap.innerHTML = phMarkup("");
        img.replaceWith(wrap.firstChild);
      };
      if (img.complete && img.naturalWidth === 0) swap();
      else img.addEventListener("error", swap, { once: true });
    });
  }

  /* ---------------- illustrated smile (sample case visuals) ---------------- */
  const TOOTH_W = [44, 48, 54, 62, 78, 78, 62, 54, 48, 44];
  function toothPath(x, y, w, h, chip) {
    const r = w * 0.34;
    if (chip) {
      const c = w * 0.32;
      return `M${x},${y} L${x + w},${y} L${x + w},${y + h - c * 1.1} L${x + w - c},${y + h - c * 0.15} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} Z`;
    }
    return `M${x},${y} L${x + w},${y} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} Z`;
  }
  function smileSVG(style, phase, angle, uid) {
    const before = phase === "before";
    const total = TOOTH_W.reduce((a, b) => a + b, 0);
    const cx = 400;
    let gap = 3;
    if (before && style === "gaps") gap = 15;
    let x = cx - (total + gap * 9) / 2;
    const teeth = [];
    TOOTH_W.forEach((w, i) => {
      const off = x + w / 2 - cx;
      let y = 178 + off * off * 0.00042;
      let h = (i === 4 || i === 5 ? 118 : i === 3 || i === 6 ? 102 : i === 2 || i === 7 ? 108 : 92) - Math.abs(off) * 0.02;
      let rot = 0, dx = 0, fill = "#f7f4ec", chip = false, hidden = false;
      if (before) {
        if (style === "crowded") {
          const r = [0, 6, -10, 14, -7, 9, -15, 8, -4, 0][i]; rot = r;
          dx = [0, 4, 10, -6, 12, -12, 8, -8, -4, 0][i]; y += [0, 4, -6, 10, -2, 6, 12, -4, 3, 0][i];
          fill = "#efe8d6";
        } else if (style === "gaps") { fill = "#f1ecdf"; h -= 4; }
        else if (style === "worn") { h -= [8, 14, 22, 26, 30, 28, 24, 20, 12, 8][i]; fill = ["#e2d6b6", "#ddd0ad", "#d8caa4", "#e4d8b9"][i % 4]; }
        else if (style === "missing") { if (i === 5) hidden = true; fill = "#efe9da"; }
        else if (style === "dark") { if (i === 3) fill = "#b9a487"; else fill = "#efe8d8"; }
        else if (style === "dark2") { if (i === 4) fill = "#a99b8a"; else fill = "#eee7d6"; }
        else if (style === "yellow") { fill = "#e6d39e"; h += [0, -6, 4, -10, 6, -8, 3, -4, 2, 0][i]; }
        else if (style === "chipped") { fill = "#efe9dc"; if (i === 4 || i === 5) { chip = true; } }
      }
      teeth.push({ x: x + dx, y, w, h, rot, fill, chip: chip && i === 4, chipR: chip && i === 5, hidden });
      x += w + gap;
    });

    const tf = angle === 1
      ? 'transform="translate(60 0) scale(.9 1) skewY(-3)"'
      : angle === 2 ? 'transform="translate(-20 30) scale(.9 1) skewY(3)"' : "";

    const teethSvg = teeth.map((tt) => {
      if (tt.hidden) return "";
      let p = toothPath(tt.x, tt.y - 30, tt.w, tt.h + 30, tt.chip);
      if (tt.chipR) {
        // mirror chip on the right-hand central
        p = toothPath(0, tt.y - 30, tt.w, tt.h + 30, true);
        return `<g transform="translate(${tt.x + tt.w} 0) scale(-1 1)"><path d="${p}" fill="${tt.fill}" stroke="#d9cfba" stroke-width="1.2"/><path d="${p}" fill="url(#sh${uid})"/></g>`;
      }
      const rotA = tt.rot ? ` transform="rotate(${tt.rot} ${tt.x + tt.w / 2} ${tt.y + tt.h / 2})"` : "";
      return `<g${rotA}><path d="${p}" fill="${tt.fill}" stroke="#d9cfba" stroke-width="1.2"/><path d="${p}" fill="url(#sh${uid})"/></g>`;
    }).join("");

    const lower = TOOTH_W.map((w, i) => {
      const lw = w * 0.82;
      const lx = 400 - (TOOTH_W.reduce((a, b) => a + b * 0.82, 0) + 27) / 2 + TOOTH_W.slice(0, i).reduce((a, b) => a + b * 0.82 + 3, 0);
      const off = lx + lw / 2 - 400;
      const ly = 318 - off * off * 0.0004;
      return `<path d="M${lx},${ly + 120} L${lx},${ly + lw * 0.3} Q${lx},${ly} ${lx + lw * 0.3},${ly} L${lx + lw * 0.7},${ly} Q${lx + lw},${ly} ${lx + lw},${ly + lw * 0.3} L${lx + lw},${ly + 120} Z" fill="${before && style !== "missing" && style !== "dark" && style !== "dark2" && style !== "chipped" ? "#e7dcc0" : "#efeadd"}" stroke="#d9cfba" stroke-width="1"/>`;
    }).join("");

    return `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bg${uid}" cx="50%" cy="50%" r="75%"><stop offset="0" stop-color="#c98f86"/><stop offset="1" stop-color="#8e5550"/></radialGradient>
        <linearGradient id="sh${uid}" x1="0" x2="0" y1="0" y2="1"><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#b8a98a" stop-opacity=".28"/></linearGradient>
        <linearGradient id="gum${uid}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c46a72"/><stop offset="1" stop-color="#e09098"/></linearGradient>
        <clipPath id="m${uid}"><path d="M120 190 Q400 70 680 190 Q640 440 400 452 Q160 440 120 190 Z"/></clipPath>
      </defs>
      <rect width="800" height="500" fill="url(#bg${uid})"/>
      <g ${tf}>
        <path d="M100 186 Q400 40 700 186 Q400 120 100 186 Z" fill="#a8565c" opacity=".9"/>
        <g clip-path="url(#m${uid})">
          <rect width="800" height="500" fill="#3b1d22"/>
          <path d="M80 60 H720 V180 Q400 150 80 180 Z" fill="url(#gum${uid})"/>
          ${teethSvg}
          ${lower}
        </g>
        <path d="M120 190 Q400 70 680 190 Q640 440 400 452 Q160 440 120 190 Z" fill="none" stroke="#7b3e44" stroke-width="10" opacity=".55"/>
      </g>
    </svg>`;
  }

  let uidSeq = 0;
  // angle 0 is the main view; real photos may add more views in images.angles
  function shot(c, angle) {
    if (!c.images) return null;
    return angle === 0 ? c.images : (c.images.angles || [])[angle - 1] || null;
  }
  function visual(c, phase, angle) {
    const s = shot(c, angle);
    if (s && s[phase]) return `<img src="${esc(s[phase])}" alt="" decoding="async" draggable="false">`;
    return smileSVG(c.style, phase, angle, "s" + uidSeq++);
  }
  function angleCount(c) {
    if (c.images) return 1 + ((c.images.angles && c.images.angles.length) || 0);
    return 3;
  }
  function angleName(c, angle) {
    const s = shot(c, angle);
    const key = (s && s.label) || ["front", "left", "right"][angle];
    return t("cases." + key);
  }

  /* ---------------- before / after slider ---------------- */
  // inModal: size the slider to the photo's own proportions, capped to the viewport height
  function baMarkup(c, angle, openable, idx, inModal) {
    const s = shot(c, angle);
    let style = "";
    if (s && s.ratio) {
      style = inModal
        ? `aspect-ratio:${s.ratio};width:min(100%, calc(66vh * ${s.ratio}))`
        : c.featured ? `aspect-ratio:${s.ratio}` : "";
    }
    return `<div class="ba${s ? " photo" : ""}" style="${style}" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="${esc(t("cases.before"))} / ${esc(t("cases.after"))}" ${openable ? `data-open="${idx}"` : ""}>
      <div class="ba-layer ba-before">${visual(c, "before", angle)}</div>
      <div class="ba-layer ba-after">${visual(c, "after", angle)}</div>
      <div class="ba-line"></div>
      <div class="ba-handle"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M9 6 3 12l6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <span class="ba-label l">${esc(t("cases.before"))}</span>
      <span class="ba-label r">${esc(t("cases.after"))}</span>
      <span class="ba-hint">${esc(t("cases.hint"))}</span>
    </div>`;
  }

  function initSlider(el) {
    let dragging = false, startX = 0, moved = 0;
    const set = (pct) => {
      pct = Math.max(0, Math.min(100, pct));
      el.style.setProperty("--pos", pct + "%");
      el.setAttribute("aria-valuenow", Math.round(pct));
    };
    const fromEvent = (e) => {
      const r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    };
    el.addEventListener("pointerdown", (e) => {
      dragging = true; startX = e.clientX; moved = 0;
      el.setPointerCapture(e.pointerId);
      el.classList.add("touched");
    });
    el.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      moved = Math.max(moved, Math.abs(e.clientX - startX));
      if (moved > 3) fromEvent(e);
    });
    const end = (e) => {
      if (!dragging) return;
      dragging = false;
      if (moved <= 4) {
        // a tap: open the case if this slider is in a card, otherwise jump the divider
        if (el.dataset.open != null) openCase(+el.dataset.open);
        else fromEvent(e);
      }
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", () => { dragging = false; });
    el.addEventListener("keydown", (e) => {
      const cur = parseFloat(el.style.getPropertyValue("--pos")) || 50;
      const dir = document.dir === "rtl" ? -1 : 1;
      if (e.key === "ArrowLeft") { set(cur - 5 * dir); e.preventDefault(); }
      if (e.key === "ArrowRight") { set(cur + 5 * dir); e.preventDefault(); }
      if (e.key === "Enter" && el.dataset.open != null) openCase(+el.dataset.open);
    });
  }

  /* ---------------- modal ---------------- */
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  let lastFocus = null;
  function openModal(html, onReady) {
    lastFocus = document.activeElement;
    modalBody.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
    $("#modalPanel").scrollTop = 0;
    if (onReady) onReady(modalBody);
    setTimeout(() => $(".modal-close", modal).focus(), 60);
  }
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("locked");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------------- doctors ---------------- */
  function renderDoctors() {
    $("#doctorGrid").innerHTML = DOCTORS.map((d, i) => `
      <button class="doctor-card reveal ${d.lead ? "lead-doc" : ""}" data-doc="${d.id}" style="transition-delay:${i * 90}ms">
        <div class="doc-photo"><img class="ph-able" src="${d.photo}" alt="${esc(d.name)}" loading="lazy"></div>
        <div class="doc-meta">
          <p class="doc-role">${esc(L(d.role))}</p>
          <h3 class="doc-name">${esc(d.name)}</h3>
          <p class="doc-spec">${esc(L(d.spec))}</p>
          <span class="doc-more">${esc(t("dentists.more"))} <i></i></span>
        </div>
      </button>`).join("");
    $$("#doctorGrid [data-doc]").forEach((b) => b.addEventListener("click", () => openDoctor(b.dataset.doc)));
  }

  function openDoctor(id) {
    const d = doctorById(id);
    if (!d) return;
    const ig = d.instagram ? `<a class="btn btn-outline" href="${d.instagram}" target="_blank" rel="noopener">Instagram</a>` : "";
    openModal(`
      <div class="doc-modal">
        <div class="doc-modal-photo">
          <div class="doc-photo"><img class="ph-able" src="${d.photo}" alt="${esc(d.name)}"></div>
          <div class="signature"><img src="assets/img/logo-white.png" alt=""></div>
        </div>
        <div class="doc-modal-info">
          <p class="doc-role">${esc(L(d.role))}</p>
          <h3 class="doc-name">${esc(d.name)}</h3>
          <div class="ruler dark" aria-hidden="true"></div>
          <h4>${esc(t("dentists.spec"))}</h4>
          <p class="bio"><strong>${esc(L(d.spec))}</strong></p>
          <h4>${esc(t("dentists.about"))}</h4>
          <p class="bio">${esc(L(d.bio))}</p>
          <h4>${esc(t("dentists.treat"))}</h4>
          <ul class="tags">${L(d.treatments).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="doc-actions">
            <a class="btn btn-green" href="https://wa.me/905521967070" target="_blank" rel="noopener">${esc(t("dentists.book"))}</a>
            <a class="btn btn-outline" href="tel:+903126527070" dir="ltr">0312 652 70 70</a>
            ${ig}
          </div>
        </div>
      </div>`, (root) => wirePlaceholders(root));
  }

  /* ---------------- services ---------------- */
  function renderServices() {
    $("#serviceGrid").innerHTML = SERVICES.map((s, i) => {
      const d = s.doctor && doctorById(s.doctor);
      const doc = d
        ? `<button data-doc="${d.id}"><img src="${d.photo}" alt=""><span><small>${esc(t("services.doc"))}</small><strong>${esc(d.name)}</strong></span></button>`
        : `<span class="svc-ico" style="width:34px;height:34px">${icon("sparkle")}</span><span><small>${esc(t("services.team"))}</small><strong>Milimetrik</strong></span>`;
      return `
      <article class="service-card reveal" style="transition-delay:${(i % 3) * 80}ms">
        <span class="svc-ico">${icon(s.icon)}</span>
        <h3>${esc(L(s.name))}</h3>
        <span class="svc-latin">${esc(s.latin)}</span>
        <p>${esc(L(s.text))}</p>
        <ul>${L(s.items).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="svc-doc">${doc}</div>
      </article>`;
    }).join("");
    $$("#serviceGrid [data-doc]").forEach((b) => b.addEventListener("click", () => openDoctor(b.dataset.doc)));
  }

  /* ---------------- cases ---------------- */
  function renderCases() {
    $("#caseTabs").innerHTML = CASE_GROUPS.map((g, i) =>
      `<a href="#cases" data-jump="${g.id}" class="${i === 0 ? "on" : ""}">${esc(L(g.name))}</a>`).join("");

    $("#caseGroups").innerHTML = CASE_GROUPS.map((g) => {
      const cards = CASES.map((c, idx) => ({ c, idx })).filter((x) => x.c.group === g.id).map(({ c, idx }) => {
        const d = doctorById(c.doctor);
        return `
        <article class="case-card reveal${c.featured ? " featured" : ""}">
          ${baMarkup(c, 0, true, idx)}
          <div class="case-info">
            <div>
              ${c.images ? `<span class="case-real">${esc(t("cases.real"))}</span><br>` : `<span class="case-badge">${esc(t("cases.sample"))}</span>`}
              <h3>${esc(L(c.title))}</h3>
              <small>${esc(L(c.treatment))}${d ? " · " + esc(d.name) : ""}</small>
            </div>
            <button class="case-open" data-open-btn="${idx}" aria-label="${esc(t("cases.view"))}" title="${esc(t("cases.view"))}">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </article>`;
      }).join("");
      return `
      <section class="case-group" id="grp-${g.id}">
        <header class="case-group-head">
          <h2>${esc(L(g.name))}</h2>
          <p>${esc(L(g.text))}</p>
        </header>
        <div class="case-grid">${cards}</div>
      </section>`;
    }).join("");

    $$("#caseGroups .ba").forEach(initSlider);
    $$("#caseGroups [data-open-btn]").forEach((b) => b.addEventListener("click", () => openCase(+b.dataset.openBtn)));
    $$("#caseTabs [data-jump]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      $("#grp-" + a.dataset.jump).scrollIntoView({ behavior: "smooth" });
    }));
  }

  function openCase(idx) {
    const c = CASES[idx];
    if (!c) return;
    const d = doctorById(c.doctor);
    const n = angleCount(c);
    const thumbs = Array.from({ length: n }, (_, a) =>
      `<button data-angle="${a}" class="${a === 0 ? "on" : ""}">${visual(c, "after", a)}<span>${esc(angleName(c, a))}</span></button>`).join("");

    openModal(`
      <div class="case-modal">
        <div class="case-modal-head">
          <p class="eyebrow dark">${esc(L(CASE_GROUPS.find((g) => g.id === c.group).name))}</p>
          <h3>${esc(L(c.title))}</h3>
        </div>
        <div id="caseStage">${baMarkup(c, 0, false, null, true)}</div>
        ${n > 1 ? `<div class="thumbs" aria-label="${esc(t("cases.angles"))}">${thumbs}</div>` : ""}
        <div class="case-story">
          <div>
            <h4>${esc(t("cases.story"))}</h4>
            <p>${esc(L(c.story))}</p>
          </div>
          <div class="case-facts">
            <div><small>${esc(t("cases.treatment"))}</small><span>${esc(L(c.treatment))}</span></div>
            ${c.duration ? `<div><small>${esc(t("cases.duration"))}</small><span>${esc(L(c.duration))}</span></div>` : ""}
            ${d ? `<div><small>${esc(t("cases.doctor"))}</small><span>${esc(d.name)}</span></div>` : ""}
          </div>
        </div>
        <p class="legal" style="text-align:start;margin-inline:0">${esc(t("legal.text"))}</p>
      </div>`, (root) => {
      initSlider($(".ba", root));
      $$("[data-angle]", root).forEach((b) => b.addEventListener("click", () => {
        $$("[data-angle]", root).forEach((x) => x.classList.toggle("on", x === b));
        $("#caseStage", root).innerHTML = baMarkup(c, +b.dataset.angle, false, null, true);
        initSlider($("#caseStage .ba", root));
      }));
    });
  }

  /* keep the active category tab in sync while scrolling */
  let tabObserver;
  function watchCaseTabs() {
    if (tabObserver) tabObserver.disconnect();
    tabObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id.replace("grp-", "");
        $$("#caseTabs a").forEach((a) => a.classList.toggle("on", a.dataset.jump === id));
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    $$(".case-group").forEach((g) => tabObserver.observe(g));
  }

  /* ---------------- quotes ---------------- */
  let qIdx = 0, qTimer;
  function renderQuotes() {
    const list = QUOTES[lang] || QUOTES.tr;
    $("#quoteDots").innerHTML = list.map((_, i) => `<button aria-label="${i + 1}"></button>`).join("");
    $$("#quoteDots button").forEach((b, i) => b.addEventListener("click", () => { showQuote(i); restartQuotes(); }));
    showQuote(qIdx % list.length, true);
    restartQuotes();
  }
  function showQuote(i, instant) {
    const list = QUOTES[lang] || QUOTES.tr;
    qIdx = i;
    const box = $("#quotes");
    const apply = () => {
      $("#quoteText").textContent = list[i][0];
      $("#quoteAuthor").textContent = "— " + list[i][1];
      $$("#quoteDots button").forEach((b, j) => b.classList.toggle("on", j === i));
      box.classList.remove("swap");
    };
    if (instant) return apply();
    box.classList.add("swap");
    setTimeout(apply, 450);
  }
  function restartQuotes() {
    clearInterval(qTimer);
    qTimer = setInterval(() => showQuote((qIdx + 1) % (QUOTES[lang] || QUOTES.tr).length), 6500);
  }

  /* ---------------- reveal on scroll ---------------- */
  const revealer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); revealer.unobserve(en.target); }
      }), { threshold: 0.12 })
    : null;
  function observeReveals() {
    $$(".reveal:not(.in)").forEach((el) => revealer ? revealer.observe(el) : el.classList.add("in"));
  }

  /* ---------------- language ---------------- */
  function applyLang(next) {
    lang = next;
    try { localStorage.setItem("mm-lang", lang); } catch (e) { /* ignore */ }
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $("#langCurrent").textContent = lang.toUpperCase();
    $$("#langMenu [data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
    closeModal();
    renderDoctors();
    renderServices();
    renderCases();
    renderQuotes();
    wirePlaceholders();
    observeReveals();
    watchCaseTabs();
  }

  const langBox = $("#lang");
  $("#langBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    const open = langBox.classList.toggle("open");
    $("#langBtn").setAttribute("aria-expanded", open);
  });
  $$("#langMenu [data-lang]").forEach((b) => b.addEventListener("click", () => {
    langBox.classList.remove("open");
    applyLang(b.dataset.lang);
  }));
  document.addEventListener("click", () => langBox.classList.remove("open"));

  /* ---------------- routing ---------------- */
  function route() {
    const name = (location.hash || "#home").slice(1);
    const view = ROUTES.includes(name) ? name : "home";
    $$(".view").forEach((v) => v.classList.toggle("active", v.dataset.view === view));
    $$(".main-nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === view));
    window.scrollTo(0, 0);
    closeMenu();
    closeModal();
    // re-trigger the ruler animation on the new view
    $$(`.view[data-view="${view}"] .ruler`).forEach((r) => { r.style.animation = "none"; void r.offsetWidth; r.style.animation = ""; });
    observeReveals();
    onScroll();
  }
  window.addEventListener("hashchange", route);

  /* ---------------- header / menu ---------------- */
  const header = $("#siteHeader");
  function onScroll() { header.classList.toggle("solid", window.scrollY > 30 || $("#mainNav").classList.contains("open")); }
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#burger");
  function closeMenu() { $("#mainNav").classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", () => {
    const open = $("#mainNav").classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    onScroll();
  });

  $("#year").textContent = new Date().getFullYear();

  applyLang(lang);
  route();
})();
