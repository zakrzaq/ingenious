<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <h1 class="app-title">{{ store.getters.getAppTitle }}</h1>
</template>

<style scoped>
.app-title {
  color: #1a1a1a;
  padding: 4px 0;
}
</style>
