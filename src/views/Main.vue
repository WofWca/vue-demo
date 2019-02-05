<template>
  <div>
    <v-navigation-drawer v-model="drawer_opened" fixed app>
      <v-list>
        <!-- TODO get rid of active-class?-->
        <v-list-tile
          v-for="item in menu_items"
          :to="{ name: item.router_link_name }"
          :key="item.text"
          exact-active-class="primary--text"
          active-class="undefined"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon_name }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          exact-active-class="primary--text"
          active-class="undefined"
          @click="$emit('logout_requested')"
        >
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app dark color="primary">
      <v-toolbar-side-icon @click="drawer_opened = !drawer_opened"/>
      <v-toolbar-title>{{ username }}</v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="$emit('logout_requested')">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    let menu_items = [
      {
        text: "Dashboard",
        icon_name: "home",
        router_link_name: "main"
      },
      {
        text: "Well",
        icon_name: "event_available",
        router_link_name: "well"
      },
      {
        text: "Add User",
        icon_name: "person_add",
        router_link_name: "add_user"
      },
      {
        text: "Create Group",
        icon_name: "group_add",
        router_link_name: "create_group"
      },
      {
        text: "Complaints",
        icon_name: "report",
        router_link_name: "complaints"
      },
      {
        text: "Other",
        icon_name: "my_location",
        router_link_name: "my_zone"
      }
    ];
    return {
      menu_items,
      drawer_opened: true
    };
  },
  computed: {
    ...mapGetters(["authorized"]),
    ...mapState({
      username: state => state.user.name
    })
  }
};
</script>

<style>
.app-bar {
  position: absolute;
}
</style>

