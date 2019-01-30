<template>
  <div>
    <h1>Hi</h1>
    <p>You're logged in to Konsum</p>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{ users.error }}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">
        {{ user.firstName + " " + user.lastName }}
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
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    }
  },
  created() {
    this.$store.dispatch("users/getAll");
  }
};
</script>
