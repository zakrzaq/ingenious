<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, computed } from "vue";
export interface Props {
  size?: "sm" | "lg" | "";
  variant?: "primary";
  value?: string;
  disabled?: boolean;
  activeId?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "",
  variant: "primary",
  value: "",
  disabled: false,
  activeId: 0,
});

const emit = defineEmits<{
  (e: "click", value: Event): Event;
}>();

const isActive = computed(() => props.activeId === parseInt(props.value));

const classes = computed(() => [
  "btn",
  props.size ? `btn--${props.size}` : "",
  props.variant ? `btn--${props.variant}` : "",
  isActive.value ? `btn--${props.variant}-active` : "",
]);
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 12px 24px;
  min-width: 80px;
  border-radius: 4px;
  border: 1px solid gray;
  transition: ease 0.2s all;

  &--sm {
    padding: 8px 16px;
    min-width: 55px;
  }

  &--primary {
    color: white;
    background: $pr-blue;
    border-color: $pr-blue;

    &:hover,
    &:focus,
    &-active {
      background: $pr-blue-hover;
      border-color: $pr-blue-hover;
    }
    &:disabled {
      background: $pr-blue-disabled;
      border-color: $pr-blue-disabled;
      cursor: not-allowed;
    }
  }
}
</style>
