<script setup>
import { computed } from 'vue'
import { azList } from '~/config/meta'

// Define prop
const props = defineProps({
  selected: {
    type: String,
    default: null,
  },
})

// Fallback handling
const selectedUpper = computed(() => {
  const sel = props.selected === null ? 'ALL' : props.selected
  return sel.toUpperCase()
})
const selectedLower = (selected) => {
  return selected.toLowerCase()
}
</script>

<template>
  <div class="list mt-5 w-full mb-2 px-2 flex gap-2 flex-wrap justify-center items-center">
    <NuxtLink
      v-for="item in azList"
      :key="item.title"
      :to="selectedLower(item.link)"
    >
      <button
        class="px-2 py-1 bg-lightbg text-sm hover:bg-primary hover:text-black rounded-sm font-bold mb-1"
        :class="{
          'bg-primary text-black': selectedUpper === item.title,
        }"
      >
        {{ item.title }}
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Tailwind handles most of the styling */
</style>
