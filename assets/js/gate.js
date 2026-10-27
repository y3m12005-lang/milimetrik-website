/* Access gate: the site stays hidden until the visitor enters the access code.
   Only a SHA-256 hash of the code is stored here, never the code itself.
   This keeps casual visitors out; it is not a substitute for server-side auth. */
(function () {
  "use strict";

  const CODE_HASH = "023c58205a441a2a7958fc80692a4e21b7c4a057605252daedfe823d9aad638e";

  const TEXT = {
    tr: { title: "Hoş geldiniz", text: "Web sitesini görüntülemek için erişim kodunu girin.", ph: "Erişim kodu", btn: "Giriş", err: "Kod hatalı. Lütfen tekrar deneyin." },
    en: { title: "Welcome", text: "Enter the access code to view the website.", ph: "Access code", btn: "Enter", err: "Incorrect code. Please try again." },
    ru: { title: "Добро пожаловать", text: "Введите код доступа, чтобы открыть сайт.", ph: "Код доступа", btn: "Войти", err: "Неверный код. Попробуйте ещё раз." },
    ar: { title: "أهلاً بكم", text: "أدخل رمز الدخول لعرض الموقع.", ph: "رمز الدخول", btn: "دخول", err: "الرمز غير صحيح. يرجى المحاولة مرة أخرى." },
    de: { title: "Willkommen", text: "Geben Sie den Zugangscode ein, um die Website anzuzeigen.", ph: "Zugangscode", btn: "Eintreten", err: "Falscher Code. Bitte versuchen Sie es erneut." }
  };

  const html = document.documentElement;
  const gate = document.getElementById("gate");
  if (!html.classList.contains("gated")) { gate.remove(); return; }

  const $ = (id) => document.getElementById(id);
  const input = $("gateInput"), error = $("gateError");

  function paint() {
    const T = TEXT[html.lang] || TEXT.tr;
    gate.dir = html.lang === "ar" ? "rtl" : "ltr";
    $("gateTitle").textContent = T.title;
    $("gateText").textContent = T.text;
    input.placeholder = T.ph;
    input.setAttribute("aria-label", T.ph);
    $("gateBtn").textContent = T.btn;
    if (error.textContent) error.textContent = T.err;
    gate.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("on", b.dataset.lang === html.lang));
  }

  // Case, extra spaces, brackets and Turkish dotted/dotless I do not matter
  function normalize(s) {
    return s.replace(/[()]/g, " ").toUpperCase().replace(/[İı]/g, "I").replace(/\s+/g, " ").trim();
  }

  async function sha256(s) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  $("gateForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    if ((await sha256(normalize(input.value))) === CODE_HASH) {
      try { localStorage.setItem("mm-access", "1"); } catch (err) { /* this visit only */ }
      gate.classList.add("leaving");
      html.classList.remove("gated");
      setTimeout(() => gate.remove(), 700);
    } else {
      error.textContent = (TEXT[html.lang] || TEXT.tr).err;
      gate.querySelector(".gate-card").classList.remove("shake");
      void gate.offsetWidth;
      gate.querySelector(".gate-card").classList.add("shake");
      input.select();
    }
  });

  // language chips drive the site's own language menu, so both stay in sync
  gate.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
    const item = document.querySelector(`#langMenu [data-lang="${b.dataset.lang}"]`);
    if (item) item.click();
    paint();
  }));

  paint();
  input.focus();
})();
