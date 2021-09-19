<template>
  <v-app class="container">
    <v-container class="d-flex">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </v-container>
  </v-app>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
export default {
  data() {
    return {
      component: "login",
    };
  },
  components: {
    login: Login,
    signup: Signup,
  },
  methods: {
    changeComponent(cpn) {
      this.component = cpn;
    },
  },
  provide() {
    return {
      changeComponent: this.changeComponent,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 550px;
}
</style>