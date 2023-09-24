<script setup lang="ts">
import { useStore } from "vuex";

import BaseButton from "@/components/BaseButton.vue";

const store = useStore();

const handleClick = (lineNumber: number) => {
  store.commit("setSelectedLine", lineNumber);
  store.commit("setSelectedStop", "")
};

const isActive = (line: string): boolean =>
  parseInt(line) === store.getters.getSelectedLine;
</script>

<template>
  <div class="row gx-0 lines-selector">
    <div class="row gx-0 title">Select Bus Line</div>
    <div class="lines-grid">
      <BaseButton
        v-for="line in store.getters.getAllLines"
        :key="line"
        :active="isActive(line)"
        @click="handleClick(line)"
      >
        {{ line }}
      </BaseButton>
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
