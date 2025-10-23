<script setup>
const { data, error, status } = await useFetch('/api/home')

if (error.value) navigateTo('/404')
</script>

<template>
  <main class="bg-background">
    <HeroBanner :spotlight="data?.data.spotlight" />
    <Trending :trending="data?.data.trending" />
  </main>
</template>

<style>
html {
  background-color: var(--background);
}
</style>
