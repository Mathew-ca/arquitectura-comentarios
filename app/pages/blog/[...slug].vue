<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description
})

const fmt = (d) => new Date(d).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

// CAMBIAR por su repositorio de comentarios
const commentsRepo = 'TU-USUARIO/arquitectura-comentarios'
</script>

<template>
  <article class="post">
    <NuxtLink to="/blog" class="back">← Volver al blog</NuxtLink>
    <img :src="post.image" :alt="post.title" class="post-hero">
    <h1>{{ post.title }}</h1>
    <p class="meta">Por {{ post.author }} — {{ fmt(post.date) }}</p>
    <p class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </p>

    <ContentRenderer :value="post" />

    <section class="comments-section">
      <h2>Comentarios</h2>
      <CommentsUtterances :repo="commentsRepo" />
    </section>
  </article>
</template>
