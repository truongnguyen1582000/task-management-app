<template>
  <v-container style="width: 600px" dense>
    <form @submit.prevent="handleFormSubmit" class="d-flex align-center">
      <v-text-field
        v-model="value"
        label="Enter your task"
        hide-details="auto"
        outlined
        class="mr-2"
      ></v-text-field>
      <v-btn type="submit" dark height="56px" class="margin-left: 24px"
        >ADD NEW TASK</v-btn
      >
    </form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "user/info",
    }),
  },

  methods: {
    ...mapActions("user", ["addNewTask"]),
    handleFormSubmit() {
      if (this.value.trim() === "") {
        this.value = "";
        return;
      }
      this.addNewTask({
        id: new Date().toISOString(),
        title: this.value,
        isCompleted: false,
      });
      this.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>