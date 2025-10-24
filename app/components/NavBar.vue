<script setup>
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()
const showSearch = ref(false)
const inputVal = ref('')

const submitForm = () => {
  if (inputVal.value.trim() === '') return
  navigateTo(`/search?keyword=${inputVal.value}`)
}
</script>

<template>
  <nav class="bg-lightbg px-2 fixed w-full z-50">
    <div class="flex justify-between items-center mx-2 md:mx-10 gap-2 md:gap-5 h-16">
      <div class="left flex items-center justify-center  gap-4">
        <button
          class="menu flex justify-center items-center"
          @click="sidebar.toggleSidebar()"
        >
          <Icon
            name="fa7-solid:angles-right"
            class="text-xl"
          />
        </button>
        <div class="logo">
          <MyLogo />
        </div>
      </div>
      <form
        class="searchbar hidden sm:block relative w-1/2"
        @submit.prevent="submitForm"
      >
        <button type="submit">
          <Icon
            name="fa7-solid:magnifying-glass"
            class="text-white right-3 top-1/2 -translate-y-1/2 absolute"
          />
        </button>
        <input
          v-model="inputVal"
          type="text"
          class="w-full py-2 px-2 rounded-md bg-black text-white"
          placeholder="search for animes..."
        >
      </form>
      <div
        class="search-btn block sm:hidden"
        @click="showSearch = !showSearch"
      >
        <Icon
          :name="`${showSearch ? 'fa7-solid:close' : 'fa7-solid:magnifying-glass'}`"
        />
      </div>
    </div>
    <form
      v-show="showSearch"
      class="searchbar relative w-full py-1"
      @submit.prevent="submitForm"
    >
      <button
        class=""
        type="submit"
      >
        <Icon
          name="fa7-solid:magnifying-glass"
          class="text-white right-3 top-1/2 -translate-y-1/2 absolute"
        />
      </button>
      <input
        v-model="inputVal"
        type="text"
        class="w-full py-2 px-2 rounded-md bg-black text-white"
        placeholder="search for animes..."
      >
    </form>
  </nav>
</template>
