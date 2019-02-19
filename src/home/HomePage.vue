<template>
  <div>
    <h1>Hi</h1>
    <p>You're logged in to Konsum</p>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
    <p>
      <router-link to="/categories">Categories</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user;
    }
  },
  created() {
    this.$store.dispatch("users/getAll");
  }
};
</script>
