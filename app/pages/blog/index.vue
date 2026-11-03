<script setup>
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'author', 'date', 'image', 'tags')
    .all()
})

const fmt = (d) => new Date(d).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.path" class="post-card">
        <NuxtLink :to="post.path">
          <img :src="post.image" :alt="post.title" class="post-thumb">
          <div>
            <h2>{{ post.title }}</h2>
            <p class="meta">{{ post.author }} — {{ fmt(post.date) }}</p>
            <p>{{ post.description }}</p>
            <p class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
