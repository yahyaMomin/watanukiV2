<script setup>
const route = useRoute()
const id = computed(() => route.params.id || null)

const titleArr = id.value.split('-')
const title = titleArr.slice(0, titleArr.length - 1).join(' ')

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
useHead({
  title: `Anime | ${title}`,
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

const { data, status, error } = await useFetch(`/api/anime/${id.value}`, { lazy: true })

if (error.value) throw createError({
  statusCode: error.value.status,
  statusMessage: error.value.statusMessage,
})

const response = computed(() => data.value?.data)
</script>

<template>
  <main>
    <div
      v-if="status === 'pending'"
    >
      <loader />
    </div>
    <section
      v-else
      class="page-layout"
    >
      <detail-card :data="response" />
      <div class="row grid items-start gap-3 px-2 grid-cols-12">
        <div class="left col-span-12 xl:col-span-9">
          <MoreSeasons
            v-if="response.moreSeasons.length > 0"
            :data="response.moreSeasons"
          />
          <VoiceActors
            :id="id"
            @toggle-modal="toggleModal"
          />
          <Recommendation :data="response.recommended" />
        </div>
        <div class="right col-span-12 xl:col-span-3">
          <Related
            v-if="response.related"
            :data="response.related"
          />
          <MostPopular :data="response.mostPopular" />
        </div>
      </div>
    </section>

    <!-- dialog -->
    <Modal
      v-if="showModal"
      :id="id"
      @toggle-modal="toggleModal"
    />
  </main>
</template>
