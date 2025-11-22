<script setup>
import { headers } from '~/config/headers';

const route = useRoute();

const id = computed(() => route.params.id);

const title = computed(() => id.value.replace('-', ' '));
useHead({
  ...headers,
  title: `Discover ${title.value} Anime`,
});
</script>

<template>
  <ListpageMapper
    :title="`Anime By ${title}`"
    :api-path="`animes/producer/${id}`"
  />
</template>
