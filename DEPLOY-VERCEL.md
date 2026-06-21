# Cómo subir a Vercel

## Opción recomendada: con GitHub

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a `https://vercel.com`.
3. Inicia sesión.
4. Haz clic en `Add New...` > `Project`.
5. Importa tu repositorio.
6. En `Environment Variables`, agrega:

```text
NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app
```

7. Haz clic en `Deploy`.

## Opción con Vercel CLI

1. Abre una terminal en esta carpeta.
2. Ejecuta:

```bash
npm i -g vercel
vercel
```

3. Inicia sesión cuando te lo pida.
4. Responde las preguntas del asistente.
5. Cuando termine, Vercel te dará una URL pública.

## Después del despliegue

1. Abre:

```text
https://tu-proyecto.vercel.app/
https://tu-proyecto.vercel.app/sitemap.xml
https://tu-proyecto.vercel.app/robots.txt
```

2. Luego prueba esa URL en:
   - Google Search Console
   - Meta Tags Checker

## Nota

Si defines `NEXT_PUBLIC_SITE_URL`, los meta tags, el sitemap y `robots.txt`
usarán esa URL pública. Si no la defines, en Vercel se intentará usar
automáticamente `VERCEL_URL`.
