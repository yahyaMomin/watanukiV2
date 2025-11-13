<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="related">
    <AnimeCard
      :data="data"
      title="Related"
    />
  </div>
</template>
