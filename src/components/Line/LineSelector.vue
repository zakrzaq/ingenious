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
  <div class="row gx-0 bg-white mt-4 rounded">
    <div class="row gx-0 px-4 pt-4 pb-2 text-gray-6 fw-bolder">
      Select Bus Line
    </div>
    <div class="p-4 d-flex flex-wrap gap-2">
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
