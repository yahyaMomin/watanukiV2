<script setup>
import { ref } from 'vue'

const props = defineProps({
  episodeId: { type: String, required: true },
  currentEp: { type: Object, required: true },
  changeEpisode: { type: Function, required: true },
  hasNextEp: { type: Boolean, required: true },
  hasPrevEp: { type: Boolean, required: true },
})

const category = ref('sub')
const server = ref('vidWish')

function changeCategory(newType) {
  if (newType !== category.value) category.value = newType
}

function changeServer(newServer) {
  if (newServer !== server.value) server.value = newServer
}

const iframeSrc = computed(() =>
  `https://${server.value === 'vidWish' ? 'vidwish.live' : 'megaplay.buzz'}/stream/s-2/${
    props.episodeId.split('ep=').pop()
  }/${category.value}`,
)
</script>

<template>
  <div class="w-full bg-background aspect-video relative rounded-sm max-w-screen-xl overflow-hidden">
    <iframe
      :src="iframeSrc"
      width="100%"
      height="100%"
      allowfullscreen
    />
  </div>

  <div class="category flex flex-wrap flex-col sm:flex-row items-center justify-center sm:justify-between px-2 md:px-20 gap-3 bg-lightbg py-2">
    <div class="servers flex gap-4">
      <button
        :class="server === 'vidWish' ? 'bg-primary text-black' : 'bg-btnbg text-white'"
        class="px-2 py-1 rounded text-sm font-semibold"
        @click="changeServer('vidWish')"
      >
        vidwish
      </button>
      <button
        :class="server === 'megaPlay' ? 'bg-primary text-black' : 'bg-btnbg text-white'"
        class="px-2 py-1 rounded text-sm font-semibold"
        @click="changeServer('megaPlay')"
      >
        megaplay
      </button>
    </div>

    <div class="flex gap-5">
      <div class="sound flex gap-3">
        <button
          v-for="type in ['sub', 'dub']"
          :key="type"
          :class="category === type ? 'bg-primary text-black' : 'bg-btnbg text-white'"
          class="px-2 py-1 rounded text-sm font-semibold"
          @click="changeCategory(type)"
        >
          {{ type.toUpperCase() }}
        </button>
      </div>

      <div class="btns flex gap-4">
        <button
          v-if="hasPrevEp"
          title="prev"
          class="prev bg-primary px-2 py-1 rounded-md text-black"
          @click="() => changeEpisode('prev')"
        >
          <Icon name="fa7-solid:fast-backward" />
        </button>
        <button
          v-if="hasNextEp"
          title="next"
          class="next bg-primary px-2 py-1 rounded-md text-black"
          @click="() => changeEpisode('next')"
        >
          <Icon name="fa7-solid:fast-forward" />
        </button>
      </div>
    </div>

    <div class="flex flex-col">
      <p class="text-gray-400">
        you are watching Episode {{ currentEp.episodeNumber }}
      </p>
      <p
        v-if="currentEp.isFiller"
        class="text-red-400"
      >
        you are watching filler Episode 👻
      </p>
    </div>
  </div>
</template>
