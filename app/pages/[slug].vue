<script setup>
import { headers } from '~/config/headers'
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

useHead({ ...headers, title: `Discover ${pageTitle} Anime` })
</script>

<template>
  <main>
    <ListpageMapper
      :api-path="`animes/${pathname}`"
      :title="`${pageTitle} Anime`"
    />
  </main>
</template>
