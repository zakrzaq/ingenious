<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import BaseInput from "@/components/BaseInput.vue";
import BaseTitleWithSort from "@/components/BaseTitleWithSort.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import SelectorResults from "@/components/Selector/SelectorResults.vue";

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
  <SelectorResults class="mt-16">
    <BaseInput type="text" v-model="inputValue" icon="search" class="p-2" />
    <BaseTitleWithSort v-model="sortOrder" :sort="true">Time</BaseTitleWithSort>
    <ul>
      <BaseListItem
        v-for="stop in store.getters.getStopByQuery"
        :item="stop"
        :key="stop"
        :active="isActive(stop)"
      >
        {{ stop }}
      </BaseListItem>
    </ul>
  </SelectorResults>
</template>
