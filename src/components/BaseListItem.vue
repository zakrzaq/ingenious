<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    item: string;
    active?: boolean;
    cursor?: "" | "pointer";
  }>(),
  {
    item: "",
    active: false,
    cursor: "",
  }
);

const classList = computed(() => [
  props.active ? "text-primary" : "",
  props.cursor ? "cursor-pointer" : "",
]);
</script>

<template>
  <li
    v-if="item"
    :key="item"
    :active="active"
    class="border-top brd-gray-3 font-size-12 transition list-item"
    :class="classList"
  >
    <slot />
  </li>
</template>

<style scoped>
.list-item:hover {
  background: var(--lighten-bg);
}
</style>
