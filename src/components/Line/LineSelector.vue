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
  <div class="row gx-0 bg-white mt-4 rounded">
    <div class="row gx-0 px-4 pt-4 pb-2 text-gray-6 fw-bolder">Select Bus Line</div>
    <div class="p-4 d-flex gap-2">
      <BaseButton
        v-for="line in store.getters.getAllLines"
        :key="line"
        :active="isActive(line)"
        size="sm"
        @click="handleClick(line)"
      >
        {{ line }}
      </BaseButton>
    </div>
  </div>
</template>
