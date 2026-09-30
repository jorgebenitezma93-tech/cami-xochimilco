/* CAMI · utilidades compartidas de las páginas internas (v2.1) */
document.documentElement.classList.add("js");
const CAMI = {
  WHATSAPP: "525560229681", // celular de CAMI (52 + 10 dígitos)
  // D-10 · Respaldo de solicitudes: URL que recibe una copia de cada solicitud de cita
  // (Google Apps Script, Formspree u otro). Vacío = solo WhatsApp. Si se activa, mencionarlo en el aviso de privacidad.
  BACKUP_URL: "",
  SERVICES: [
    { id: "heridas", icon: "bi-bandaid", kind: "Clínica de heridas", name: "Tratamiento avanzado de heridas", short: "Curación especializada de heridas que tardan en sanar." },
    { id: "consulta", icon: "bi-clipboard2-pulse", kind: "Medicina general", name: "Consulta general", short: "Valoración, diagnóstico y control de enfermedades crónicas." },
    { id: "rehab", icon: "bi-person-walking", kind: "Fisioterapia", name: "Rehabilitación física", short: "Alivia el dolor y recupera fuerza y movilidad." },
    { id: "rodillas", icon: "bi-activity", kind: "Articulaciones", name: "Rodillas, cadera y desgaste de cartílago", short: "Tratamiento de la artrosis y el dolor articular." },
    { id: "psico", icon: "bi-chat-heart", kind: "Salud mental", name: "Terapia psicológica", short: "Ansiedad, estrés, depresión y duelo." },
    { id: "pie", icon: "bi-heart-pulse", kind: "Diabetes", name: "Pie diabético y neuropatía", short: "Curación, prevención y manejo de la neuropatía." },
    { id: "varices", icon: "bi-droplet-half", kind: "Circulación", name: "Várices", short: "Menos pesadez e hinchazón, mejor circulación." },
    { id: "facial", icon: "bi-emoji-neutral", kind: "Rehabilitación neuromuscular", name: "Parálisis facial", short: "Recupera el movimiento y la simetría del rostro." },
    { id: "acu", icon: "bi-bullseye", kind: "Terapia complementaria", name: "Acupuntura", short: "Apoyo para el dolor, la tensión y el estrés." },
    { id: "homeo", icon: "bi-capsule", kind: "Terapia complementaria", name: "Homeopatía", short: "Tratamiento complementario e individual." },
    { id: "pisada", icon: "bi-graph-up", kind: "Biomecánica", name: "Estudio de la pisada (baropodometría)", short: "Análisis estático y dinámico de tu marcha." },
    { id: "plantillas", icon: "bi-rulers", kind: "Ortopedia", name: "Plantillas ortopédicas", short: "A la medida, para corregir la pisada." }
  ],
  esc: s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])),
  waLink: m => "https://wa.me/" + CAMI.WHATSAPP + "?text=" + encodeURIComponent(m),
  icon: (id, cls = "") => `<i class="bi ${id} ${cls}" aria-hidden="true"><svg><use href="#${id}"/></svg></i>`,
  // Enlaces de WhatsApp: abren en ventana nueva y lo avisan a lectores de pantalla (3.2.5 / 2.4.4)
  setWa(root = document) {
    root.querySelectorAll(".js-wa").forEach(a => {
      a.href = CAMI.waLink(a.dataset.msg || "Hola CAMI");
      a.target = "_blank"; a.rel = "noopener";
    });
    CAMI.markNewWindow(root);
  },
  markNewWindow(root = document) {
    root.querySelectorAll('a[target="_blank"]').forEach(a => {
      const d = (a.getAttribute("aria-describedby") || "").split(" ");
      if (!d.includes("nueva-ventana")) a.setAttribute("aria-describedby", (d.join(" ") + " nueva-ventana").trim());
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  CAMI.setWa();
  const yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
  // Cierra el menú de celular al elegir un enlace
  document.querySelectorAll("#mainNav .nav-link").forEach(a => a.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav && nav.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));
});
