<script setup>
const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['change'])

const range = (start, end) => {
  return [...Array(end - start + 1)].map((_, i) => start + i)
}
const getPage = (page, total) => {
  if (total <= 5) return range(1, total)
  const start = Math.max(1, page - 2)
  const end = Math.min(total, page + 2)

  return range(start, end)
}

const pageNav = computed(() => getPage(props.currentPage, props.totalPages))

const showFirst = computed(() => props.currentPage > 1)
const showPrev = computed(() => props.currentPage > 1)
const showNext = computed(() => props.totalPages - props.currentPage > 1)
const showEnd = computed(() => props.totalPages - props.currentPage > 1)

const changePage = (num) => {
  emit('change', num)
}

const liClass = 'bg-lightbg text-sm sm:text-base hover:text-primary rounded-[50%] size-10 sm:size-11 flex justify-center items-center cursor-pointer'
</script>

<template>
  <nav>
    <ul class="flex justify-center items-center gap-2 my-5">
      <li
        v-if="showFirst"
        :class="liClass"
        title="page 1"
        @click="changePage(1)"
      >
        <Icon name="fa7-solid:angle-double-left" />
      </li>
      <li
        v-if="showPrev"
        :class="liClass"
        :title="`page ${currentPage - 1}`"
        @click="changePage(currentPage - 1)"
      >
        <Icon name="fa7-solid:angle-left" />
      </li>
      <li
        v-for="p in pageNav"
        :key="p"
        :title="`page ${p}`"
        :class="[{ 'bg-primary text-black': currentPage === p }, liClass]"
        @click="changePage(p)"
      >
        <button class="">
          {{ p }}
        </button>
      </li>
      <li
        v-if="showNext"
        :class="liClass"
        :title="`page ${currentPage + 1}`"
        @click="changePage(currentPage + 1)"
      >
        <Icon name="fa7-solid:angle-right" />
      </li>
      <li
        v-if="showEnd"
        :class="liClass"
        :title="`page ${totalPages}`"
        @click="changePage(totalPages)"
      >
        <Icon name="fa7-solid:angle-double-right" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
