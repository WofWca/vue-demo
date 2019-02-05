<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 sm12>
                      <v-text-field
                        v-model="username"
                        prepend-icon="person"
                        name="username"
                        label="Username"
                        type="text"
                        :rules="username_rules"
                      />
                    </v-flex>
                    <v-flex xs12 sm12>
                      <v-text-field
                        v-model="email"
                        prepend-icon="alternate_email"
                        name="email"
                        label="E-mail"
                        type="email"
                        :rules="email_rules"
                      />
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="password"
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        type="password"
                        :rules="password_rules"
                      />
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        v-model="password_repeat"
                        name="password_repeat"
                        label="Repeat password"
                        type="password"
                        :rules="password_repeat_rules"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="register()" color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
          <v-layout align-center justify-center mt-4>
            <span>or&nbsp;</span>
            <router-link :to="{ name: 'login' }">Login</router-link>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  // TODO validation https://vuetifyjs.com/en/components/forms
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      password_repeat: "",
      // Form validation.
      // TODO DRY backend.
      username_rules: [
        username => /^[A-Za-z\d\s_\.]+$/.test(username) ||
          'Only A-Z, a-z, digits, space, underscore ("_") and dot (".")'
      ],
      email_rules: [
        email => !!email || 'Required',
        email => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ||
          'Invalid'
      ],
      password_rules: [
        password => { 
          const password_min_length = 8
          return password.length >= password_min_length ||
            `At least ${password_min_length} characters`
        },
        password => password.search(/[A-Z]/) !== -1 ||
          'At least one uppercase letter'
      ],
      password_repeat_rules: [
        password_repeat => this.password === password_repeat ||
          'Passwords do not match'
      ],
    }
  },
  methods: {
    register() {
      console.log("Register stub"); // TODO
    }
  }
}
</script>

<style>

</style>
