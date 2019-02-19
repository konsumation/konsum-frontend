<template>
  <div>
    <h1>Categories</h1>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.key">
        {{ user.key + " " + user.value }}
      </li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories.all;
    }
  },
  created() {
    this.$store.dispatch("categories/getAll");
  }
};
</script>
