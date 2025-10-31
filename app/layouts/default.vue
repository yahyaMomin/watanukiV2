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
  background-color: #272829b4;
  z-index: 5000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  inset: 0;
}
.bg-active {
  position: fixed;
  inset: 0;
  overflow: hidden;
}
.sidebar {
  scrollbar-width: none;
}
</style>
