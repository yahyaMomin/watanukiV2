<script setup>
defineProps({
  title: String,
  data: Array,
  path: String,
})
</script>

<template>
  <div class="col-span-12 md:col-span-6 mt-5 xl:col-span-3">
    <h1 class="mb-2 heading">
      {{ title }}
    </h1>

    <div class="items bg-lightbg rounded-md px-2 py-2 h-auto w-full flex flex-col gap-3">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex border-lightBg pb-3 items-center gap-4"
      >
        <NuxtLink :to="`/anime/${item.id}`">
          <div class="poster bg-white rounded-md flex-shrink-0 relative overflow-hidden w-16 pb-[85px]">
            <Image
              class="h-full absolute w-full object-cover object-center"
              :src="item.poster"
              :alt="item.title"
            /></div>
        </NuxtLink>

        <div class="text">
          <NuxtLink :to="`/anime/${item.id}`">
            <h2 class="title hover:text-primary mb-2 font-bold">
              {{ item.title }}
            </h2>
          </NuxtLink>

          <div class="item flex items-center">
            <SoundsInfo :episodes="item.episodes" />
            <div
              v-if="item.type"
              class="item"
            >
              <span class="block mx-1 h-1 w-1 bg-primary rounded-full" />
              <h2 class="text-[12px] text-[#ccc]">
                {{ item.type }}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="more my-3">
        <NuxtLink
          class="flex hover:text-primary items-center gap-2"
          :to="`/animes/${path}`"
        >
          <span>View More</span>
          <Icon
            name="fa7-solid:angle-right"
            class="text-xl"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
