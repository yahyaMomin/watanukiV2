<script setup>
import { headers } from '~/config/headers'

const route = useRoute()

const slug = computed(() => route.params.slug || null)

useHead({
  ...headers,
  title: `Discover ${slug.value} Anime`,
})
</script>

<template>
  <main>
    <ListpageMapper
      :api-path="`animes/genre/${slug}`"
      :title="`${slug} Anime`"
    />
  </main>
</template>
