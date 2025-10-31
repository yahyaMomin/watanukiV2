<script setup>
const route = useRoute()

const slug = computed(() => route.params.slug || null)
</script>

<template>
  <div class="genre">
    <listpage-mapper
      :path="`genre/${slug}`"
      :title="`${slug} Animes`"
    />
  </div>
</template>
