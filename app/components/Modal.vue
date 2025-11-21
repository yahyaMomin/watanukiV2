<script setup>
const props = defineProps({
  id: { type: String, required: true },
});

const currentPage = ref(1);
defineEmits(['toggleModal']);
const { data, status } = await useFetch(
  () => `/api/characters/${props.id}?page=${currentPage.value}`,
  { lazy: true, watch: [currentPage] }
);

const characters = computed(() => data.value?.data?.response);
const pageInfo = computed(() => data.value?.data?.pageInfo);

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div v-if="status === 'pending'">
    <Loader />
  </div>
  <main
    v-else
    class="fixed inset-0 w-full bg-black/50 flex items-center justify-center flex-col z-[9] overflow-hidden"
  >
    <button
      class="bg-white text-black px-2 py-1 rounded-md"
      @click="$emit('toggleModal')"
    >
      close
      <Icon name="fa7-slid:close" />
    </button>
    <div
      class="grid mt-2 grid-cols-12 gap-2 bg-background p-6 rounded-2xl shadow-lg max-w-screen-lg w-full"
    >
      <div
        v-for="item in characters"
        :key="item.id"
        class="wrapper flex p-3 px-1 items-center justify-between bg-lightbg col-span-12 md:col-span-6 2xl:col-span-4"
      >
        <div class="left gap-2 flex items-center">
          <NuxtLink :to="`/${item.id.replace(':', '/')}`">
            <div class="poster size-9 overflow-hidden rounded-[50%]">
              <Image
                class="h-full w-full object-cover"
                :src="item.imageUrl"
                :alt="item.name"
              />
            </div>
          </NuxtLink>

          <div class="flex flex-col">
            <NuxtLink :to="`/${item.id.replace(':', '/')}`">
              <p class="text-xs hover:text-primary">{{ item.name }}</p>
            </NuxtLink>
            <span class="text-xs text-lighttext">{{ item.role }}</span>
          </div>
        </div>

        <div
          v-if="item.voiceActors?.length"
          class="right flex items-center gap-2"
        >
          <div class="flex items-end flex-col">
            <NuxtLink :to="`/${item.voiceActors[0].id.replace(':', '/')}`">
              <h4 class="text-xs hover:text-primary">
                {{ item.voiceActors[0].name }}
              </h4>
            </NuxtLink>
          </div>

          <NuxtLink :to="`/${item.voiceActors[0].id.replace(':', '/')}`">
            <div class="poster size-9 rounded-[50%] overflow-hidden">
              <Image
                class="h-full w-full object-cover"
                :src="item.voiceActors[0].imageUrl"
                :alt="item.voiceActors[0].name"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="pageInfo.totalPages"
      @change="handlePageChange"
    />
  </main>
</template>
