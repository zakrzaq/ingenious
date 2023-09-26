<script setup lang="ts">
import { useStore } from "@/store";
import BasePlaceholderCard from "@/components/BasePlaceholderCard.vue";
import BaseListItem from "@/components/BaseListItem.vue";

const store = useStore();
</script>

<template>
  <div class="bg-white rounded align-self-start">
    <template v-if="store.getters.getSelectedStop">
      <h2 class="fw-bolder text-gray-6 font-size-14 px-4 pt-4 pb-2">
        Bus Stop: {{ store.getters.getSelectedStop }}
      </h2>
      <p class="mb-0 text-size-12 fw-bolder p-4">Time</p>
      <ul>
        <BaseListItem
          v-for="time in store.getters.getSelectedLineAndStopsTimes"
          :key="time"
          :item="time"
        >
          <p class="py-3 ps-4 mb-0">{{ time }}</p>
        </BaseListItem>
      </ul>
    </template>
    <template v-else>
      <BasePlaceholderCard>
        Please select the bus stop first
      </BasePlaceholderCard>
    </template>
  </div>
</template>
