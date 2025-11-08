<script setup>
const route = useRoute()
const keyword = computed(() => route.query.keyword)
</script>

<template>
  <Listpage-mapper
    :path="`search?keyword=${keyword}`"
    :title="`Search Result Of '${keyword}'`"
  />
</template>
