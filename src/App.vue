<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "@/store";

import MainNav from "@/components/MainNav.vue";
import MainTitle from "@/components/MainTitle.vue";

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

<style></style>
