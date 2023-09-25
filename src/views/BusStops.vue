<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const storeQuery = computed(() => store.getters.getStopQuery)
const inputValue = computed({
  get: () => storeQuery.value,
  set: (newValue) => store.commit("setStopQuery", newValue)
})
</script>

<template>
  <div>Bus Stops</div>
  <div>
    <input type="text" placeholder="Search" v-model="inputValue"/>
    <p v-for="stop in store.getters.getStopByQuery" :key="stop">{{ stop }}</p>
  </div>
</template>
