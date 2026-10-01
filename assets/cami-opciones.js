/* =========================================================
   CAMI · Opciones de accesibilidad (v2.4)
   Panel propio (no es una superposición automática): tamaño de texto, alto contraste,
   enlaces subrayados, más espacio entre líneas y detener animaciones.
   Se carga en el <head> de todas las páginas para aplicar las preferencias sin parpadeo.
   ========================================================= */
(function () {
  "use strict";
  var KEY = "cami-opciones", root = document.documentElement;
  var DEF = { texto: "normal", contraste: false, subrayado: false, espaciado: false, movimiento: true };
  function load() { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return Object.assign({}, DEF); } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function apply(p) {
    root.setAttribute("data-texto", p.texto);
    root.classList.toggle("a11y-contraste", !!p.contraste);
    root.classList.toggle("a11y-subrayado", !!p.subrayado);
    root.classList.toggle("a11y-espaciado", !!p.espaciado);
    root.classList.toggle("a11y-sin-movimiento", !p.movimiento);
  }
  var prefs = load(); apply(prefs);

  /* Estilos de las preferencias y del panel */
  var css = [
    'html[data-texto="grande"]{font-size:112.5%}',
    'html[data-texto="muy-grande"]{font-size:125%}',
    'html.a11y-contraste{--ink:#000;--muted:#1F2933;--line:#4B5563;--bg-soft:#fff;--cami-azul:#004F80;--cami-azul-hover:#003B61}',
    'html.a11y-contraste body{color:#000;background:#fff}',
    'html.a11y-contraste .text-muted-2,html.a11y-contraste .lead,html.a11y-contraste small{color:#1F2933!important}',
    'html.a11y-contraste .bg-soft,html.a11y-contraste .topbar,html.a11y-contraste .site-footer,html.a11y-contraste .hero,html.a11y-contraste .page-head{background:#fff!important}',
    'html.a11y-contraste .svc,html.a11y-contraste .review,html.a11y-contraste .promo,html.a11y-contraste .step,html.a11y-contraste .pstep,html.a11y-contraste .form-card,html.a11y-contraste .book-card,html.a11y-contraste .float-book,html.a11y-contraste .regen,html.a11y-contraste .news-card,html.a11y-contraste .person{border:2px solid #000!important}',
    'html.a11y-contraste a:not(.btn){color:#003B61;text-decoration:underline}',
    'html.a11y-subrayado a:not(.btn){text-decoration:underline!important;text-underline-offset:.18em}',
    'html.a11y-espaciado body{line-height:1.9}',
    'html.a11y-espaciado p,html.a11y-espaciado li,html.a11y-espaciado dd{letter-spacing:.03em;word-spacing:.12em}',
    'html.a11y-sin-movimiento *,html.a11y-sin-movimiento *::before,html.a11y-sin-movimiento *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}',
    'html.a11y-sin-movimiento .reveal{opacity:1!important;transform:none!important}',
    '.a11y-fab{position:fixed;left:16px;bottom:16px;z-index:1045;width:52px;height:52px;border-radius:50%;border:2px solid #fff;background:#006BAD;color:#fff;display:grid;place-items:center;box-shadow:0 10px 26px -8px rgba(0,0,0,.4);cursor:pointer}',
    '.a11y-fab:hover{background:#00598F}',
    '.a11y-fab svg{width:28px;height:28px;fill:currentColor}',
    '@media (max-width:767.98px){.a11y-fab{bottom:calc(78px + env(safe-area-inset-bottom))}}',
    '.a11y-panel{position:fixed;left:16px;bottom:80px;z-index:1046;width:min(360px,calc(100vw - 32px));max-height:calc(100dvh - 110px);overflow:auto;background:#fff;color:#1B2430;border:1px solid #758291;border-radius:18px;padding:18px 18px 16px;box-shadow:0 30px 70px -20px rgba(16,40,70,.45);font-size:1rem}',
    '@media (max-width:767.98px){.a11y-panel{bottom:calc(142px + env(safe-area-inset-bottom))}}',
    '.a11y-panel[hidden]{display:none}',
    '.a11y-panel h2{font-size:1.15rem;font-weight:700;margin:0}',
    '.a11y-panel .a11y-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}',
    '.a11y-panel .a11y-x{width:44px;height:44px;border:0;border-radius:12px;background:#F6F8FA;color:#1B2430;font-size:1.5rem;line-height:1;cursor:pointer}',
    '.a11y-panel fieldset{border:0;padding:0;margin:0 0 12px}',
    '.a11y-panel legend{font-size:.9rem;font-weight:600;margin-bottom:6px;float:none;width:auto}',
    '.a11y-seg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}',
    '.a11y-seg label{position:relative}',
    '.a11y-seg input{position:absolute;opacity:0;inset:0}',
    '.a11y-seg span{display:flex;align-items:center;justify-content:center;min-height:44px;border:2px solid #758291;border-radius:12px;font-weight:600;cursor:pointer;text-align:center;padding:0 4px}',
    '.a11y-seg input:checked+span{background:#006BAD;border-color:#006BAD;color:#fff}',
    '.a11y-seg input:focus-visible+span{outline:3px solid #006BAD;outline-offset:2px}',
    '.a11y-opt{display:flex;justify-content:space-between;align-items:center;gap:12px;width:100%;min-height:48px;border:2px solid #E6EAEF;border-radius:12px;background:#fff;color:#1B2430;padding:8px 12px;margin-bottom:6px;font:inherit;font-weight:500;text-align:left;cursor:pointer}',
    '.a11y-opt .sw{flex:none;width:44px;height:26px;border-radius:999px;background:#758291;position:relative}',
    '.a11y-opt .sw::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .2s}',
    '.a11y-opt[aria-pressed="true"]{border-color:#006BAD}',
    '.a11y-opt[aria-pressed="true"] .sw{background:#006BAD}',
    '.a11y-opt[aria-pressed="true"] .sw::after{left:21px}',
    '.a11y-foot{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap}',
    '.a11y-foot button{min-height:44px;border:2px solid #006BAD;border-radius:12px;background:#fff;color:#006BAD;font-weight:600;padding:0 14px;cursor:pointer}',
    '.a11y-foot a{display:inline-flex;align-items:center;min-height:44px;color:#006BAD}',
    '.a11y-status{font-size:.85rem;color:#3B4654;margin:8px 0 0;min-height:1.2em}'
  ].join("\n");
  var st = document.createElement("style"); st.id = "cami-opciones-css"; st.textContent = css;
  (document.head || root).appendChild(st);

  /* Si la página tiene animaciones con GSAP y cambia la preferencia de movimiento, se recarga
     conservando la posición, para que las animaciones se apliquen o se quiten por completo. */
  function reloadKeepingScroll() {
    try { sessionStorage.setItem("cami-scroll", String(window.scrollY)); } catch (e) {}
    location.reload();
  }

  function build() {
    if (document.getElementById("a11yPanel")) return;
    var fab = document.createElement("button");
    fab.type = "button"; fab.className = "a11y-fab"; fab.id = "a11yFab";
    fab.setAttribute("aria-expanded", "false"); fab.setAttribute("aria-controls", "a11yPanel");
    fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8.5 6.1-5.5 1.1V13l2.3 7.2a1 1 0 0 1-1.9.6L13.2 15h-2.4l-2.2 5.8a1 1 0 0 1-1.9-.6L9 13V9.2L3.5 8.1a1 1 0 1 1 .4-2l6.1 1.2h4l6.1-1.2a1 1 0 1 1 .4 2z"/></svg><span class="visually-hidden">Opciones de accesibilidad</span>';

    var panel = document.createElement("div");
    panel.className = "a11y-panel"; panel.id = "a11yPanel"; panel.hidden = true;
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-labelledby", "a11yTitle");
    var sizes = [["normal", "Normal"], ["grande", "Grande"], ["muy-grande", "Muy grande"]];
    var opts = [["contraste", "Alto contraste"], ["subrayado", "Subrayar enlaces"], ["espaciado", "Más espacio entre líneas"], ["movimiento", "Detener animaciones"]];
    panel.innerHTML =
      '<div class="a11y-head"><h2 id="a11yTitle" tabindex="-1">Opciones de accesibilidad</h2><button type="button" class="a11y-x" data-a11y="close" aria-label="Cerrar opciones de accesibilidad">×</button></div>' +
      '<fieldset><legend>Tamaño del texto</legend><div class="a11y-seg">' +
      sizes.map(function (s) { return '<label><input type="radio" name="a11y-texto" value="' + s[0] + '"' + (prefs.texto === s[0] ? " checked" : "") + '><span>' + s[1] + '</span></label>'; }).join("") +
      '</div></fieldset>' +
      opts.map(function (o) {
        var on = o[0] === "movimiento" ? !prefs.movimiento : !!prefs[o[0]];
        return '<button type="button" class="a11y-opt" data-opt="' + o[0] + '" aria-pressed="' + on + '"><span>' + o[1] + '</span><span class="sw" aria-hidden="true"></span></button>';
      }).join("") +
      '<div class="a11y-foot"><button type="button" data-a11y="reset">Restablecer</button><a href="accesibilidad.html">Declaración de accesibilidad</a></div>' +
      '<p class="a11y-status" role="status" aria-live="polite"></p>';

    document.body.appendChild(panel); document.body.appendChild(fab);
    var status = panel.querySelector(".a11y-status");
    var hasGsap = function () { return !!(window.gsap && window.ScrollTrigger); };

    function open(v) {
      panel.hidden = !v; fab.setAttribute("aria-expanded", String(v));
      if (v) panel.querySelector("#a11yTitle").focus(); else fab.focus();
    }
    fab.addEventListener("click", function () { open(panel.hidden); });
    panel.addEventListener("keydown", function (e) { if (e.key === "Escape") open(false); });
    document.addEventListener("click", function (e) { if (!panel.hidden && !panel.contains(e.target) && e.target !== fab && !fab.contains(e.target)) { panel.hidden = true; fab.setAttribute("aria-expanded", "false"); } });

    panel.addEventListener("change", function (e) {
      if (e.target.name !== "a11y-texto") return;
      prefs.texto = e.target.value; save(prefs); apply(prefs);
      status.textContent = "Tamaño del texto: " + e.target.parentNode.textContent + ".";
    });
    panel.addEventListener("click", function (e) {
      var b = e.target.closest("[data-opt],[data-a11y]"); if (!b) return;
      if (b.dataset.a11y === "close") { open(false); return; }
      if (b.dataset.a11y === "reset") {
        var motionChanged = !prefs.movimiento;
        prefs = Object.assign({}, DEF); save(prefs); apply(prefs);
        panel.querySelectorAll("[data-opt]").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        panel.querySelector('input[value="normal"]').checked = true;
        status.textContent = "Se restablecieron las opciones.";
        if (motionChanged && hasGsap()) reloadKeepingScroll();
        return;
      }
      var k = b.dataset.opt, on = b.getAttribute("aria-pressed") !== "true";
      b.setAttribute("aria-pressed", String(on));
      if (k === "movimiento") prefs.movimiento = !on; else prefs[k] = on;
      save(prefs); apply(prefs);
      status.textContent = b.firstChild.textContent + (on ? ": activado." : ": desactivado.");
      if (k === "movimiento" && hasGsap()) reloadKeepingScroll();
    });

    // Restaura la posición después de recargar por un cambio de movimiento
    try {
      var y = sessionStorage.getItem("cami-scroll");
      if (y !== null) { sessionStorage.removeItem("cami-scroll"); window.scrollTo(0, +y); }
    } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();

  // Otras partes del sitio consultan esta preferencia (p. ej., las animaciones del inicio)
  window.CAMI_OPCIONES = { sinMovimiento: function () { return root.classList.contains("a11y-sin-movimiento"); } };
})();
