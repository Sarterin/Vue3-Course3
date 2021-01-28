<template>
  <header class="navbar">
    <router-link to="/">
      <h3>Freelance</h3>
    </router-link>
    <ul class="navbar-menu">
      <li v-for="(name, route) in routes" :key="route">
        <router-link :to="route">{{ name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  setup() {
    return {
      routes: {
        "/": "Все задачи",
        "/new": "Создать"
      }
    };
  }
};
</script>

<style scoped></style>
