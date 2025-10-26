<script setup>
defineProps({
  episodes: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ul class="rounded-child flex flex-wrap font-extrabold">
    <li
      v-if="episodes.rating"
      class="item bg-white text-sm px-2 text-black"
    >
      <span class="text-sm font-extrabold">{{ episodes.rating }}</span>
    </li>

    <li class="item bg-yellow text-sm px-1 text-black">
      <Icon name="fa7-solid:closed-captioning" />
      <span class="text-sm font-bold">{{ episodes.sub }}</span>
    </li>

    <li class="item bg-purple px-1 text-[12px] text-black">
      <Icon name="fa7-solid:microphone" />
      <span class="text-sm font-bold">{{ episodes.dub }}</span>
    </li>

    <li class="item px-1 text-black text-sm bg-pink">
      {{ episodes.eps }}
    </li>
  </ul>
</template>
