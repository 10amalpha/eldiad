# eldiad-tracking — _STATUS.md

**Proyecto:** Atribución de ads del evento El Día D (14 oct 2026).
**Rol:** Acquisition/Monetization — mide de qué canal (X/IG/LinkedIn) viene el interés de compra para decidir gasto de ads.
**Última actualización:** 1 sep 2026.

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
- ver_hotel — clic en a.secondary[data-hotel] (propiedad `hotel`: zarzo|sites) — intención alta (fuera de Medellín)
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

## Update 20 ago 2026 (3) — MacroWise sponsor
- MacroWise (macrowise.capital, Guillermo Valencia) agregado a Aliados del Dia D, entre MBS y Sites.
- Logo procesado: negro a transparente, texto blanco, 243x44 (macrowise-logo.png). CSS max-height 26px.
- Note bilingue: Epistemic Capital · Macro y geopolitica para LATAM.

## Update 21 ago 2026 — Celsia sponsor
- Celsia (celsia.com) agregado a Aliados del Dia D, entre MacroWise y Sites. Logo naranja sobre transparente (415x131, celsia-logo.png), max-height 42px.
- Note bilingue: Energia · El piso fisico de todo lo demas (eco del copy de Ricardo Sierra, speaker V y CEO de Celsia).

## Update 26 ago 2026 — Video de Joe McCann
- Placeholder de Joe (speaker I) reemplazado por pod estandar con video qoReYHBo3zo (lazy-load youtube-nocookie, mismo formato que Santos/Linares).

## Cambios 1 sep 2026
- Zona de hoteles en sección final: El Zarzo (Cloudbeds, promo `eldiad` embebido en link: hotels.cloudbeds.com/reservation/TinNiy#promo=eldiad) + Sites (15% código 10AMPRO). Grid 2 col, stack <640px.
- Logo `zarzo-logo.png` agregado (fondo transparente, procesado del original).
- Evento ver_hotel ahora reporta propiedad `hotel` (zarzo|sites) en Vercel Analytics.

## Update 8 sep 2026 — Nuevo aliado: Inplux
- Agregado Inplux (inplux.co — fábrica de software a la medida, Medellín) a la sección "Aliados del Día D", posición 7 (después de Celsia).
- Logo: `/inplux-logo.svg` — vector oficial del brand kit (PDF `inplux-logo-horizontal-inverse` → SVG, viewBox recortado, 6.9 KB). Kit completo (12 PDFs: mark, wordmark, stacked, appicon, variantes ink/white/teal) lo tiene Hernán. CSS `.partner .logos a.inplux .logobox img{max-height:34px}`.
- Note bilingüe: "Software · De un problema real a producción" / "Software · From a real problem to production".
- Grid queda 3+3+1 (el 7° centrado solo en la última fila). Si entra un 8° aliado, queda 4+4 sin tocar CSS.

## Update 17 sep 2026 — MBS logo + link
- Reemplazado `mbs-logo.png` (caja blanca, se veía mal en fondo oscuro) por `mbs-logo.svg`: vector oficial "MBS & Associates" extraído de `MBS-GROUP-LOGOS.ai`, navy recoloreado a blanco, mark dorado #bc8706 intacto. 8.8 KB, width/height explícitos.
- Bloque `.mbs` pasó de `<div>` a `<a href="https://mbs-associates.com/">`. CSS `a.mbs .logobox img{height:46px}`.
- El .ai también trae "MBS Corporate Management" (montañas) y "GTL Legal" — no usados.

## 2026-10-01 — Modo día del evento programado
- index.html ahora tiene dos estados. Desde el **14-oct-2026 08:30 COT** (`html.is-live`, chequeo cada 30s en el cliente) se oculta: countdown, "Reservar Plaza" (x2), precio USD 300, hoteles. Se muestra: bloque "En vivo ahora" con CTAs a 10am.pro y youtube.com/@10ampro, HUD "● En vivo", nota de puertas 8:00 AM.
- En modo evento la imagen hero (.stage) se oculta; queda HUD + logo compactos y el bloque "En vivo" arriba del fold.
- Preview: `?mode=live` fuerza el modo evento; `?mode=pre` fuerza el modo pre-evento.
- Analytics: eventos `streaming` (cta top/final, dest 10ampro/youtube).
- Pendiente post-evento: cambiar CTA a "ve la grabación" cuando esté el VOD.

## 2026-10-19 — Landing reconvertida a "próxima edición"
- Evento del 14-oct cerrado (500 asistentes). Switch is-live y secciones de streaming/countdown eliminados.
- Hero: foto del panel de cierre (`hero-eldiad-2026.jpg`, cover) + cita de Hernán ("nuevo péptido del conocimiento…"). OG nuevo (`og.jpg?v=5`).
- Fecha: "por anunciar · últimas dos semanas de octubre o primera de noviembre" (sin año — confirmar). Cupo 520.
- Boletas: Early bird USD 150 · Early bird + Network Event en El Zarzo 6–9 PM (100 cupos) **precio por anunciar**.
- CTA único: "Avísame cuando abra" → luma.com/10ampro (evento `alertas`). Hoteles y bloque Alphas eliminados.
- Speakers: tags "Presencia confirmada" → "Estuvo en El Día D · Octubre 2026". Proof: 500 asistentes / 520 cupos.
- Pendiente: fecha+sede, precio tier Zarzo, line-up nuevo, reactivar hoteles cuando haya fecha.
- 2026-10-19 (2): speakers I–VI (bios) eliminados. Nueva sección #charlas "Archivo · Octubre 2026" con grid de charlas (facade YouTube, mismo JS que .pod). Para agregar un clip: copiar un bloque `.talk` y cambiar data-id/nombre. Cohosts se mantienen. Clips actuales: Santiago R. Santos 6jKoQeWgYhg · Antonio Linares tgaqTeDfQas.
- 2026-10-19 (3): logos de aliados (Veronorte, EAFIT, Makeno, MBS, MacroWise, Celsia, Inplux) eliminados. Sección Aliados ahora es CTA a media.10am.pro.
- 2026-10-19 (4): orden: proof → cohosts → bloque Speakers ('se anuncia con la fecha', CTA Luma) → aliados → … → archivo de charlas.
- 2026-10-19 (5): boletas en tarjetas. Gold USD 450 (100 cupos, precio único, Zarzo 6–9 PM) · General 150→250→350 (480 cupos, fase activa .on). Total 580. Dos botones a Luma (cta gold/general).
- 2026-10-19 (6): tarjetas de boletas suben al bloque bajo el hero (#boletas); cifras 580/150/100 y botón único eliminados. Logística queda solo con cuándo/dónde.
- 2026-10-19 (7): sección Logística/Orden de Operaciones eliminada (duplicaba boletas). Cierre: frase final + dos botones Gold/General a Luma. Estilos .cta ahora globales.
- 2026-10-19 (8): episodios en proof = dinámico desde growth.10am.pro/api/media-kit-stats (episodes.count), fallback 229 en HTML. Misma fuente que media.10am.pro.
- 2026-10-19 (9): sección 'Para quién es / No vengan si' eliminada (repetitiva).
- 2026-10-19 (9): sección 'Para quién es / No vengan si' eliminada (repetitiva).
- 2026-10-19 (10): cohosts +3 placeholders (Alejandro Pérez, Camilo Ospina, Lucas Jaramillo — iniciales hasta recibir fotos; pendiente foto + handle + tag). Copy pasado a 'ustedes' como el Substack; líneas de 'Unos acumulan activos / Otros acumulan cuotas' y 'No vengan a inspirarse'.
- 2026-10-19 (10): cohosts +3 placeholders (Alejandro Pérez, Camilo Ospina, Lucas Jaramillo — iniciales hasta recibir fotos; pendiente foto + handle + tag). Copy en 'ustedes' como el Substack; 'Unos acumulan activos / Otros acumulan cuotas', 'No vengan a inspirarse'.
- 2026-10-19 (11): sección #network 'Lo que pasa en el rooftop' entre boletas y proof, 3 fotos del Zarzo (zarzo-1/2/3.jpg; en móvil 2).
- 2026-10-19 (12): hero rota 13 fotos (hero-eldiad-2026 + hero-2..13) cada 6s con fundido; OG = hero-eldiad-2026.jpg (foto del panel, Hernán la prefiere a una tarjeta diseñada).
- 2026-10-19 (13): cohost Alejandro Mesa (@AlejandroMesaG). Handles: Lucas Jaramillo @LucasJaramilloD, Alejandro Pérez @perezlinaza, Camilo Ospina @DrCamiloOspina. Fotos tomadas de X (cohost-perez/mesa/ospina/lucas.png).
- 2026-10-19 (14): hoteles de vuelta al final de la sección #network (Zarzo promo=eldiad; Sites cp=10ampro sin fechas hasta tener fecha). Cuando haya fecha: poner fechas en el link de Sites (formato /bookcore/availability/sitehotel/YYYY-MM-DD/YYYY-MM-DD/2/0/?cp=10ampro).
- 2026-10-20: archivo de charlas = 7 guests con foto del escenario (talk-*.jpg). Clips: Santos 6jKoQeWgYhg, Linares tgaqTeDfQas, Valencia 4yRAcsBa5OM. McCann/Joffroy/Sierra/Ospina+Palacio/Arias/N. Fernández 'Próximamente' → playlist PLI3suTaC01XM. Para activar un clip: cambiar <a class=talk soon> por <div class=talk> con data-id.
- 2026-10-20: /aliados = propuesta Sponsor Oficial (aliados.html, noindex). USD 15.000 early bird (antes del anuncio de fecha) / 25.000 base; 4 entradas Gold; cifras de media.10am.pro. Landing enlaza desde sección Aliados. vercel.json cleanUrls.
- 2026-10-20: Gold pasa a USD 750 'Dos días con la gente del Día D': Día D + Rooftop Zarzo 6–9 PM + almuerzo privado al día siguiente 12:30–3 PM con cohosts y speakers, mismas 100 personas. Escalera 150·250·350·750. /aliados: 4 entradas Gold a 750.
- 2026-10-20: Sección #network reestructurada en dos actos: 'Lo que pasa fuera del auditorio' → Acto I La noche (rooftop, fotos) · Acto II El día siguiente (bloque .lunch con marco dorado, sin fotos hasta que exista el almuerzo; cta 'lunch-gold').
- 2026-10-21: Almuerzo Gold = OLI Restaurante Mediterráneo (IG @oli__restaurante). Fotos oli-sala/chef/pasta/paella.jpg (640px, sacadas del IG vía browser del Mac; IG no da más resolución sin login). Grid .lgrid en bloque .lunch + cita Revista Diners.
- 2026-10-21: Gold baja a 88 cupos (Hernán reserva overflow). General sube a 492, aforo 580 (492+88).
