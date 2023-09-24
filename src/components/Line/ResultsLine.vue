<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { useStore } from "vuex";

const store = useStore();

export interface Props {
  line: number;
}

withDefaults(defineProps<Props>(), {
  line: 0,
});

const toggleSortOrder = () => {
  store.commit("toggleLinesAscending");
};
</script>

<template>
  <div class="">
    <template v-if="line">
      <h2 class="title">Bus Line: {{ store.getters.getSelectedLine }}</h2>
      <ul class="lines-list">
        <div class="sub-title" @click="toggleSortOrder">
          Bus Stops
          <div class="arrows">
            <span
              class="arrow-up"
              :class="
                store.getters.getLinesAscending ? 'arrow-up-selected' : ''
              "
            ></span>
            <span
              class="arrow-down"
              :class="
                !store.getters.getLinesAscending ? 'arrow-down-selected' : ''
              "
            ></span>
          </div>
        </div>
        <li
          v-for="stop in store.getters.getSelectedLineStopsList"
          :key="stop"
          class="lines-item"
        >
          {{ stop }}
        </li>
      </ul>
    </template>
    <template v-else>
      <p>no line</p>
    </template>
  </div>
</template>

<style scoped>
.title {
  color: var(--main-colors-main-main, #1a1a1a);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}

.sub-title {
  display: flex;
  gap: 5px;
  padding: 24px 0;
  font-weight: 600;
  font-size: 12px;
}

.lines-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lines-item {
  padding: 20px 0;
  border-top: 1px solid gray;
  font-weight: 400;
  font-size: 12px;
}

.arrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid
    var(--light-main-colors-main-universal-main-lighten-3, #9a9da4);
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid
    var(--light-main-colors-main-universal-main-lighten-3, #9a9da4);
}

.arrow-down-selected {
  border-top: 5px solid var(--workspaces-rep-io-rep-io-primary, #1952e1);
}
.arrow-up-selected {
  border-bottom: 5px solid var(--workspaces-rep-io-rep-io-primary, #1952e1);
}
</style>
