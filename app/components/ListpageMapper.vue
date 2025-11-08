<script setup>
const props = defineProps({
  path: String,
  title: String,
})

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  return Number(route.query.page) || 1
})

const API_ENDPOINT = computed(() => {
  const separator = props.path.includes('?') ? '&' : '?'
  return `/api/${props.path}${separator}page=${currentPage.value}`
})
const { data, status, error, refresh } = await useFetch(API_ENDPOINT, { lazy: true, watch: [currentPage] })

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
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
