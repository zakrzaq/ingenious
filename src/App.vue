<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

import MainNav from "@/components/MainNav.vue";
import MainTitle from '@/components/MainTitle.vue'

const store = useStore();

onMounted(async () => {
  store.dispatch("fetchStops");
});
</script>

<template>
  <header>
    <MainTitle />
    <MainNav />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
/* NOTE: moved here from main.ts as it was causing issues with running the project */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");

body{
  background: var(--main-colors-main-light-bg, #F3F4F9);
  margin: 40px 32px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
}
</style>
