<script setup lang="ts">
import { useStore } from "vuex";

import ResultsLine from "@/components/Line/ResultsLine.vue";
import ResultsStop from "@/components/Line/ResultsStop.vue";

const store = useStore();
console.log(store.getters.getSelectedLine);
</script>

<template>
  <div class="row gx-0 bg-white rounded-1 p-4 mt-3">
    <div class="col gx-0">
      <ResultsLine />
    </div>
    <div class="col gx-0">
      <ResultsStop />
    </div>
  </div>
</template>

<style scoped></style>
