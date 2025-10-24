<script setup>
const isLoading = ref(false)

const { data, error, status } = await useFetch('/api/home', {
  onResponse() {
    isLoading.value = false
  }, onRequestError() {
    isLoading.value = false
  },
})

if (error.value) navigateTo('/404')

useHead({
  title: 'watanuki | Watch Free Anime, Online Anime Streaming - watanuki',
  meta: [
    { name: 'description', content: 'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.' },
    { name: 'keywords', content: 'watanuki, watanuki to, watch anime online, free anime streaming, zoro anime, aniwatch, 9anime, anime dub sub hd, hianime' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'watanuki' },
    { property: 'og:title', content: 'watanuki | Watch Free Anime Online in HD' },
    { property: 'og:description', content: 'Watch free anime online with DUB & SUB in HD. No ads, fast streaming.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://watanuki.shop' },
    { property: 'og:image', content: 'https://watanuki.shop/og-image.jpg' },
    { name: 'twitter:card', content: 'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.' },
    { name: 'twitter:title', content: 'watanuki | Free Anime Streaming' },
    { name: 'twitter:description', content: 'Stream anime free online, HD quality, no ads.' },
    { name: 'twitter:image', content: 'https://watanuki.shop/og-image.jpg' },
  ],
})
</script>

<template>
  <main class="bg-background">
    <div
      v-if="isLoading"
      class="flex items-center justify-center h-screen"
    >
      <div class="loader">
        loading....
      </div>
    </div>
    <div v-else>
      <HeroBanner :spotlight="data?.data.spotlight" />
      <div class="max-w-[1800px] mx-auto px-2">
        <Trending :trending="data?.data.trending" />
        <div class="grid mx-2 grid-cols-12 gap-4 my-5">
          <AnimeCard
            :data="data?.data.topAiring"
            title="Top Airing"
            path="top-airing"
          />
          <AnimeCard
            :data="data?.data.mostPopular"
            title="Most Popular"
            path="most-popular"
          />
          <AnimeCard
            :data="data?.data.mostFavorite"
            title="Most Favorite"
            path="most-favorite"
          />
          <AnimeCard
            :data="data?.data.latestCompleted"
            title="Completed"
            path="completed"
          />
        </div>
        <div className="row grid my-10 gap-2 justify-center grid-cols-12 sm:mx-2">
          <div className="left col-span-12 xl:col-span-9">
            <AnimeList
              title="Latest Episode"
              path="recently-updated"
              :data="data?.data.latestEpisode"
            />
            <AnimeList
              title="New Added"
              path="recently-added"
              :data="data?.data.newAdded"
            />
            <AnimeList
              title="Top Upcoming"
              path="top-upcoming"
              :data="data?.data.topUpcoming"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
html {
  background-color: var(--background);
}
</style>
