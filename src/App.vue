<template>
  <v-app>
    <Navbar />
    <v-container>
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-app>
</template>

<style lang="scss">
</style>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
