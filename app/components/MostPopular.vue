<script
 setup
>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <AnimeCard
    :data="data"
    title="Most Popular"
    path="most-popular"
  />
</template>
