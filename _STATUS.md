# eldiad-tracking — _STATUS.md

**Proyecto:** Atribución de ads del evento El Día D (14 oct 2026).
**Rol:** Acquisition/Monetization — mide de qué canal (X/IG/LinkedIn) viene el interés de compra para decidir gasto de ads.
**Última actualización:** 11 ago 2026.

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

## Lectura preliminar 23 jun 2026 (Vercel + Luma, vía Chrome)
- Tráfico real arrancó ~21 jun (primeros días planos). 103 visitantes / 115 page views / bounce 91%.
- Referrers: t.co (X) 23 = canal #1 · amazon-adsystem 17 + amazon 4 = display ajeno NO intencional (probable bot/mediación, infla bounce) · linkedin 8 · themediatrust 5 · doubleclick 2.
- Eventos: scroll_speakers 16 · reservar 12 · idioma_en 2 · ver_hotel 1.
- Luma: 126 confirmados, 123 Standard pagadas, $16.540 neto (tras $320 reembolsos). 5802 "invitados" = lista importada, no compradores.
- CLAVE: las 123 ventas NO vienen del ads de estos 7 días — vienen de lista caliente/WhatsApp/ventas previas. Ads frío aún convierte poco.
- IG NO aparece como referrer (oculta referrer, o campaña no activa). Usuario confirma: NO tiene Amazon ads. IG se arranca ahora.
- UTM Parameters tab en Vercel BLOQUEADA tras upgrade extra (Web Analytics Plus) — desglose UTM nativo no disponible. Usar Referrers + eventos, o CSV Luma.
- PENDIENTE: con IG corriendo + UTM, releer en 3-4 días y comparar X vs IG. Revisar que campañas X/LinkedIn no tengan display/audience-network activado (gasto basura).

## Cambio 11 ago 2026 — Antonio Linares cancelado
- Sección speaker I (Antonio Linares: bio, video podcast, metas OG y aria-labels) ELIMINADA de index.html. Cero referencias restantes.
- Reemplazada por card "Invitado por anunciar" (bilingüe ES/EN), misma posición I. Copy: calibre igual al roster, "el precio no espera al anuncio, 14 sep sube".
- Estrategia: reveal del nuevo headliner sincronizado con semana Sep 8–13 (compresión de deadline pre-$400). Candidatos en gestión: Anthony Scaramucci (contactado por WhatsApp), Raoul Pal (declinó — booked hasta feb 2027; comprometido como primer invitado edición late 2027 + posible podcast).
- PENDIENTE: Hernán regenera poster (dday.png / og.jpg / dday-roster*.png) sin Antonio — subir cuando lo pase. El poster actual TODAVÍA muestra a Antonio como figura central.

## Update 11 ago 2026 (noche) — Poster nuevo deployado
- Hernán regeneró el arte con su cara como figura central (HERNAN JARAMILLO reemplaza a Antonio Linares en el poster).
- dday-roster.png reemplazado (1280x853) + og.jpg regenerado (1200x630 center-crop) con cache-bust ?v=3.
- Metas og:image:alt y aria-label del hero actualizadas con Hernán Jaramillo.
- Verificado live: PNG 200, 1.48MB, last-modified fresco.
- El card "Invitado por anunciar" (speaker VIII) sigue vivo en la página — el slot de misterio ahora vive solo en el copy, no en el arte.

## Update 13 ago 2026 — Gobernador fuera
- Sección del Gobernador Andrés Julián Rendón (Urabá) eliminada de index.html, con su video. Cero referencias restantes.
- Roster renumerado: I Santos, II Linares (virtual), III Joffroy, IV Faria, V Sierra, VI Ospina & Palacio, VII Cohosts, VIII Invitado por anunciar.
- El poster actual no nombra a Rendón, no requiere cambio de arte.

## Update 14 ago 2026 — Pedro Faria fuera
- Seccion speaker de Pedro Faria eliminada (bio, video). Cero referencias en HTML.
- Roster: I Santos, II Linares (virtual), III Joffroy, IV Sierra, V Ospina & Palacio, VI Cohosts, VII Invitado por anunciar.
- Poster dday-roster.png editado por pixeles: label PEDRO FARIA y linea conectora borrados (parche de cielo + blend de columnas). og.jpg regenerado, cache-bust v=4.
- OG description actualizada: Santos, Linares (virtual), Joffroy, Sierra.

## Update 20 ago 2026 — Joe McCann reemplaza al invitado misterioso
- Card "Invitado por anunciar" (VII) reemplazado por Joe McCann: foto circular (speaker-joemccann.jpg, 640x640), badge Presencia confirmada, rol Investor · Philanthropist.
- Placeholder de video: "La conversación completa con Joe se estrena en esta página muy pronto" — Hernán graba con él miércoles próximo; agregar pod cuando pase el video.
- OG description: fuera invitado por anunciar, entra Joe McCann.
- Pipeline restante: Scaramucci y Alejandro Salazar siguen en gestión.

## Update 20 ago 2026 (2) — Joe McCann a primera posición
- Joe McCann movido de VII a I (primer speaker del roster, antes de Santos). Renumerado: I Joe, II Santos, III Linares, IV Joffroy, V Sierra, VI Ospina & Palacio, VII Cohosts.
- OG description reordenada con Joe primero.
