<template>
  <v-app>
    <v-container class="wrapper">
      <h2 class="text-center mb-4">MANAGE USER TASK</h2>
      <v-card outlined elevation="2" style="overflow: hidden">
        <h3 v-if="profiles.length === 0">There are no profile !</h3>
        <v-list v-else>
          <v-list-item
            v-for="profile in profiles"
            :key="profile.id"
            link
            :to="'/profiles/' + profile.id"
          >
            <v-list-item-content>
              {{ profile.fullname }}
            </v-list-item-content>
            <v-list-item-action class="delete-btn">
              <v-btn color="blue"> SEE TASK </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      profiles: [],
    };
  },

  methods: {
    ...mapActions("profiles", ["getAllProfile"]),
  },

  computed: {
    ...mapGetters({
      profilesInfo: "profiles/all",
    }),
  },

  created() {
    this.getAllProfile();
    this.profiles = this.profilesInfo;
  },

  provide() {
    return {
      profiles: this.profilesInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 500px;
}
</style>