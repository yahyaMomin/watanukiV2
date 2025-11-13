<script setup>
const props = defineProps({
  episode: { type: Object, required: true },
  currentEp: { type: Object, required: true },
  layout: { type: String, required: true },
})

const isCurrent = computed(() => props.episode.id === props.currentEp.id)

const episodeLink = computed(() =>
  `/watch/${props.episode.id.replaceAll('::', '?')}`,
)
</script>

<template>
  <li
    v-if="layout === 'row'"
    :title="episode.title"
    class="w-full px-2 py-3 text-black"
    :class="{
      'bg-primary': isCurrent,
      'bg-red-500': !isCurrent && episode.isFiller,
      'bg-btnbg': !isCurrent && !episode.isFiller,
    }"
  >
    <NuxtLink
      :to="episodeLink"
      class="block w-full"
    >
      <div class="flex gap-3 items-center">
        <button
          class="text-sm"
          :class="isCurrent ? 'text-black' : 'text-primary'"
        >
          {{ episode.episodeNumber }}
        </button>
        <li
          class="flex-1 text-sm truncate"
          :class="isCurrent ? 'text-black' : 'text-white'"
        >
          {{ episode.title }}
        </li>
        <span
          v-if="episode.isFiller"
          title="Filler"
        >👻</span>
      </div>
    </NuxtLink>
  </li>

  <li
    v-else
    :title="episode.title"
    class="w-full rounded-sm py-1"
    :class="{
      'bg-primary': isCurrent,
      'bg-red-500': !isCurrent && episode.isFiller,
      'bg-btnbg': !isCurrent && !episode.isFiller,
    }"
  >
    <NuxtLink
      :to="episodeLink"
      class="block w-full"
    >
      <p
        class="text-sm md:text-base text-center"
        :class="isCurrent ? 'text-black' : 'text-white'"
      >
        {{ episode.episodeNumber }}
      </p>
    </NuxtLink>
  </li>
</template>
