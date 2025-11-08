<script setup>
import { useSidebarStore } from '@/stores/sidebar'
import { sidebarLinks } from '~/config/meta'

const sidebar = useSidebarStore()
</script>

<template>
  <div
    :class="[
      'sidebar transition-all fixed overflow-scroll h-full z-[210] inset-0 w-64 md:w-80 bg-[rgba(255,255,255,.1)]',
      sidebar.isSideBarOpen ? 'translate-x-0' : 'translate-x-[-100%]',
    ]"
  >
    <button
      class="w-full pt-4 pl-2 flex items-center gap-2 hover:text-primary"
      @click="sidebar.toggleSidebar"
    >
      <Icon name="fa7-solid:angle-left" />
      <span>close menu</span>
    </button>

    <ul class="py-4">
      <li
        v-for="item in sidebarLinks"
        :key="item.link"
        class="py-4 pl-4 hover:text-primary border-b border-[rgba(255,255,255,.05)] w-full"
        @click="sidebar.toggleSidebar"
      >
        <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
      </li>

      <li class="py-4 pl-4 w-full">
        genres
      </li>

      <Genres
        class="w-1/2 my-2 pl-4 hover:opacity-[.7]"
        @toggle-sidebar="sidebar.toggleSidebar"
      />
    </ul>
  </div>
</template>
