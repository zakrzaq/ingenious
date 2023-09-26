<script setup lang="ts"></script>

<template>
  <div class="placeholder-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.placeholder-card {
  background: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed gray;
  min-height: 350px;
}
</style>
