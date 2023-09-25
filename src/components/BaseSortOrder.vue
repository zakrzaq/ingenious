<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false,
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): boolean;
}>();

const toggleOrder = () => emit("update:modelValue", !props.modelValue);
</script>

<template>
  <div class="d-flex gap-2 fs-bolder font-size-12">
    <label class="fw-bolder"><slot /></label>
    <div
      class="d-flex flex-column justify-content-center align-items-center gap-1 cursor-pointer"
      @click="toggleOrder"
    >
      <span
        class="arrow arrow-up"
        :class="props.modelValue ? 'arrow-up-selected' : ''"
      ></span>
      <span
        class="arrow arrow-down"
        :class="!props.modelValue ? 'arrow-down-selected' : ''"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.arrow-up {
  border-bottom: 5px solid
    var(--light-main-colors-main-universal-main-lighten-3, #9a9da4);
}
.arrow-down {
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
