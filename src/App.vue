<template>
  <v-app>
    <Navbar />
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<style lang="scss">
</style>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>
