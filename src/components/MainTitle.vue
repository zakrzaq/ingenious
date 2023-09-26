<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <h1 class="text-gray-6 py-1">{{ store.getters.getAppTitle }}</h1>
</template>
