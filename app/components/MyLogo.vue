<script setup>
import config from '~/config/config'
</script>

<template>
  <nuxt-link
    to="/home"
    class=""
  >
    <h1 class="select-none text-xl text-nowrap tracking-wide gradient-text">
      {{ config.sitename }}
    </h1>
  </nuxt-link>
</template>

<style scoped>
.gradient-text {
  font-weight: 900;
  background: linear-gradient(90deg,  var(--primary),
   #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>
