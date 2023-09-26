<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    sort: boolean;
    modelValue: boolean;
  }>(),
  {
    sort: false,
    modelValue: false,
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): boolean;
}>();

const toggleOrder = () => emit("update:modelValue", !props.modelValue);
</script>

<template>
  <div class="base-title">
    <label><slot /></label>
    <div v-if="sort" class="base-title__arrows" @click="toggleOrder">
      <span
        class="arrow arrow-up"
        :class="props.modelValue ? 'arrow-up--selected' : ''"
      ></span>
      <span
        class="arrow arrow-down"
        :class="!props.modelValue ? 'arrow-down--selected' : ''"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-title {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  padding: 24px;
  display: flex;
  gap: 8px;
  font-size: 12px;

  &__arrows {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
}

.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  &-up {
    border-bottom: 5px solid $lighten-3;

    &--selected {
      border-bottom: 5px solid $pr-blue;
    }
  }

  &-down {
    border-top: 5px solid $lighten-3;

    &--selected {
      border-top: 5px solid $pr-blue;
    }
  }
}
</style>
