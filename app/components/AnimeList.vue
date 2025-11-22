<script setup>
import config from '~/config/config';

defineProps({
  title: String,
  path: String,
  data: Array,
  totalResults: Number,
});
</script>

<template>
  <section>
    <div class="flex mt-5 justify-between items-center">
      <h1 v-if="title" class="my-2 heading">
        {{ title }}
      </h1>
      <NuxtLink
        v-if="path"
        :to="config.siteRoutes.discover + path"
        class="flex items-center gap-1 text-sm text-neutral-400 hover:text-primary mr-4"
      >
        <span>View more</span>
        <Icon name="fa7-solid:angle-right" />
      </NuxtLink>
      <h5 v-else class="text-sm md:text-lg">
        {{ totalResults }} Results Found
      </h5>
    </div>
    <div class="flex flex-wrap justify-between w-full">
      <template v-if="data?.length">
        <NuxtLink
          v-for="item in data"
          :key="item.id"
          :to="config.siteRoutes.detail + item.id"
          class="flw-item block rounded-sm overflow-hidden"
        >
          <!-- Poster -->
          <section class="mx-1">
            <div
              class="relative w-full pb-[140%] mb-2 transition-all md:hover:opacity-70"
            >
              <div class="absolute bottom-0 left-0 z-[8] opacity-90">
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
              class="title truncate text-sm md:text-base hover:text-primary px-1"
            >
              {{ item.title }}
            </h1>

            <div
              v-if="item.type"
              class="type flex items-center gap-3 text-sm text-neutral-400"
            >
              <h4>{{ item.type }}</h4>
              <div class="h-1 w-1 bg-primary rounded-full" />
              <h4>{{ item.duration }}</h4>
            </div>
          </section>
        </NuxtLink>
      </template>

      <div v-else class="text-neutral-400 text-center py-10 w-full">
        No results found.
      </div>
    </div>
  </section>
</template>

<style scoped>
.flw-item {
  width: calc(16.66% - 0.5rem);
  margin-bottom: 0.7rem;
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
