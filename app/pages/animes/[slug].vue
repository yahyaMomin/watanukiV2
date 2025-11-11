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

useHead({
  title: `Discover ${pageTitle} Animes`,
  meta: [
    {
      name: 'description',
      content:
        'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.',
    },
    {
      name: 'keywords',
      content:
        'watanuki, watanuki to, watch anime online, free anime streaming, zoro anime, aniwatch, 9anime, anime dub sub hd, hianime',
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'watanuki' },
    {
      property: 'og:title',
      content: 'watanuki | Watch Free Anime Online in HD',
    },
    {
      property: 'og:description',
      content:
        'Watch free anime online with DUB & SUB in HD. No ads, fast streaming.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://watanuki.shop' },
    { property: 'og:image', content: 'https://watanuki.shop/og-image.jpg' },
    {
      name: 'twitter:card',
      content:
        'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.',
    },
    { name: 'twitter:title', content: 'watanuki | Free Anime Streaming' },
    {
      name: 'twitter:description',
      content: 'Stream anime free online, HD quality, no ads.',
    },
    { name: 'twitter:image', content: 'https://watanuki.shop/og-image.jpg' },
  ],
})
</script>

<template>
  <listpage-mapper
    :path="`animes/${pathname}`"
    :title="`${pageTitle} Animes`"
  />
</template>
