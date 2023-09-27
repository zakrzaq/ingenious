<script setup lang="ts"></script>

<template>
  <h2 class="base-title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.base-title {
  font-size: 14px;
  font-weight: 600;
  color: $pr-black;
  padding: 24px 24px 8px 24px;
}
</style>
