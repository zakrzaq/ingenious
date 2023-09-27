<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <h1 class="main-title">{{ store.getters.getAppTitle }}</h1>
</template>

<style scoped lang="scss">
.main-title {
  padding: 4px 0;
  color: $pr-black;
  font-size: 24px;
  font-weight: 600;
  line-height: 133.33%;
}
</style>
