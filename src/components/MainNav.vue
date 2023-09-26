<script setup lang="ts">
const links = [
  { id: 1, name: "Lines", title: "Bus Lines" },
  { id: 2, name: "Stops", title: "Stops" },
];
</script>

<template>
  <ul class="navbar">
    <li v-for="link in links" :key="link.id" class="navbar__item">
      <RouterLink
        :to="{ name: link.name }"
        class="navbar__link"
        :title="link.title"
      >
        {{ link.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.navbar {
  background: white;
  border-radius: 4px;
  padding: 0 24px;
  display: flex;
  min-height: 65px;

  &__link {
    color: $lighten-3;
    text-decoration: none;
    padding: 20px 24px;
    display: inline-block;

    &:hover {
      font-weight: 700;
      color: $lighten-1;
      border-bottom: 2px solid $pr-blue;
    }

    &::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
}

.router-link-active {
  font-weight: 700;
  color: $lighten-1;
  border-bottom: 2px solid $pr-blue;
}
</style>
