<template>
  <div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
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
      console.log("cpn");
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
</style>