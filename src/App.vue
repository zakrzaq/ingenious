<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
// import store from "@/store";

const store = useStore()

onMounted(async () => {
  store.dispatch("fetchStops");
});
</script>

<template>
  <div>{{ store.getters.appTitle }}</div>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");
@import url("bootstrap/dist/css/bootstrap.min.css");
</style>
