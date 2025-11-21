<script setup>
import { headers } from '~/config/headers'

useHead(headers)

const spotlight = ref([])
const trending = ref([])
const topAiring = ref([])
const mostPopular = ref([])
const mostFavorite = ref([])
const latestCompleted = ref([])
const latestEpisode = ref([])
const newAdded = ref([])
const topUpcoming = ref([])
const top10 = ref([])

const { data, error, status } = await useFetch('/api/home', {
  lazy: true,
})

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  })
}

watchEffect(() => {
  if (data.value?.data) {
    const result = data.value.data
    spotlight.value = result.spotlight
    trending.value = result.trending
    topAiring.value = result.topAiring
    mostPopular.value = result.mostPopular
    mostFavorite.value = result.mostFavorite
    latestCompleted.value = result.latestCompleted
    latestEpisode.value = result.latestEpisode
    newAdded.value = result.newAdded
    topUpcoming.value = result.topUpcoming
    top10.value = result.top10
  }
})
</script>

<template>
  <main class="bg-background">
    <div v-if="status === 'pending'">
      <Loader class="h-[calc(100dvh-350px)]" />
    </div>
    <div v-else>
      <HeroBanner
        :spotlight="spotlight"
      />
      <div class="max-w-[1800px] mx-auto px-2">
        <Trending :trending="trending" />
        <section class="grid grid-cols-12 gap-2 my-5">
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
            <div class="genre">
              <h1 class="heading">
                Genres
              </h1>
              <div class="sm:bg-lightbg bg-none rounded-sm px-2 py-1">
                <Genres class="sm:w-1/3 px-2 rounded-sm py-1 mb-2 line-clamp-1 bg-lightbg sm:bg-transparent mx-1 sm:mx-0 text-center" />
              </div>
            </div>
            <div class="top10">
              <TopTen :data="top10" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style>
html {
  background-color: var(--background);
}
</style>
