<script setup>
const props = defineProps({
  path: String,
  title: String,
})
definePageMeta({
  scrollToTop: true,
})

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  return Number(route.query.page) || 1
})

const { data, status, error, refresh } = await useFetch(() => `/api/animes/${props.path}?page=${currentPage.value}`, { lazy: true, watch: [currentPage] })

if (error.value) throw createError({
  statusCode: error.value.status,
  statusMessage: error.value.statusMessage,
})

const response = computed(() => data.value?.data?.response ?? [])
const pageInfo = computed(() => data.value?.data?.pageInfo ?? {})

function handlePageChange(page) {
  router.push({
    query: { ...route.query, page: page },
  })
}
</script>

<template>
  <div v-if="status === 'pending'">
    <Loader class="h-dvh" />
  </div>
  <div v-else>
    <div>
      <AnimeList
        :data="response"
        :title="title"
      />
    </div>
    <div
      v-if="pageInfo"
      class="paginations"
    >
      <Pagination
        :current-page="currentPage"
        :total-pages="pageInfo.totalPages"
        @change="handlePageChange"
      />
    </div>
  </div>
</template>
