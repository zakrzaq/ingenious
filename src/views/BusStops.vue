<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/BaseInput.vue";
import BaseSortOrder from "@/components/BaseSortOrder.vue";
import BaseListItem from "@/components/BaseListItem.vue";

const store = useStore();

const storeQuery = computed(() => store.getters.getStopQuery);
const inputValue = computed({
  get: () => storeQuery.value,
  set: (newValue) => store.commit("setStopQuery", newValue),
});
const sortOrder = computed({
  get: () => store.getters.getStopsAscending,
  set: (value: boolean) => store.commit("toggleStopsAscending", value),
});

const isActive = (stop: string) => store.getters.getSelectedStop === stop;
</script>

<template>
  <div class="row gx-0 mt-3 bg-white rounded">
    <BaseInput type="text" v-model="inputValue" icon="search" class="p-2" />
    <BaseSortOrder v-model="sortOrder" class="p-4">Time</BaseSortOrder>
    <ul>
      <BaseListItem
        v-for="stop in store.getters.getStopByQuery"
        :item="stop"
        :key="stop"
        :active="isActive(stop)"
      >
        <p class="py-3 ps-4 mb-0">{{ stop }}</p>
      </BaseListItem>
    </ul>
  </div>
</template>
