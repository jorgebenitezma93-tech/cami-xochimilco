# CAMI Xochimilco · Entregables v2.7

Sube el contenido de esta carpeta, incluida la carpeta `assets/`, a la raíz del repositorio `cami-xochimilcoV2` (reemplaza los archivos existentes). **No subas** las carpetas `integraciones/` (configuración de la agenda) ni `herramientas/` (generador de las páginas de servicio).

| Entregable | Archivo |
|---|---|
| Prototipo interactivo | `prototipo.html` |
| Guía de estilo | `guia-de-estilo.html` |
| Páginas internas | `servicios.html` y `servicio-*.html` (nuevas en v2.6), `directorio.html`, `citas.html`, `promociones.html`, `noticias.html`, `noticia-*.html` |
| Páginas legales | `aviso-de-privacidad.html`, `accesibilidad.html` (nueva en v2.2) |
| Auditoría WCAG 2.1 AA | `auditoria-wcag.html` |
| Rondas de revisión | `revisiones.html` (cambios v2.2 y v2.3, decisiones D-01 a D-14) |

Estilos y scripts compartidos: `assets/` (`cami.css`, `cami-a11y.css`, `cami.js`, `cami-opciones.js`, `noticias.js`).

## Cambios v2.1 → v2.2

Aplicación de las recomendaciones del 29 de septiembre de 2026: textos sin promesa de resultados, un canal principal de citas (WhatsApp), menos movimiento, objetivos táctiles de 44 px, copia de la solicitud para el paciente, respaldo de citas preparado (`BACKUP_URL` en `assets/cami.js`), revisión médica visible en artículos, resumen del aviso de privacidad y declaración de accesibilidad. Detalle en `revisiones.html`.

## Cambios v2.2 → v2.3

Menú sin «Directorio» (la página se conserva, sin enlaces públicos) y con «Promociones» (página nueva); servicio de medicina regenerativa en enfermedades crónico-degenerativas al final de la lista, pendiente de validación legal y sanitaria (D-13).

## Cambios v2.3 → v2.4

Botón «Opciones de accesibilidad» en todas las páginas y agenda preparada (en línea y registro automático en el calendario del médico). Configuración en `assets/cami.js` (`AGENDA` y `BACKUP_URL`) siguiendo `integraciones/GUIA-AGENDA.md`.

## Cambios v2.4 → v2.5

Promociones: 3, 6, 9 y 12 meses sin intereses (todas las tarjetas de crédito excepto American Express, Banamex y BBVA; mínimo 5 terapias) y paquete de 5 terapias con 15% de descuento (no aplica con meses sin intereses). Vigencia: hasta el 31 de diciembre de 2026; participan todas las terapias. La integración del calendario queda en pausa.

## Cambios v2.5 → v2.6

Una página por servicio (13) y una página general de servicios para aparecer en Google. Para cambiar el texto de un servicio, edita `herramientas/servicios.json` y ejecuta `herramientas/generar-servicios.ps1`. La página de medicina regenerativa no se indexa en Google hasta resolver D-13.

## Cambios v2.6 → v2.7

Nuevo ícono de accesibilidad, «Noticias» al final del menú y ajustes de compatibilidad con Safari y Firefox. Revisión en Chromium de las 31 páginas a 375, 768 y 1366 px, axe-core y validador del W3C sin errores. Falta probar en Safari y Firefox reales.

Pendiente de CAMI: datos del equipo, visto bueno médico de artículos y decisiones D-01 a D-14 (ver `revisiones.html`).
