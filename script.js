/* =======================================================================
   CONTENIDO EDITABLE
   Para añadir tus propias fotos: copia el archivo a assets/imagenes/
   y agrega una línea al arreglo GALLERY.
   ======================================================================= */

const GALLERY = [
  { src: "assets/imagenes/Institucion.jpeg",   caption: "Nuestra institución educativa promotora" },
  { src: "assets/imagenes/Logo del Colegio que promociona ello.jpeg", caption: "Logotipo del colegio" },
  { src: "assets/imagenes/Lugar de museo ecologico 1.jpeg", caption: "Cconocc y su paisaje ancestral" },
  { src: "assets/imagenes/Lugar de museo ecoligico 2.jpeg", caption: "Vistas del entorno de la Ciudad Perdida" },
  { src: "assets/imagenes/Mapa Pólitico del Lugar turistico Tayacaja.jpeg", caption: "Mapa de la zona turística — Cconocc, Ahuaycha" },
];

const TRAIL = [
  { alt: "01", name: "Punto de partida", desc: "El centro poblado de Cconocc, donde comienza el ascenso hacia la Ciudad Perdida.", gain: "Inicio" },
  { alt: "02", name: "Muros ancestrales", desc: "Las ruinas de piedra que la tradición atribuye a los incas.", gain: "+1 km" },
  { alt: "03", name: "Vista panorámica", desc: "Valles y montañas majestuosas que abrazan el sitio desde la altura.", gain: "+2 km" },
  { alt: "04", name: "La leyenda", desc: "El lugar donde, según se cuenta, resuena la campana de oro a la medianoche.", gain: "+3 km" },
];

const CALENDAR = [
  { m: "Ene", t: "16°C", n: "Lluvias suaves, campos verdes." },
  { m: "Feb", t: "15°C", n: "Carnaval andino en la plaza." },
  { m: "Mar", t: "15°C", n: "Tiempo de cosecha y ferias locales." },
  { m: "Abr", t: "14°C", n: "Cielos despejados, ideal para caminatas." },
  { m: "May", t: "12°C", n: "Empieza la temporada seca." },
  { m: "Jun", t: "9°C",  n: "Noches frías, festival del sol." },
  { m: "Jul",  t: "8°C",  n: "Mes más frío; cielos nítidos de noche." },
  { m: "Ago",  t: "10°C", n: "Vientos fuertes en la altura." },
  { m: "Sep",  t: "12°C", n: "Siembra; provincia tranquila." },
  { m: "Oct",  t: "14°C", n: "Primeras lluvias, buen momento para fotos." },
  { m: "Nov",  t: "15°C", n: "Fiestas patronales de la provincia." },
  { m: "Dic",  t: "16°C", n: "Cierre de año, ferias artesanales." },
];

/* ======================================================================= */

function renderGallery(){
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY.map(item => `
    <figure aria-label="Imagen pendiente">
      <span class="gallery-grid__blank">Imagen</span>
    </figure>
  `).join("");
}

function renderTrail(){
  const list = document.getElementById("trailList");
  list.innerHTML = TRAIL.map(p => `
    <div class="trail__point">
      <span class="trail__alt">${p.alt}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="trail__meters">${p.gain} del recorrido</span>
    </div>
  `).join("");
}

function renderCalendar(){
  const strip = document.getElementById("calendarStrip");
  strip.innerHTML = CALENDAR.map(c => `
    <div class="month">
      <div class="month__name">${c.m}</div>
      <div class="month__temp">${c.t}</div>
      <div class="month__note">${c.n}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderTrail();
  renderCalendar();
});

// Menú móvil simple
document.getElementById("menuBtn")?.addEventListener("click", () => {
  const nav = document.querySelector(".topbar__nav");
  const visible = nav.style.display === "flex";
  nav.style.cssText = visible
    ? "display:none;"
    : "display:flex; position:fixed; top:4.2rem; right:1rem; flex-direction:column; background:#14213D; padding:1rem 1.5rem; border-radius:6px; gap:1rem;";
});