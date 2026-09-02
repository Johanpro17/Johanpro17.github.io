# Wayra — sitio turístico

Plantilla lista para personalizar: solo HTML, CSS y JavaScript. No necesitas instalar Node, frameworks ni nada raro.

## Cómo verla en el navegador desde VS Code

1. Abre la carpeta `pueblo-turistico` en VS Code (`File > Open Folder`).
2. Instala la extensión **Live Server** (de Ritwick Dey) desde el panel de Extensiones (ícono de cuadraditos a la izquierda, o `Ctrl+Shift+X`). Busca "Live Server" e instala.
3. Haz clic derecho sobre `index.html` en el explorador de archivos → **"Open with Live Server"**.
4. Se abrirá automáticamente tu navegador en algo como `http://127.0.0.1:5500`. Cualquiera en tu misma red puede entrar usando tu IP local en vez de 127.0.0.1 (ej. `http://192.168.1.10:5500`).
5. Cada vez que guardes un archivo, la página se recarga sola.

Si no quieres instalar la extensión, también funciona haciendo doble clic en `index.html` para abrirlo directo en el navegador — solo que sin autorecarga.

## Cómo añadir tus fotos y videos

- Copia tus imágenes a `assets/images/` y tus videos a `assets/videos/`.
- Abre `script.js` y edita el arreglo `GALLERY` al inicio del archivo: cada línea es una foto (ruta + texto).
- Para el video del hero (fondo de la portada) y el video destacado del mercado, reemplaza los archivos `assets/videos/hero.mp4` y `assets/videos/mercado.mp4` por los tuyos, manteniendo el mismo nombre (o cambia la ruta en `index.html`).
- Formatos recomendados: `.jpg`/`.webp` para fotos, `.mp4` (H.264) para videos, livianos para que carguen rápido.

## Estructura

```
pueblo-turistico/
├── index.html      → estructura y contenido de texto
├── style.css        → todo el diseño visual
├── script.js         → galería, ruta de altitud y calendario (edítalos aquí)
└── assets/
    ├── images/       → tus fotos
    └── videos/       → tus videos
```

## Para publicarla en internet (opcional)

Cuando esté lista, puedes subir la carpeta gratis a **Netlify Drop** (netlify.com/drop, arrastras la carpeta) o **GitHub Pages**, sin necesidad de programar backend.
