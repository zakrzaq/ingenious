<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import BaseSortOrder from '@/components/BaseSortOrder.vue';
import BasePlaceholderCard from '@/components/BasePlaceholderCard.vue';

const store = useStore();

const stopsSortOrder = computed({
  get: () => store.getters.getLinesAscending,
  set: (value: boolean) => store.commit("toggleLinesAscending", value),
})

const handleStopClick = (stop: string) => {
  store.commit("setSelectedStop", stop);
};
</script>

<template>
  <div class="bg-white rounded">
    <template v-if="store.getters.getSelectedLine">
      <h2 class="fw-bolder text-gray-6 font-size-14 px-4 pt-4 pb-2">Bus Line: {{ store.getters.getSelectedLine }}</h2>
      <BaseSortOrder v-model="stopsSortOrder" class="p-4">Bus Line</BaseSortOrder>
      <ul>
        <li
          v-for="stop in store.getters.getSelectedLineStopsList"
          :key="stop"
          class="border-top brd-gray-3 font-size-12 cursor-pointer"
          @click="handleStopClick(stop)"
        >
          <p class="py-3 ps-4 mb-0">{{ stop }}</p>
        </li>
      </ul>
    </template>
    <template v-else>
      <BasePlaceholderCard>
        Please select the bus line first
      </BasePlaceholderCard>
    </template>
  </div>
</template>
