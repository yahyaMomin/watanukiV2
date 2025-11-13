<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex gap-5 mt-5 flex-wrap">
    <NuxtLink
      v-for="item in data"
      :key="item.id"
      :to="`/anime/${item.id}`"
      class="w-[calc(50%-1rem)] sm:w-[calc(180px-1rem)] md:w-[calc(20.66%-1rem)] h-16"
    >
      <div
        :class="[
          'relative overflow-hidden px-1 rounded-md w-full h-full flex justify-center items-center',
          item.isActive
            ? 'text-primary border border-primary'
            : 'text-white border-none',
        ]"
      >
        <h1 class="z-[9] text-inherit text-center relative line-clamp-2 text-sm font-normal">
          {{ item.alternativeTitle }}
        </h1>
        <div
          class="absolute opacity-30 blur-sm z-[8] -inset-3 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${item.poster})` }"
        />
      </div>
    </NuxtLink>
  </div>
</template>
