<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    item: string;
    activeId?: string;
    cursor?: "" | "pointer";
  }>(),
  {
    item: "",
    activeId:"",
    cursor: "",
  }
);

const active = computed(() => props.activeId === props.item);

const classList = computed(() => [
  active.value ? "list-item--active" : "",
  props.cursor ? "cursor-pointer" : "",
]);
</script>

<template>
  <li
    v-if="item"
    :key="item"
    class="list-item"
    :class="classList"
  >
    <slot />
  </li>
</template>

<style scoped lang="scss">
.list-item {
  padding: 20px 0 20px 24px;
  color: $lighten-1;
  font-size: 12px;
  line-height: 16px;
  border-top: solid 1px $light-bg;
  transition: 0.2s ease all;

  &--active {
    color: $pr-blue;
  }

  &:hover {
    background: $lighten-bg;
  }

  &__item {
    margin: 0;
    padding: 20px 0 20px 24px;
  }
}
</style>
