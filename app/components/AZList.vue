<script setup>
import { computed } from 'vue';
import config from '~/config/config';
import { azList } from '~/config/meta';

// Define prop
const props = defineProps({
  selected: {
    type: String,
    default: null,
  },
});

const isActive = computed(() => {
  const sel = props.selected === null ? '' : props.selected;
  return sel;
});
</script>

<template>
  <div
    class="list mt-5 w-full mb-2 px-2 flex gap-2 flex-wrap justify-center items-center"
  >
    <NuxtLink v-for="w in azList" :key="w" :to="config.siteRoutes.azList + w">
      <button
        class="px-2 py-1 bg-lightbg text-sm hover:bg-primary hover:text-black rounded-sm font-bold mb-1"
        :class="{
          'bg-primary text-black': isActive === w,
        }"
      >
        {{ w !== '' ? w : 'all' }}
      </button>
    </NuxtLink>
  </div>
</template>
