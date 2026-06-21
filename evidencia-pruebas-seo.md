# Evidencia de pruebas SEO

Servidor verificado en:

`http://localhost:3000`

## Paso 1: Meta tags

Meta tags detectados en el `<head>` de la página principal:

```html
<title>Inicio optimizado</title>
<meta name="description" content="Página principal con meta tags dinámicos, sitemap, imágenes optimizadas y lazy loading en Next.js.">
<meta name="keywords" content="Next.js,SEO,optimización web,lazy loading,next/image,meta tags dinámicos">
<link rel="canonical" href="http://localhost:3000">
<meta property="og:title" content="Mi Sitio Optimizado - Home">
<meta property="og:description" content="Página principal con meta tags dinámicos, sitemap, imágenes optimizadas y lazy loading en Next.js.">
<meta property="og:url" content="http://localhost:3000">
<meta property="og:image" content="http://localhost:3000/images/seo-image.jpg">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mi Sitio Optimizado - Home">
<meta name="twitter:description" content="Página principal con meta tags dinámicos, sitemap, imágenes optimizadas y lazy loading en Next.js.">
<meta name="twitter:image" content="http://localhost:3000/images/seo-image.jpg">
```

## Paso 2: Sitemap

Ruta probada:

`http://localhost:3000/sitemap.xml`

URLs detectadas en el XML:

```xml
<loc>http://localhost:3000/</loc>
<loc>http://localhost:3000/blog</loc>
<loc>http://localhost:3000/contacto</loc>
```

## Paso 3: next/image

Solicitud de red detectada para la imagen optimizada:

```text
GET http://localhost:3000/_next/image?url=%2Fimages%2Fseo-image.jpg&w=3840&q=75
```

Eso confirma que `next/image` está optimizando la imagen desde la ruta interna de Next.js.

## Paso 4: Lazy loading

La portada carga el componente `LazyLargeComponent` y muestra el bloque:

`Componente cargado con lazy loading`
