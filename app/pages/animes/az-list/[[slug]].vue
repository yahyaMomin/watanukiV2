<script setup>
const route = useRoute()

const slug = computed(() => route.params.slug || null)
</script>

<template>
  <div class="az-list">
    <AZList :selected="slug" />
    <listpage-mapper
      :path="`${slug ? `az-list/${slug}` : 'az-list'}`"
      :title="`${slug ? `${slug}` : 'All'}
      Animes`"
    />
  </div>
</template>
