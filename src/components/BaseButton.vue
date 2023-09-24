<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, computed } from "vue";
export interface Props {
  size?: "sm" | "lg" | "";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  outline?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "";
  disabled?: boolean;
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "",
  variant: "primary",
  outline: "",
  disabled: false,
  active: false,
});

const emit = defineEmits<{
  click: (e: Event) => Event;
}>();

const classes = computed(() => [
  "btn",
  props.size ? `btn-${props.size}` : "",
  props.variant ? `btn-${props.variant}` : "",
  props.outline ? `btn-${props.outline}-${props.variant}` : "",
  props.active ? "active" : "",
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

<style scoped></style>
