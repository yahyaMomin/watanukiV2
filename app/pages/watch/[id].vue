<script setup>
import config from '~/config/config'
import { headers } from '~/config/headers'

const route = useRoute()
const router = useRouter()
const layout = ref('row')

const id = computed(() => route.params.id)
const ep = computed(() => route.query.ep)

const titleArr = computed(() => id.value.split('-'))
const title = computed(() => titleArr.value.slice(0, titleArr.value.length - 1).join(' '))

useHead({
  ...headers,
  title: `Watch | ${title.value}`,
})

const { data, pending, error } = await useFetch(`/api/episodes/${id.value}`)
const episodes = computed(() => data.value?.data || [])

const updateParams = (newEp) => {
  router.replace({ query: { ...route.query, ep: newEp } })
}

onMounted(() => {
  if (!ep.value && episodes.value.length > 0) {
    const firstEp = episodes.value[0].id.split('ep=').pop()
    updateParams(firstEp)
  }
})
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const currentEp = computed(() => {
  if (!ep.value || !episodes.value?.length) return null
  return episodes.value.find(e => e.id.split('ep=').pop() === ep.value)
})

const changeEpisode = (action) => {
  const idx = currentEp.value?.episodeNumber - 1
  if (action === 'next') {
    const next = episodes.value[idx + 1]
    if (next) updateParams(next.id.split('ep=').pop())
  }
  else {
    const prev = episodes.value[idx - 1]
    if (prev) updateParams(prev.id.split('ep=').pop())
  }
}

const hasNextEp = computed(() => {
  const idx = currentEp.value?.episodeNumber - 1
  return Boolean(episodes.value[idx + 1])
})
const hasPrevEp = computed(() => {
  const idx = currentEp.value?.episodeNumber - 1
  return Boolean(episodes.value[idx - 1])
})
</script>

<template>
  <div v-if="pending">
    <Loader />
  </div>
  <div
    v-else
    class="bg-backGround pt-14 max-w-screen-xl mx-auto py-2 md:px-2"
  >
    <div class="flex flex-col gap-2">
      <div class="path flex mb-2 mx-2 items-center gap-2 text-base">
        <NuxtLink :to="config.siteRoutes.home">
          <h4 class="hover:text-primary">home</h4>
        </NuxtLink>
        <span class="h-1 w-1 rounded-full bg-primary" />
        <NuxtLink :to="config.siteRoutes.detail + id">
          <h4 class="hover:text-primary">{{ id.replaceAll("-", " ") }}</h4>
        </NuxtLink>
        <span class="h-1 w-1 rounded-full bg-primary" />
        <h4 class="gray">
          episode {{ currentEp?.episodeNumber }}
        </h4>
      </div>

      <Player
        v-if="ep && id && currentEp"
        :id="id"
        :episode-id="`${id}?ep=${ep}`"
        :current-ep="currentEp"
        :change-episode="changeEpisode"
        :has-next-ep="hasNextEp"
        :has-prev-ep="hasPrevEp"
      />

      <div class="input w-full mt-2 flex items-end justify-end gap-3 text-end">
        <div class="btns bg-btnbg flex mx-2 rounded-child">
          <button
            class="row item p-2"
            :class="{ 'bg-primary text-black': layout === 'row' }"
            @click="layout = 'row'"
          >
            <Icon
              name="fa7-solid:align-justify"
              class="rotate-90"
            />
          </button>
          <button
            class="column item p-2"
            :class="{ 'bg-primary text-black': layout === 'column' }"
            @click="layout = 'column'"
          >
            <Icon
              name="fa7-solid:align-justify"
            />
          </button>
        </div>
      </div>

      <ul
        v-if="episodes.length > 0 && currentEp"
        class="episodes max-h-[50vh] py-4 px-2 overflow-scroll bg-lightbg grid gap-1 md:gap-2"
        :class="layout === 'row'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-5 md:grid-cols-10'"
      >
        <Episode
          v-for="episode in episodes"
          :key="episode.id"
          :episode="episode"
          :current-ep="currentEp"
          :layout="layout"
        />
      </ul>
    </div>
  </div>
</template>

<style>
.episodes {
  scrollbar-width: none;
}
</style>
