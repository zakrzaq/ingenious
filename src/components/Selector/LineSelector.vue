<script setup lang="ts">
import { useStore } from "@/store";
import { generateNumbersArr } from "@/helpers/arrays";
import BaseButton from "@/components/BaseButton.vue";

const store = useStore();

const availableLines = generateNumbersArr(100, 150);

const handleClick = (lineNumber: number) => {
  store.commit("setSelectedLine", lineNumber);
  store.commit("setSelectedStop", "");
};

const isActive = (line: number): boolean =>
  line === store.getters.getSelectedLine;

const isLineAvailable = (line: number): boolean =>
  store.getters.getAllLines.includes(line);
</script>

<template>
  <div class="line-selector">
    <p class="line-selector__title">Select Bus Line</p>
    <div class="line-selector__controls">
      <BaseButton
        v-for="line in availableLines"
        :key="line"
        :active="isActive(line)"
        :disabled="!isLineAvailable(line)"
        size="sm"
        @click="handleClick(line)"
      >
        {{ line }}
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line-selector {
  background: white;
  margin-top: 16px;
  border-radius: 4px;

  &__title {
    padding: 24px 24px 8px 24px;
    color: $pr-black;
    font-weight: 600;
  }

  &__controls {
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
