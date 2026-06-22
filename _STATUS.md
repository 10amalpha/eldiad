# eldiad-tracking — _STATUS.md

**Proyecto:** Atribución de ads del evento El Día D (14 oct 2026).
**Rol:** Acquisition/Monetization — mide de qué canal (X/IG/LinkedIn) viene el interés de compra para decidir gasto de ads.
**Última actualización:** 22 jun 2026.

## Infra
- Repo: 10amalpha/eldiad (static single-file index.html)
- Live: eldiad.10am.pro
- Vercel project: prj_fAeWuQBMuGvk8zCxqRusaMcGsBtI
- Plan: Pro ACTIVADO (Pro $20 + Web Analytics 100k events $0). Speed Insights NO contratado. CANCELAR Pro después del 14 oct 2026.

## Qué está montado (deployado)
Snippet estático en <head>: /_vercel/insights/script.js (NO usar @vercel/analytics React — sitio HTML puro).

4 eventos custom, todos con propiedad `source` (= utm_source o 'directo'):
- reservar — clic botón Luma (2 botones: cta=countdown y cta=final) — intención de compra
- scroll_speakers — IntersectionObserver sobre primer section.speaker (threshold 0.4, once) — interés real
- ver_hotel — clic en a.secondary[href*=sitesmedellin] — intención alta (fuera de Medellín)
- idioma_en — clic toggle EN (once) — audiencia no hispana por canal

Bloque <script> único antes de </body> (event delegation + IntersectionObserver).

## UTM links para ads — REQUERIDO (sin esto todo cae en 'directo')
- X: https://eldiad.10am.pro/?utm_source=x
- IG: https://eldiad.10am.pro/?utm_source=ig
- LinkedIn: https://eldiad.10am.pro/?utm_source=linkedin

## Cómo leer
Vercel > eldiad > Analytics > Events. Desglosar cada evento por source.
Decisión: canal con mejor ratio visita→reservar por dólar = sube presupuesto. Tráfico alto + poco scroll_speakers = clics basura, recortar.

## Límite conocido
Mide CLIC a Luma, no PAGO (el pago vive en Luma, caja negra). Cierre pendiente: exportar CSV invitados Luma y cruzar por canal → costo por registro pagado real.

## Próximas acciones
1. [BLOQUEANTE] Confirmar UTM puestos en X Ads / Meta / LinkedIn.
2. Verificar captura: abrir ?utm_source=x, scroll a ponentes, clic reservar → ver eventos (~30s).
3. Dejar correr 5-7 días antes de leer.
4. Cruce con CSV de Luma para pago real.
