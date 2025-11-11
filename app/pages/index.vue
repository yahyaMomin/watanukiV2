<script setup lang="ts">
definePageMeta({
  layout: 'root',
})
useHead({
  title: 'watanuki | Watch Free Anime, Online Anime Streaming - watanuki',
  meta: [
    {
      name: 'description',
      content:
        'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.',
    },
    {
      name: 'keywords',
      content:
        'watanuki, watanuki to, watch anime online, free anime streaming, zoro anime, aniwatch, 9anime, anime dub sub hd, hianime',
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'watanuki' },
    {
      property: 'og:title',
      content: 'watanuki | Watch Free Anime Online in HD',
    },
    {
      property: 'og:description',
      content:
        'Watch free anime online with DUB & SUB in HD. No ads, fast streaming.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://watanuki.shop' },
    { property: 'og:image', content: 'https://watanuki.shop/og-image.jpg' },
    {
      name: 'twitter:card',
      content:
        'watanuki is a free, no-ads anime site to watch anime online in HD with DUB and SUB. Stream anime from watanuki.shop, hianime, Anix, 9anime, Zoro, Animixplay alternatives.',
    },
    { name: 'twitter:title', content: 'watanuki | Free Anime Streaming' },
    {
      name: 'twitter:description',
      content: 'Stream anime free online, HD quality, no ads.',
    },
    { name: 'twitter:image', content: 'https://watanuki.shop/og-image.jpg' },
  ],
})

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Movies', path: '/animes/movie' },
  { name: 'TV Series', path: '/animes/tv' },
  { name: 'Most Popular', path: '/animes/most-popular' },
  { name: 'Top Airing', path: '/animes/top-airing' },
]

const showNav = ref(false)
const inputVal = ref('')
</script>

<template>
  <main class="min-h-dvh px-2 md:px-10 max-w-screen-xl mx-auto main">
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
          class="flex justify-center items-center gap-2 pl-3"
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
    <section class="bg">
      <form
        class="search flex justify-center items-center"
        @submit.prevent="navigateTo(`/search?keyword=${inputVal}`)"
      >
        <input
          v-model="inputVal"
          type="text"
          placeholder="search for animes..."
          class="text-black border-none outline-none w-full px-2 py-1.5 text-lg rounded-l-md"
        >
        <button
          type="submit"
          class="bg-primary text-black h-full py-2 px-3 rounded-r-md"
        >
          <Icon name="fa7-solid:magnifying-glass" />
        </button>
      </form>

      <div class="banner flex items-center justify-center">
        <NuxtImg
          class="h-auto w-96"
          format="webp"
          src="/images/banner.png"
        />
      </div>
      <div class="explore">
        <NuxtLink to="/home">
          <button
            class="bg-primary text-black w-full mt-4 py-2 rounded-md flex justify-center items-center gap-2"
          >
            <span>Explore Animes</span>
            <Icon name="fa7-solid:arrow-right" />
          </button>
        </NuxtLink>
      </div>
    </section>
  </main>
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
