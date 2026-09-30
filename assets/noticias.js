/* CAMI · Noticias y consejos. CONTENIDO DE EJEMPLO para el prototipo:
   requiere revisión y visto bueno médico de CAMI antes de publicarse. */
const NEWS = [
  { id: "estudio-pisada", cat: "Pisada y plantillas", icon: "bi-graph-up", date: "2026-09-22", min: 4, featured: true,
    title: "Qué es el estudio de la pisada y quién lo necesita",
    summary: "Cómo funciona la baropodometría, qué mide y por qué el dolor de rodilla, cadera o espalda a veces empieza en los pies.",
    body: `<p>Cada paso que das reparte el peso de tu cuerpo sobre la planta del pie. Cuando ese reparto no es parejo, el cuerpo compensa: la rodilla gira un poco, la cadera se inclina, la espalda se tensa. Con el tiempo, esa compensación puede sentirse como dolor lejos del pie.</p>
<h2>Qué mide el estudio</h2>
<p>El estudio baropodométrico usa una plataforma con múltiples sensores. Primero permaneces de pie sobre ella (análisis estático) y después caminas sobre ella (análisis dinámico). Así se obtiene:</p>
<ul><li>La presión en cada punto de la planta y tu superficie de apoyo.</li><li>Cómo cambian esas presiones en cada paso.</li><li>Tu centro de gravedad y la línea de empuje del cuerpo.</li><li>Cómo repartes el peso entre ambas piernas.</li></ul>
<p>Es rápido y no causa molestias.</p>
<div class="callout"><b>¿Cuándo conviene hacerlo?</b>Si tienes dolor de pies, rodillas, cadera o espalda al caminar o estar de pie; si tus zapatos se desgastan de un solo lado; o si tu médico te indicó plantillas.</div>
<h2>Qué pasa con los resultados</h2>
<p>Con la información del estudio te explicamos qué ocurre en tu pisada y, si es necesario, diseñamos plantillas a tu medida que ayudan a distribuir el peso y a alinear el pie desde el arco hasta el talón.</p>` },
  { id: "pie-diabetico", cat: "Diabetes", icon: "bi-heart-pulse", date: "2026-09-08", min: 3,
    title: "Pie diabético: revisa tus pies aunque no te duelan",
    summary: "La diabetes puede disminuir la sensibilidad. Por eso una herida pequeña puede pasar desapercibida. Señales para acudir a consulta.",
    body: `<p>La diabetes puede dañar los nervios y la circulación de los pies. Cuando baja la sensibilidad, una ampolla o una cortada pueden no doler, y por eso se descubren tarde.</p>
<h2>Señales para agendar una revisión pronto</h2>
<ul><li>Heridas que no cierran.</li><li>Cambios de color en la piel o las uñas.</li><li>Hormigueo, ardor o pérdida de sensibilidad.</li><li>Callosidades que se abren o cambian.</li></ul>
<div class="callout"><b>Revisión regular</b>Aunque no tengas molestias, conviene revisar tus pies con regularidad. Tu médico te indicará la frecuencia adecuada para tu caso.</div>
<p>En CAMI revisamos, curamos y prevenimos heridas, y tratamos el hormigueo, ardor y dolor de la neuropatía diabética.</p>` },
  { id: "heridas-que-no-cierran", cat: "Heridas", icon: "bi-bandaid", date: "2026-08-25", min: 3,
    title: "Heridas que no cierran: cuándo acudir",
    summary: "Úlceras por várices, por presión o heridas después de una cirugía: qué las hace tardar y cómo se atienden.",
    body: `<p>Algunas heridas tardan en sanar porque algo en el cuerpo lo dificulta: mala circulación, diabetes, presión constante sobre la piel o una cirugía reciente.</p>
<h2>Qué heridas atendemos</h2>
<ul><li>Úlceras por pie diabético.</li><li>Úlceras por várices.</li><li>Úlceras por presión.</li><li>Heridas postquirúrgicas.</li></ul>
<h2>Cómo es el tratamiento</h2>
<p>Primero valoramos la herida, su origen y tu estado de salud general. Después aplicamos la técnica de curación más adecuada y te damos seguimiento periódico hasta el cierre, con indicaciones claras para casa.</p>
<div class="callout"><b>No esperes</b>Si una herida no mejora, cambia de color o huele diferente, agenda una valoración lo antes posible.</div>` },
  { id: "rodilla-escaleras", cat: "Rehabilitación", icon: "bi-activity", date: "2026-08-11", min: 4,
    title: "Dolor de rodilla al subir escaleras",
    summary: "Qué puede significar, por qué no conviene acostumbrarse a él y cómo ayuda la rehabilitación.",
    body: `<p>El cartílago amortigua la rodilla. Cuando se desgasta, aparecen dolor, rigidez e inflamación, que suelen notarse más al subir escaleras o al levantarse de una silla.</p>
<h2>Por qué atenderlo pronto</h2>
<p>El dolor hace que muevas menos la pierna, y el músculo que protege la rodilla se debilita. Romper ese círculo es uno de los objetivos del tratamiento.</p>
<h2>Cómo lo tratamos</h2>
<p>Combinamos valoración médica, rehabilitación y, cuando hace falta, plantillas para reducir el dolor y proteger la articulación. Antes de empezar recibes un plan con objetivos, número estimado de sesiones y costo.</p>` },
  { id: "ansiedad-dolor", cat: "Salud mental", icon: "bi-chat-heart", date: "2026-07-28", min: 3,
    title: "Ansiedad y dolor crónico: por qué suelen ir juntos",
    summary: "Vivir con dolor cansa. La terapia psicológica ayuda a manejar el estrés que lo acompaña.",
    body: `<p>El dolor que dura meses afecta el sueño, el ánimo y la vida diaria. Es común sentir ansiedad, frustración o tristeza.</p>
<h2>Cómo ayuda la terapia</h2>
<p>La terapia psicológica ofrece un espacio profesional y confidencial para entender lo que sientes y construir herramientas para estar mejor, en paralelo al tratamiento físico.</p>
<div class="callout"><b>Si necesitas ayuda urgente</b>Si tienes pensamientos de hacerte daño, busca atención de inmediato en el servicio de urgencias más cercano o llama al 911.</div>` },
  { id: "horario", cat: "Avisos de la clínica", icon: "bi-clock", date: "2026-07-14", min: 1,
    title: "Nuestro horario de atención",
    summary: "Turno matutino y vespertino de lunes a viernes, y sábados hasta las 16:00.",
    body: `<p>Te atendemos de lunes a viernes de 9:00 a 15:00 y de 17:00 a 19:00, y los sábados de 9:00 a 16:00.</p>
<p>Puedes agendar por teléfono al 55 4168 0806 o 55 6795 3960, por WhatsApp al 55 6022 9681, o en línea desde la página <a href="citas.html">Agendar cita</a>.</p>` }
];
const NEWS_FMT = new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric" });
const newsDate = s => { const [y, m, d] = s.split("-").map(Number); return NEWS_FMT.format(new Date(y, m - 1, d)); };
