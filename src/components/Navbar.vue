<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ pageName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn v-if="!userName" link :to="{ name: 'Auth' }" text>Login</v-btn>
        <div v-else class="d-flex align-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                {{ userName }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item link :to="{ name: 'My profile' }">
                <v-btn text>Profile</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn @click="handleLogout" text>Logout</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
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

          <v-list-item :to="{ name: 'My profile' }" link>
            <v-list-item-title>My profile</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Task' }" link>
            <v-list-item-title>Task</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Profiles' }" link @click="handleSnackbar">
            <v-list-item-title>Profiles</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        You have not permission to come this part !
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    snackbar: false,
    drawer: false,
    group: null,
    pageName: "",
  }),

  computed: {
    ...mapGetters({
      userInfo: "user/info",
    }),
    userName() {
      return this.userInfo?.fullname?.split(" ").slice(-1).join("");
    },
  },

  methods: {
    ...mapActions("user", ["logout", "getUserInfo"]),
    handleLogout() {
      this.logout();
      if (this.$route.path !== "home") {
        this.$router.push({ name: "Home" });
      }
    },
    handleSnackbar() {
      if (this.userInfo.role !== "admin") {
        this.snackbar = true;
      }
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },

    async $route(to) {
      this.pageName = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
</style>