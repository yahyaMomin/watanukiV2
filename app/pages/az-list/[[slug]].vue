<script setup>
import { headers } from '~/config/headers';

const route = useRoute();

const slug = computed(() => route.params.slug || null);

useHead({
  ...headers,
  title: `Discover ${slug.value} Anime`,
});
</script>

<template>
  <main>
    <AZList :selected="slug" />
    <ListpageMapper
      :api-path="`animes/${slug ? `az-list/${slug}` : 'az-list'}`"
      :title="`${slug ? `${slug}` : 'All'}
      Anime`"
    />
  </main>
</template>
