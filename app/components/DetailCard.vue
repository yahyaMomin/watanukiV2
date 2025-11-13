<script setup>
const props = defineProps({
  data: { type: Object, required: true },
})

const showFull = ref(false)
const colors = [
  '#d0e6a5',
  '#ffbade',
  '#fc887b',
  '#ccabda',
  '#abccd8',
  '#d8b2ab',
  '#86e3ce',
]
</script>

<template>
  <div class="banner min-h-[700px] relative w-full bg-[#262525] pt-10">
    <div class="backdrop-img bg-backGround w-full h-full absolute top-0 left-0 overflow-hidden opacity-[.1]">
      <Image
        :src="data.poster"
        :alt="data.title"
        class="object-cover object-center h-full w-full"
      />
    </div>
    <div class="opacity-overlay" />

    <div class="content max-w-screen-xl w-full mx-auto flex flex-col items-start md:flex-row gap-2 mb-2 relative px-2">
      <div class="left w-full md:w-96 flex justify-center">
        <div
          class="posterImg px-5 md:w-full cursor-pointer"
          @click="showBigPoster(data.poster)"
        >
          <Image
            :src="data.poster"
            :alt="data.title"
            class="rounded-md h-full w-full"
          />
        </div>
      </div>

      <div class="right mt-3 w-full flex flex-col gap-2">
        <div class="path hidden md:flex items-center gap-2 text-base">
          <NuxtLink to="/home"><h4>home</h4></NuxtLink>
          <span class="h-1 w-1 rounded-full bg-primary" />
          <NuxtLink :to="`/animes/${data.type.toLowerCase()}`">
            <h4 class="hover:text-primary">{{ data.type }}</h4>
          </NuxtLink>
          <span class="h-1 w-1 rounded-full bg-primary" />
          <h4 class="gray">
            {{ data.title }}
          </h4>
        </div>

        <h1 class="title text-lg md:text-4xl font-extrabold">
          {{ data.title }}
        </h1>
        <div class="alternative gray text-lg font-bold">
          {{ data.alternativeTitle }}
        </div>
        <div class="alternative gray text-lg font-bold">
          {{ data.japanese }}
        </div>

        <div class="sounds flex items-center gap-2 my-2">
          <SoundsInfo :episodes="{ rating: data.rating, ...data.episodes }" />
          <span class="h-1 w-1 rounded-full bg-primary" />
          <span class="type text-[#ccc] text-sm font-bold">{{ data.type }}</span>
          <span class="h-1 w-1 rounded-full bg-primary" />
          <span class="duration text-[#ccc] text-sm font-bold">{{ data.duration }}</span>
        </div>

        <div class="text-primary flex items-center gap-1 text-lg">
          <!-- <CircleRatting :rating="data.MAL_score" /> -->
          <Icon name="fa7-solid:star" />
          <p>{{ data.MAL_score }}</p>
        </div>

        <div
          v-if="data.id"
          class="watch-btn my-4"
        >
          <NuxtLink :to="`/watch/${data.id}`">
            <button
              class="flex justify-center items-center gap-2 py-1 rounded-3xl text-lg text-black bg-primary w-1/2"
            >
              <Icon name="fa7-solid:circle-play" />
              <span>Watch Now</span>
            </button>
          </NuxtLink>
        </div>

        <div class="genres rounded-child flex flex-wrap">
          <NuxtLink
            v-for="(genre, index) in data.genres"
            :key="genre"
            :to="`/animes/genre/${genre.toLowerCase()}`"
          >
            <p
              :style="{ background: colors[index % colors.length] }"
              class="px-2 border border-black text-black py-0.5 rounded-none"
            >
              {{ genre }}
            </p>
          </NuxtLink>
        </div>

        <div
          v-if="data.synopsis"
          class="overview"
        >
          <p
            :class="[
              showFull ? 'line-clamp-none' : 'line-clamp-3',
              'text-balance text-gray-300',
            ]"
          >
            {{ data.synopsis }}
          </p>
          <span
            class="text-sm cursor-pointer font-extrabold"
            @click="showFull = !showFull"
          >
            {{ showFull ? ' - LESS' : ' - MORE' }}
          </span>
        </div>

        <div class="lightBorder" />

        <div class="infor flex-col sm:flex-row flex gap-5">
          <div class="flex gap-1 status">
            <p class="font-extrabold">
              status :
            </p>
            <span class="text-lighttext">{{ data.status }}</span>
          </div>

          <div class="flex gap-1 aired">
            <p class="font-extrabold">
              Aired :
            </p>
            <div class="text-lighttext flex items-center gap-2">
              <span>{{ data.aired.from }}</span>
              <template v-if="data.aired.to">
                <span><Icon name="fa7-solid:arrow-right" /></span>
                <span>{{ data.aired.to }}</span>
              </template>
            </div>
          </div>
        </div>

        <div class="lightBorder" />

        <template v-if="data.studios">
          <div class="studio">
            <span>Studio : </span>
            <NuxtLink
              :to="`/producer/${data.studios.toLowerCase().replace(' ', '-')}`"
            >
              <span class="text-primary">{{ data.studios }}</span>
            </NuxtLink>
          </div>
          <div class="lightBorder" />
        </template>

        <div
          v-if="data.producers.length > 0"
          class="studio"
        >
          <h4 class="text-center mb-2">
            Producers
          </h4>
          <ul
            class="flex flex-wrap gap-2"
          >
            <NuxtLink
              v-for="(producer, index) in data.producers"
              :key="producer"
              :to="`/producer/${producer}`"
              class="hover:opacity-[0.7]"
            >
              <li :style="{ color: colors[index % colors.length] }">
                {{ producer }}
              </li>
            </NuxtLink>
          </ul>
        </div>

        <div class="lightBorder" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.opacity-overlay {
  height: 250px;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(4, 21, 45, 0) 0%,
    var(--background) 79.17%
  );
  position: absolute;
  bottom: 0;
}
.lightBorder {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 10px 0;
}
.gray {
  color: #afafaf;
}
</style>
