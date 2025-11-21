<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <AnimeCard :data="data" title="Related Animes" />
</template>
