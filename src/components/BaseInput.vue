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
  <div class="position-relative d-flex flex-column max-w-content">
    <label :for="name" class="max-w-content">
      <slot />
    </label>
    <input
      :type="type"
      class="form-control px-3 py-2 max-w-content base-input"
      :id="id"
      :placeholder="placeholder"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @focus="focused = !focused"
      @blur="focused = !focused"
    />
    <div v-if="!!icon" class="position-absolute input-icon">
      <SearchIcon v-if="icon === 'search'" :focused="focused" />
    </div>
  </div>
</template>

<style scoped>
.base-input {
  color: var(--main-colors-main-main, #1a1a1a);
  line-height: 16px;
  min-width: 288px;
}
.base-input::placeholder {
  color: var(--main-colors-main-universal-main-lighten-3, #9a9da4);
}
.form-control {
  font-size: 12px;
  font-family: Inter;
  padding: 12px 16px;
}
.form-control:focus {
  border: var(--pr-blue) solid 1px;
  box-shadow: unset;
}

.input-icon {
  top: 0;
  right: 16px;
  transform: translateY(calc((50px - 24px) / 2));
}
</style>
