<script setup>
import { headers } from '~/config/headers';

const route = useRoute();
const keyword = computed(() => route.query.keyword);

useHead({
  ...headers,
  title: `search result of ${keyword.value} `,
});
</script>

<template>
  <main class="mt-2">
    <!-- <div class="flex gap-5">
      <select
        id=""
        name="type"
        class="text-black"
      >
        <option value="tv">
          TV
        </option>
        <option value="movie">
          MOVIE
        </option>
      </select>
      <select
        id=""
        name="type"
        class="text-black"
      >
        <option value="tv">
          TV
        </option>
        <option value="movie">
          MOVIE
        </option>
      </select>
      <select
        id=""
        name="type"
        class="text-black"
      >
        <option value="tv">
          TV
        </option>
        <option value="movie">
          MOVIE
        </option>
      </select>
    </div> -->
    <ListpageMapper
      :api-path="`search?keyword=${keyword}`"
      :title="`Search Result Of '${keyword}'`"
    />
  </main>
</template>
