<script setup>
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()
const showSearch = ref(false)
const inputVal = ref('')
const inputRef = ref()

const submitForm = () => {
  if (inputVal.value.trim() === '') return
  inputRef.value?.blur()
  navigateTo(`/search?keyword=${inputVal.value}`)
}
</script>

<template>
  <nav class="bg-lightbg/70 px-2 fixed w-full z-10">
    <div class="flex justify-between items-center">
      <div class="flex items-center mx-2 md:mx-4 gap-2 md:gap-5 h-14">
        <button
          class="menu flex justify-center items-center"
          @click="sidebar.toggleSidebar()"
        >
          <Icon
            name="fa7-solid:list"
            class="text-xl"
          />
        </button>
        <div class="logo">
          <MyLogo />
        </div>
      </div>
      <form
        class="h-10 hidden sm:flex w-full md:w-1/2 relative"
        @submit.prevent="submitForm"
      >
        <input
          ref="inputRef"
          v-model="inputVal"
          type="text"
          placeholder="Search For Animes..."
          class="h-full rounded-md px-2 w-full"
        >
        <button
          type="submit"
          class="absolute top-1/2 -translate-y-1/2 right-2 text-black"
        >
          <Icon name="fa7-solid:search" />
        </button>
      </form>
      <button
        type="submit"
        class="show block sm:hidden"
        @click="showSearch = !showSearch"
      >
        <Icon :name="showSearch ? `fa7-solid:close` : `fa7-solid:search`" />
      </button>
    </div>
    <form
      v-if="showSearch"
      class="flex sm:hidden h-10 w-full md:w-1/2 relative"
      @submit.prevent="submitForm"
    >
      <input
        ref="inputRef"
        v-model="inputVal"
        type="text"
        placeholder="Search For Animes..."
        class="h-full rounded-md px-2 w-full"
      >
      <button
        type="submit"
        class="absolute top-1/2 -translate-y-1/2 right-2 text-black"
      >
        <Icon name="fa7-solid:search" />
      </button>
    </form>
  </nav>
</template>
