<template>
  <v-app id="app">
    <router-view @logout_requested="logout()"/>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("user/logout")
        .then(() => this.$router.push({ name: "login" }))
        .catch(err => console.error("Could not log out")); // TODO
    }
  }
};
</script>

<style>

</style>
