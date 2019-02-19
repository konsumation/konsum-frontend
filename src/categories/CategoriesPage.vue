<template>
  <div>
    <h1>Categories</h1>
    <ul v-if="categories.items">
      <li v-for="category in categories.items" :key="category.name">
        {{ category.name + " " + category.unit }}
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
