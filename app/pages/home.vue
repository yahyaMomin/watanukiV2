<script setup>
const { data, error } = await useFetch('/api/home')

if (error.value) navigateTo('/404')
const result = data?.value?.data
const { spotlight, trending, topAiring, mostPopular, mostFavorite, latestCompleted, latestEpisode, newAdded, topUpcoming, top10 } = result

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
    <HeroBanner
      :spotlight="spotlight"
    />
    <div class="max-w-[1800px] mx-auto px-2">
      <Trending :trending="trending" />
      <section class="grid grid-cols-12 gap-4 my-5">
        <AnimeCard
          :data="topAiring"
          title="Top Airing"
          path="top-airing"
        />
        <AnimeCard
          :data="mostPopular"
          title="Most Popular"
          path="most-popular"
        />
        <AnimeCard
          :data="mostFavorite"
          title="Most Favorite"
          path="most-favorite"
        />
        <AnimeCard
          :data="latestCompleted"
          title="Completed"
          path="completed"
        />
      </section>
      <section class="row grid gap-2 justify-center grid-cols-12">
        <div class="left col-span-12 xl:col-span-9">
          <AnimeList
            title="Latest Episode"
            path="recently-updated"
            :data="latestEpisode"
          />
          <AnimeList
            title="New Added"
            path="recently-added"
            :data="newAdded"
          />
          <AnimeList
            title="Top Upcoming"
            path="top-upcoming"
            :data="topUpcoming"
          />
        </div>
        <div class="right col-span-12 xl:col-span-3 space-y-4">
            <h1 class="heading">
              Genres
            </h1>
            <div class="sm:bg-lightbg bg-none rounded-sm px-2 py-1">
              <Genres class="sm:w-1/3 px-2 rounded-sm py-1 mb-2 line-clamp-1 bg-lightbg sm:bg-transparent mx-1 sm:mx-0 text-center" />
            </div>
          <TopTen :data="top10" />
        </div>
      </section>
    </div>
  </main>
</template>

<style>
html {
  background-color: var(--background);
}
</style>
