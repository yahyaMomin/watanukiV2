<script setup>
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <div class="app bg-background">
    <Sidebar />
    <div :class="`${sidebar.isSideBarOpen ? 'bg-active' : ''}`">
      <div
        :class="`${sidebar.isSideBarOpen ? 'active' : ''}`"
        @click="sidebar.toggleSidebar()"
      />
      <NavBar />
      <div class="main-app pt-16">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
  .active {
  position: fixed;
  backdrop-filter: blur(5px);
  background-color: #212222b4;
  z-index: 200;
  width: 100%;
  height: 100%;
  inset: 0;
}
.sidebar {
  scrollbar-width: none;
}
</style>
