<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <AnimeList
    :data="data"
    title="recommended"
  />
</template>
