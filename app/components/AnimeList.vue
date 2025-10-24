<script setup lang="ts">
interface AnimeItem {
  id: string | number
  title: string
  poster: string
  episodes?: {
    sub: string
    dub: string
    eps: string
  }
  type?: string
  duration?: string
}

const props = defineProps<{
  title: string
  path: string
  data: AnimeItem[]
}>()
</script>

<template>
  <div class="pb-5">
    <!-- Header -->
    <div class="flex justify-between items-center mb-3">
      <h1 class="heading">
        {{ title }}
      </h1>
      <NuxtLink
        :to="`/animes/${path}`"
        class="flex items-center gap-1 text-sm text-neutral-400 hover:text-primary mr-4"
      >
        <span>View more</span>
        <Icon name="fa7-solid:angle-right" />
      </NuxtLink>
    </div>

    <!-- Data Grid -->
    <div class="flex flex-wrap justify-around w-full">
      <template v-if="data?.length">
        <NuxtLink
          v-for="item in data"
          :key="item.id"
          :to="`/anime/${item.id}`"
          class="flw-item bg-lightbg block rounded-sm overflow-hidden"
        >
          <!-- Poster -->
          <div
            class="film-poster relative w-full pb-[140%] mb-2 bg-neutral-700 transition-all md:hover:opacity-70"
          >
            <div class="absolute bottom-0 left-0 z-40 opacity-90">
              <SoundsInfo :episodes="item.episodes" />
            </div>
            <Image
              class="absolute inset-0 object-cover object-center w-full h-full"
              :src="item.poster"
              :alt="item.title"
            />
          </div>

          <!-- Title -->
          <h1
            :title="item.title"
            class="title line-clamp-1 text-sm md:text-base hover:text-primary"
          >
            {{ item.title }}
          </h1>

          <!-- Type and Duration -->
          <div
            v-if="item.type"
            class="type flex items-center gap-3 text-sm text-neutral-400"
          >
            <h4>{{ item.type }}</h4>
            <div class="h-1 w-1 bg-primary rounded-full" />
            <h4>{{ item.duration }}</h4>
          </div>
        </NuxtLink>
      </template>

      <div
        v-else
        class="text-neutral-400 text-center py-10 w-full"
      >
        No results found.
      </div>
    </div>
  </div>
</template>

<style scoped>
.flw-item {
  width: calc(16.66% - 0.5rem);
  margin: 0.7rem 0;
  position: relative;
}

@media (max-width: 1400px) {
  .flw-item {
    width: calc(25% - 0.5rem);
  }
}
@media (max-width: 759px) {
  .flw-item {
    width: calc(33.33% - 0.5rem);
  }
}
@media (max-width: 479px) {
  .flw-item {
    width: calc(50% - 0.5rem);
  }
}
</style>
