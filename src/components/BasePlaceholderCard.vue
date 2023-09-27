<script setup lang="ts"></script>

<template>
  <div class="placeholder-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.placeholder-card {
  background: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%239A9DA4' stroke-width='2' stroke-dasharray='34%2c 28' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}
</style>
