<script setup>
defineProps({
  statusCode: Number,
  statusMessage: String,
})
</script>

<template>
  <div class="wrapper min-h-dvh flex justify-center items-center bg-black text-white">
    <div class="wrapper flex flex-col items-center">
      <h2 class="text-2xl ">
        {{ statusCode }}
      </h2>
      <h2>{{ statusMessage }}</h2>
    </div>
  </div>
</template>
