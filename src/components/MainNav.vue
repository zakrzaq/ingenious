<script setup lang="ts"></script>

<template>
  <ul class="nav px-4 bg-white rounded">
    <li class="nav-item">
      <RouterLink :to="{ name: 'Lines' }" class="nav-link py-3 px-4">
        Bus Lines
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink :to="{ name: 'Stops' }" class="nav-link py-3 px-4"> Stops </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.nav-link {
  color: var(--main-colors-main-universal-main-lighten-1, #33373c);
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
