# Tarea 5 - Blog con comentarios (Utterances)

**Sitio publicado:** https://tarea5-arqui.netlify.app/blog/  

**Repositorio de comentarios:** https://github.com/Mathew-ca/arquitectura-comentarios 

## Descripción

Blog de arquitectura de software hecho con Nuxt 4 y Nuxt Content (Tutorial 2), con seis
artículos. Se agregó el componente `app/components/CommentsUtterances.vue`, que se usa en
`app/pages/blog/[...slug].vue`, por lo que **todas** las entradas muestran comentarios.
Cada artículo tiene su propio hilo porque `issue-term` es `pathname`.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Generar sitio estático

```bash
npm run generate
```

El resultado queda en `.output/public` (configurado en `netlify.toml`).

## Configuración pendiente

En `app/pages/blog/[...slug].vue` cambie la constante `commentsRepo` por su repositorio.
