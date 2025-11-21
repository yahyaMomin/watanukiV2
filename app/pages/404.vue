<script setup>
import { headers } from '~/config/headers'

useHead({
  ...headers,
  title: '404 Page Not Found',
})
</script>

<template>
  <div class="container">
    <h1>page not found</h1>
    <NuxtImg
      src="/images/404.png"
      alt="404"
      format="webp"
    />
  </div>
</template>
