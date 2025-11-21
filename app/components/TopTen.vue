<script setup>
import config from '~/config/config'

const selectedTab = ref('today')
const tabs = [{ name: 'today' }, { name: 'week' }, { name: 'month' }]

const handleTabChange = (name) => {
  if (selectedTab.value !== name) selectedTab.value = name
}
defineProps({
  data: Object,
})
</script>

<template>
  <div class="infor flex justify-between items-center mb-2  ">
    <h1 class="heading">
      Top 10
    </h1>
    <div class="buttons flex bg-lightbg">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="px-3 py-1.5 rounded-sm text-sm"
        :class="selectedTab === tab.name
          ? 'bg-primary text-black'
          : 'hover:text-primary'"
        @click="handleTabChange(tab.name)"
      >
        {{ tab.name }}
      </button>
    </div>
  </div>

  <div class="box bg-lightbg px-2 sm:px-4 py-2">
    <div
      v-for="item in data[selectedTab]"
      :key="item.id"
      class="flex items-center gap-2 sm:gap-5 mb-4"
    >
      <span
        class="rank text-base sm:text-2xl font-extrabold"
        :class="item.rank <= 3 ? 'border-primary border-b-2' : ''"
      >
        {{ item.rank < 10 ? `0${item.rank}` : item.rank }}
      </span>
      <div class="rounded-md flex-shrink-0 relative overflow-hidden w-16 pb-[85px]">
        <Image
          class="h-full absolute w-full object-cover object-center"
          :src="item.poster"
          :alt="item.title"
        />
      </div>
      <div class="text">
        <NuxtLink :to="config.siteRoutes.detail + item.id">
          <h2 class="title hover:text-primary mb-2 font-bold">
            {{ item.title }}
          </h2>
        </NuxtLink>
        <div class="item">
          <SoundsInfo :episodes="item.episodes" />
          <div
            v-if="item.type"
            class="item"
          >
            <span class="block mx-1 size-1 bg-primary rounded-full" />
            <h2 class="text-sm text-[#ccc]">
              {{ item.type }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
