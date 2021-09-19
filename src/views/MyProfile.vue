<template>
  <v-app>
    <div>Your name: {{ userInfo.fullname }}</div>
    <div>Role: {{ userInfo.role }}</div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      userInfo: "user/info",
    }),
    userFullName() {
      return this.userInfo?.fullname;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>