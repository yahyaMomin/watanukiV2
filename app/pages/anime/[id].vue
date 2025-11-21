<script setup>
import { headers } from '~/config/headers';

const route = useRoute();
const id = computed(() => route.params.id || null);

const titleArr = id.value.split('-');
const title = titleArr.slice(0, titleArr.length - 1).join(' ');

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
useHead({
  ...headers,
  title: `Anime | ${title}`,
});

const { data, status, error } = await useFetch(`/api/anime/${id.value}`, {
  lazy: true,
});

if (error.value)
  throw createError({
    statusCode: error.value.status,
    statusMessage: error.value.statusMessage,
  });

const response = computed(() => data.value?.data);
</script>

<template>
  <main>
    <div v-if="status === 'pending'">
      <loader class="h-[calc(100dvh-350px)]" />
    </div>
    <section v-else class="page-layout">
      <detail-card :data="response" />
      <div class="row grid items-start gap-3 px-2 grid-cols-12">
        <div class="left col-span-12 xl:col-span-9">
          <MoreSeasons
            v-if="response.moreSeasons.length > 0"
            :data="response.moreSeasons"
          />
          <VoiceActors :id="id" @toggle-modal="toggleModal" />
          <Recommendation :data="response.recommended" />
        </div>
        <div class="right col-span-12 xl:col-span-3">
          <Related v-if="response.related" :data="response.related" />
          <MostPopular :data="response.mostPopular" />
        </div>
      </div>
    </section>

    <!-- dialog -->
    <Modal v-if="showModal" :id="id" @toggle-modal="toggleModal" />
  </main>
</template>
