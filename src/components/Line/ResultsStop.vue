<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="">
    <template v-if="store.getters.getSelectedStop">
      <h2 class="title">Bus Stop: {{ store.getters.getSelectedStop }}</h2>
      <ul class="lines-list">
        <div class="sub-title">Time</div>
        <li
          v-for="time in store.getters.getSelectedLineAndStopsTimes"
          :key="time"
          class="lines-item"
        >
          {{ time }}
        </li>
      </ul>
    </template>
    <template v-else>
      <p>no line</p>
    </template>
  </div>
</template>

<style scoped></style>
