import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isSideBarOpen = ref(false)
  function toggleSidebar() {
    isSideBarOpen.value = !isSideBarOpen.value
  }

  return { isSideBarOpen, toggleSidebar }
})
