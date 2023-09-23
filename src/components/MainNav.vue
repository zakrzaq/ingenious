<script setup lang="ts"></script>

<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink :to="{ name: 'Lines' }" class="nav-link">
        Bus Lines
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink :to="{ name: 'Stops' }" class="nav-link"> Stops </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.nav {
  padding: 0 24px;
  border-radius: 4px;
  background: var(--main-colors-main-white, #fff);
}

.nav-link {
  padding: 18px 24px;
  color: var(--main-colors-main-universal-main-lighten-1, #33373c);
  text-align: center;
  font-weight: 500;
  line-height: 24px;
}

.router-link-active {
  color: var(--main-colors-main-universal-main-lighten-1, #33373c);
  font-weight: 700;
  border-bottom: var(--workspaces-rep-io-rep-io-primary, #1952e1) solid 2px;
}

.router-link-active:hover {
  border-bottom: unset;
}

.nav-item .active,
.nav-item:hover {
  border-bottom: var(--workspaces-rep-io-rep-io-primary, #1952e1) solid 2px;
}
</style>
