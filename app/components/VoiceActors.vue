<script setup>
const props = defineProps({
  id: { type: String, required: true },
})

const { data, status, error } = await useFetch(`/api/characters/${props.id}`)

const characters = computed(() => data.value?.data?.response?.slice(0, 6) || [])
</script>

<template>
  <main
    v-if="!error && characters.length"
    class="mt-5"
  >
    <div class="header flex justify-between items-center">
      <h2 class="text-base md:text-xl font-extrabold md:ml-5 text-primary">
        Characters & Voice Actors
      </h2>
      <NuxtLink :to="`/characters/${id}`">
        <h6 class="text-sm cursor-pointer hover:text-primary flex md:mr-4 items-center gap-1 text-neutral-400">
          <span>View more</span>
          <Icon name="fa7-solid:angle-right" />
        </h6>
      </NuxtLink>
    </div>

    <div class="grid mt-2 grid-cols-12 gap-2">
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
              /></div>
          </NuxtLink>

          <div class="flex flex-col">
            <NuxtLink :to="`/${item.id.replace(':', '/')}`">
              <h4 class="text-xs hover:text-primary">{{ item.name }}</h4>
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
            <span class="text-xs text-lighttext">japanese</span>
          </div>

          <NuxtLink :to="`/${item.voiceActors[0].id.replace(':', '/')}`">
            <div class="poster size-9 rounded-[50%] overflow-hidden">
              <Image
                class="h-full w-full object-cover"
                :src="item.voiceActors[0].imageUrl"
                :alt="item.voiceActors[0].name"
              /></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>

  <Loader v-else-if="isLoading" />
</template>
