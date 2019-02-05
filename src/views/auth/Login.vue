<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Log in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="log_in()" color="primary">Log in</v-btn>
            </v-card-actions>
          </v-card>
          <v-layout align-center justify-center mt-4>
            <span>or&nbsp;</span>
            <router-link :to="{ name: 'register' }">Register</router-link>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  // TODO on leave clean user data? Same with register
  methods: {
    log_in() {
      this.$store.dispatch("user/log_in", {
        username: this.username,
        password: this.password
      })
        .then(val => {
          // TODO 'next' query or something like that.
          this.$router.push({ name: "main" });
          this.password = "";
        })
        .catch(err => {
          // TODO login error notification (e.g. Snackabar).
          console.error(err);
        });
    }
  },
  data: () => {
    return {
      username: "",
      password: ""
    }
  }
};
</script>

<style>

</style>
