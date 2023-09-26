<script setup lang="ts">
import { ref, defineProps, defineEmits, withDefaults } from "vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";

withDefaults(
  defineProps<{
    modelValue: string;
    type?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    icon?: "" | "search";
  }>(),
  {
    modelValue: "",
    type: "text",
    name: "",
    id: "",
    placeholder: "Search...",
    icon: "",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", value: string): string;
}>();

const focused = ref(false);
</script>

<template>
  <div class="base-input">
    <label :for="name" class="base-input__label">
      <slot />
    </label>
    <input
      :type="type"
      class="base-input__input"
      :id="id"
      :placeholder="placeholder"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @focus="focused = !focused"
      @blur="focused = !focused"
    />
    <div v-if="!!icon" class="base-input__icon">
      <SearchIcon v-if="icon === 'search'" :focused="focused" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  position: relative;
  display: inline-block;

  /* &__label {} */

  &__input {
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid $lighten-3;
    font-size: 12px;
    line-height: 16px;
    color: $pr-black;
    min-width: 288px;
    outline: 0;

    &::placeholder {
      color: $lighten-3;
    }
    &:focus {
      border-color: $pr-blue;
    }
  }

  &__icon {
    position: absolute;
    right: 16px;
    top: 0;
    transform: translateY(calc((46px - 20px) / 2));
  }
}
</style>
