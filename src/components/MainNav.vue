<script setup lang="ts">
</script>

<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink :to="{ name: 'Lines' }" class="nav-link active">
        Bus Lines
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink :to="{ name: 'Stops' }" class="nav-link">
        Stops
      </RouterLink>
    </li>
  </ul>
</template>


<style scoped>
.nav {
  padding: 0 24px;
  border-radius: 4px;
  background: var(--main-colors-main-white, #FFF);
}

.nav-link {
  padding: 18px 24px;
  color: var(--main-colors-main-universal-main-lighten-1, #33373C);
  text-align: center;
  font-weight: 500;
  line-height: 24px;
}

.nav-link.active {
  color: var(--main-colors-main-universal-main-lighten-1, #33373C);
  font-weight: 700;
}

.nav-item .active,
.nav-item:hover {
  border-bottom: var(--workspaces-rep-io-rep-io-primary, #1952E1) solid 2px;
}
.nav-item .active:hover {
  border-bottom: unset;
}

</style>
