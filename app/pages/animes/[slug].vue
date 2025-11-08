<script setup>
import { validQueries } from '~/config/meta'

const route = useRoute()

const pathname = computed(() => route.params.slug)

if (!validQueries.includes(pathname.value)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'invalid query found',
  })
}

const pageTitle = pathname.value.replaceAll('-', ' ')
</script>

<template>
  <div class="genre">
    <listpage-mapper
      :path="`animes/${pathname}`"
      :title="`${pageTitle} Animes`"
    />
  </div>
</template>
