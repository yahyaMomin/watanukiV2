<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <AnimeList :data="data" title="Recommended For You" class="mt-5" />
</template>
