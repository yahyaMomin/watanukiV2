<script setup>
const props = defineProps({
  trending: Object,
})

const containerRef = ref(null)
const slides = ref(props.trending)

useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    0: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1320: { slidesPerView: 6 },
  },
})
</script>

<template>
  <ClientOnly>
    <div
      id="trending"
    >
      <h1 class="heading tracking-wide my-2 ml-4">
        Trending
      </h1>
      <swiper-container
        ref="containerRef"
        class="flex justify-center items-center"
      >
        <swiper-slide
          v-for="(item, idx) in slides"
          :key="idx"
          class="text-center"
        >
          <div class="item flex flex-col items-center overflow-hidden px-1 md:px-2 justify-between">
            <NuxtLink
              :to="`/anime/${item.id}`"
              class="poster w-full h-0 pb-[150%] bg-lightbg relative overflow-hidden"
            >
              <Image
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                :src="item.poster"
                :alt="item.title"
              />
              <div class="rank p-1 text-sm md:text-base md:p-2  absolute top-0 bg-white text-center text-black">
                0{{ item.rank }}
              </div>
            </NuxtLink>
            <h2
              :title="item.title"
              class="title cursor-default text-sm font-semibold text-center truncate w-full"
            >
              {{ item.title }}
            </h2>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>

<style>
</style>
