<script setup>
import config from '~/config/config'
import { genres } from '~/config/meta'

defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits(['toggleSidebar'])
const colors = [
  '#d0e6a5',
  '#ffbade',
  '#fc887b',
  '#ccabda',
  '#abccd8',
  '#d8b2ab',
  '#86e3ce',
]
</script>

<template>
  <ul class="flex flex-wrap">
    <li
      v-for="(genre, index) in genres"
      v-bind="$attrs"
      :key="genre"
      :title="genre"
      :style="{ color: colors[index % colors.length] }"
    >
      <NuxtLink
        :to="config.siteRoutes.genre + genre"
        @click="emit('toggleSidebar')"
      >
        {{ genre }}
      </NuxtLink>
    </li>
  </ul>
</template>
