<script setup lang="ts">
import type { NuxtError } from '#app';
import Errorpage from './components/Errorpage.vue';

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <Errorpage
    :status-code="error?.statusCode"
    :status-message="error?.statusMessage"
  />
</template>
