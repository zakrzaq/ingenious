<script setup lang="ts">
import { useStore } from "vuex";

const handleClick = (lineNumber: number) => {
  store.commit("setSelectedLine", lineNumber);
}
const store = useStore();
</script>

<template>
  <div class="row gx-0 lines-selector">
    <div class="row gx-0 title">Select Bus Line</div>
    <div class="lines-grid">
      <button
        v-for="line in store.getters.getAllLines"
        :key="line"
        @click="handleClick(line)"
        class="btn btn-primary"
      >
        {{ line }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.lines-selector {
  background: var(--main-colors-main-white, #fff);
  margin-top: 24px;
  border-radius: 4px;
}
.title {
  padding: 24px 24px 8px 24px;
  color: var(--main-colors-main-main, #1a1a1a);
  font-weight: 600;
}

.lines-grid {
  padding: 24px;
  display: flex;
  gap: 8px;
}
</style>
