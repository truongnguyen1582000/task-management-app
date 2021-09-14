<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ pageName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn v-if="userId === ''" link :to="{ name: 'Auth' }" text
          >Login</v-btn
        >
        <v-btn v-else @click="handleLogout" text>Logout</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Home' }" link exact>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Profile' }" link>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Task' }" link>
            <v-list-item-title>Task</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'User' }" link>
            <v-list-item-title>User</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    group: null,
    pageName: "",
  }),
  computed: {
    ...mapGetters({
      userId: "user/userId",
    }),
  },

  methods: {
    ...mapActions("user", ["logout"]),
    handleLogout() {
      this.logout();
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },

    $route(to) {
      this.pageName = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>