<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import BaseSortOrder from "@/components/BaseSortOrder.vue";
import BasePlaceholderCard from "@/components/BasePlaceholderCard.vue";
import BaseListItem from "@/components/BaseListItem.vue";

const store = useStore();

const stopsSortOrder = computed({
  get: () => store.getters.getLinesAscending,
  set: (value: boolean) => store.commit("toggleLinesAscending", value),
});

const isStopSelected = (stop: string) => stop === store.getters.getSelectedStop;

const selectStop = (stop: string) => {
  store.commit("setSelectedStop", stop);
};
</script>

<template>
  <div class="bg-white rounded align-self-start">
    <template v-if="store.getters.getSelectedLine">
      <h2 class="fw-bolder text-gray-6 font-size-14 px-4 pt-4 pb-2">
        Bus Line: {{ store.getters.getSelectedLine }}
      </h2>
      <BaseSortOrder v-model="stopsSortOrder" class="p-4"
        >Bus Line</BaseSortOrder
      >
      <ul>
        <BaseListItem
          v-for="stop in store.getters.getSelectedLineStopsList"
          :key="stop"
          :item="stop"
          :active="isStopSelected(stop)"
          cursor="pointer"
          @click="selectStop(stop)"
        >
          <p class="py-3 ps-4 mb-0">{{ stop }}</p>
        </BaseListItem>
      </ul>
    </template>
    <template v-else>
      <BasePlaceholderCard>
        Please select the bus line first
      </BasePlaceholderCard>
    </template>
  </div>
</template>
