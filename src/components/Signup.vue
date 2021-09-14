<template>
  <v-container style="max-width: 500px">
    <h1>SIGNUP</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:10"
        >
          <v-text-field
            v-model="username"
            :error-messages="errors"
            label="Username"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required|min:6"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> SIGNUP </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>

    <v-btn
      class="mt-10"
      style="width: 300px"
      @click="changeComponent('login')"
      block
      >Already have an account! Login now</v-btn
    >
  </v-container>
</template>

<script>
import { required, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { createUser } from "../configs/firebase";
import { mapActions } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("min", {
  ...min,
  message: "{_field_} may not be leaster than {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate();
      try {
        const newUser = await createUser({
          username: this.username,
          password: this.password,
          tasks: [],
          role: "employee",
        });

        this.login(newUser.id);
        this.$router.push({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    },
    clear() {
      this.username = "";
      this.password = "";
      this.$refs.observer.reset();
    },

    ...mapActions("user", ["login"]),
  },
  inject: ["changeComponent"],
};
</script>

<style lang="scss" scoped>
</style>