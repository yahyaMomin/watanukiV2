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
  background: linear-gradient(90deg,  #d0e6a5,
    #ffbade,
    #fc887b,
    #ccabda,
    #abccd8,
    #d8b2ab,
    #86e3ce);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>
