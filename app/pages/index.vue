<script setup lang="ts">
definePageMeta({
  layout: 'root',
})
useHead({
  title: 'watanuki | Watch Free Anime, Online Anime Streaming - watanuki',

  meta: [
    { name: 'description', content: 'watanuki to is a free no ads anime site to watch free anime. Online anime streaming at watanuki with DUB, SUB in HD watanuki.shop, Anix, 9anime, Zoro, Animixplay.' },
    { name: 'keywords', content: 'watanuki, watanuki to, aniwatch, zorox, zoro anime, zoro to, zoroxtv, watch anime online free, free watch anime, anime online to watch' },
  ],

})
const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Movies', path: '/animes/movie' },
  { name: 'TV Series', path: '/animes/tv' },
  { name: 'Most Popular', path: '/animes/most-popular' },
  { name: 'Top Airing', path: '/animes/top-airing' },
]

const topSearches = [
  'One-Punch Man Season 3',
  'One Piece',
  'Demon Slayer: Kimetsu no Yaiba Infinity Castle',
  'One Punch Man',
  'My Hero Academia Final Season',
  'Demon Slayer: Kimetsu no Yaiba',
  'Chainsaw Man the Movie: Reze Arc',
  'One Punch Man 3: Specials',
  'Attack on Titan',
  'My Hero Academia Season 7',
]

const showNav = ref(false)
const inputVal = ref('')
</script>

<template>
  <section class="min-h-screen px-2 md:px-10 max-w-screen-xl mx-auto main">
    <header class="relative">
      <nav class="pt-4 hidden sm:block">
        <ul class="flex justify-center gap-10">
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="hover:text-primary font-bold"
          >
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="block relative pt-4 sm:hidden">
        <button
          class="flex justify-center items-center gap-2  pl-10"
          @click="showNav = !showNav"
        >
          <Icon
            name="fa7-solid:align-justify"
            size="25"
          />
          Menu
        </button>
        <ul
          v-show="showNav"
          class="justify-center items-center flex-col md:gap-10 bg-lightbg absolute top-10 p-3 rounded-md w-full z-10"
        >
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="hover:text-primary py-4 hover:bg-black w-full text-center"
          >
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="logo flex my-5 justify-center items-center">
        <MyLogo />
      </div>
    </header>
    <div class="bg">
      <form class="search flex justify-center items-center">
        <input
          v-model="inputVal"
          type="text"
          placeholder="search for animes..."
          class="text-black border-none outline-none w-full px-2 py-1.5 text-lg rounded-l-md"
        >
        <button class="bg-primary text-black h-full py-2 px-3 rounded-r-md">
          <Icon name="fa7-solid:magnifying-glass" />
        <!-- <Icon name="uil:github" /> -->
        </button>
      </form>
      <div class="top-searches text-base mt-5">
        <span class="font-bold">TOP SEARCHES : </span>
        <span
          v-for="term in topSearches"
          :key="term"
          class="px-1 hover:text-primary cursor-pointer"
        >
          <nuxt-link :to="`/search?keyworld=${term}`">
            {{ term }}
          </nuxt-link>
        </span>
      </div>
      <div class="banner flex items-center justify-center ">
        <NuxtImg
          class="h-auto w-96"
          format="webp"
          src="/images/banner.png"
        />
      </div>
      <div class="explore">
        <nuxt-link to="/home">
          <button class="bg-primary text-black w-full mt-4 py-2 rounded-md flex justify-center items-center gap-2">
            <span>Explore Animes</span>
            <Icon name="ooui:arrow-next-ltr" />
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg {
  /* background-image:linear-gradient(to right, rgb(0, 0, 0) 1%, rgba(0,0,0,0.5) 90%), url("/images/background.jpg"); */
  background-image: url("/images/background.jpg");
    /* linear-gradient(to right, #000 1%, transparent 90%, #000); */
    /* background-blend-mode: overlay; or try multiply, soft-light, etc. */
  background-position: center;
  background-size: cover;
}
</style>
