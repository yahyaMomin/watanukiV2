<script setup>
import config from '~/config/config'

const props = defineProps({
  spotlight: Object,
})

const containerRef = ref(null)
const slides = ref(props.spotlight)

useSwiper(containerRef, {
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 4000,
  },
})
</script>

<template>
  <ClientOnly>
    <section>
      <swiper-container
        ref="containerRef"
        :init="false"
      >
        <swiper-slide
          v-for="item in slides"
          :key="item.id"
          class="relative overflow-hidden bg-backGround h-[40vh] md:h-[50vh] xl:h-[calc(100vh-300px)]"
        >
          <div
            class="opacity-layer absolute left-0 md:left-[15%] xl:left-[30%] top-0 right-0 bottom-0 overflow-hidden"
          >
            <Image
              class="h-full w-full object-cover object-center"
              :alt="item.title"
              :src="item.poster"
            />
          </div>
          <div
            class="z-10 ml-2 md:ml-12 min-w-32 md:max-w-2xl absolute bottom-10"
          >
            <h2 class="text-primary mb-2">
              #{{ item.rank }} Spotlight
            </h2>

            <h1
              class="title text-lg md:text-2xl xl:text-5xl font-bold mb-6 line-clamp-2"
              :title="item.title"
            >
              {{ item.title }}
            </h1>

            <ul class="text-base text-white mb-3 gap-5 hidden md:flex">
              <li class="item">
                <Icon name="fa7-solid:circle-play" />
                <span>{{ item.type }}</span>
              </li>
              <li class="item">
                <Icon name="fa7-solid:clock" />
                <span>{{ item.duration }}</span>
              </li>
              <li class="item">
                <Icon name="fa7-solid:calendar-day" />
                <span>{{ item.aired }}</span>
              </li>
              <li
                class="item bg-primary text-black text-sm font-bold px-2 rounded-lg"
              >
                <span>{{ item.quality }}</span>
              </li>
              <li class="item">
                <SoundsInfo :episodes="item.episodes" />
              </li>
            </ul>

            <p class="synopsis">
              {{ item.synopsis }}
            </p>

            <div class="z-50 text-sm md:text-base mt-5 flex gap-2">
              <NuxtLink
                :to="config.siteRoutes.watch + item.id"
              >
                <button class="bg-primary rounded-3xl px-4 py-1 text-black flex justify-center items-center gap-2">
                  <Icon name="fa7-solid:circle-play" />
                  <span>Watch Now</span>
                </button>
              </NuxtLink>

              <NuxtLink
                :to="config.siteRoutes.detail + item.id"
              >
                <button
                  class="bg-btnbg rounded-3xl px-4 py-1 flex justify-center items-center gap-2"
                >
                  <span>Detail</span>
                  <Icon name="fa7-solid:angle-right" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  </ClientOnly>
</template>

<style>
.opacity-layer {
  mask-image: linear-gradient(
      to right,
      transparent 0,
      var(--background) 30%,
      var(--background) 70%,
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent 0,
      var(--background) 30%,
      var(--background) 70%,
      transparent
    );
  mask-composite: intersect; /* Combines the masks (for non-WebKit browsers) */
  mask-size: 100% 100%, 100% 100%; /* Set size for both masks */
  mask-repeat: no-repeat, no-repeat; /* Avoid repeating */
  -webkit-mask-image: linear-gradient(
      to right,
      transparent 0,
      var(--background) 30%,
      var(--background) 70%,
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent 0,
      var(--background) 30%,
      var(--background) 70%,
      transparent
    );
  -webkit-mask-size: 100% 100%, 100% 100%;
  -webkit-mask-repeat: no-repeat, no-repeat;
}
.synopsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2; /* Number of lines to display */
  line-clamp: 2;
  text-overflow: ellipsis;
}
@media screen and (max-width: 1299px) {
  .synopsis {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
}
@media screen and (max-width: 768px) {
  .synopsis {
    display: none;
  }
}
</style>
