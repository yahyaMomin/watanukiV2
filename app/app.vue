<script setup>

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  color: #fff;
  font-family: "Poppins", sans-serif;
}
input {
  border: none;
  outline: none;
  color: black;
}
.rounded-child > p:first-child {
  border-radius: 2px 0 0 2px;
}
.rounded-child > p:last-child {
  border-radius: 0 2px 2px 0;
}
.item {
  display: flex;
  align-items: center;
  gap: 3px;
}
.heading{
  color: var(--primary);
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 18px;
  margin-block: 0.5rem;
  margin-left: 0.5rem;
}
</style>
