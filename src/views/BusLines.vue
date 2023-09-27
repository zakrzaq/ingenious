<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import BasePlaceholderCard from "@/components/BasePlaceholderCard.vue";
import LineSelector from "@/components/Selector/LineSelector.vue";
import SelectorResults from "@/components/Selector/SelectorResults.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseTitleWithSort from "@/components/BaseTitleWithSort.vue";
import BaseListItem from "@/components/BaseListItem.vue";

const store = useStore();

const stopsSortOrder = computed({
  get: () => store.getters.getLinesAscending,
  set: (value: boolean) => store.commit("toggleLinesAscending", value),
});

const selectStop = (stop: string) => {
  store.commit("setSelectedStop", stop);
};
</script>

<template>
  <div>
    <LineSelector />

    <div class="row mt-16">
      <SelectorResults v-if="store.getters.getSelectedLine" class="col-50">
        <BaseTitle> Bus Line: {{ store.getters.getSelectedLine }} </BaseTitle>
        <BaseTitleWithSort v-model="stopsSortOrder" :sort="true">
          Bus Line
        </BaseTitleWithSort>
        <ul>
          <BaseListItem
            v-for="stop in store.getters.getSelectedLineStopsList"
            :key="stop"
            :item="stop"
            :active-id="store.getters.getSelectedStop"
            cursor="pointer"
            @click="selectStop(stop)"
          >
            {{ stop }}
          </BaseListItem>
        </ul>
      </SelectorResults>
      <BasePlaceholderCard v-else class="col-50">
        Please select the bus line first
      </BasePlaceholderCard>

      <SelectorResults v-if="store.getters.getSelectedStop" class="col-50">
        <BaseTitle> Bus Stop: {{ store.getters.getSelectedStop }} </BaseTitle>
        <BaseTitleWithSort>Time</BaseTitleWithSort>
        <ul>
          <BaseListItem
            v-for="time in store.getters.getSelectedLineAndStopsTimes"
            :key="time"
            :item="time"
          >
            {{ time }}
          </BaseListItem>
        </ul>
      </SelectorResults>
      <BasePlaceholderCard v-else class="col-50">
        Please select the bus stop first
      </BasePlaceholderCard>
    </div>
  </div>
</template>
