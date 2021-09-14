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
import { mapGetters } from "vuex";
import { addNewTask } from "../configs/firebase";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters({
      userId: "user/userId",
    }),
  },

  methods: {
    async handleFormSubmit() {
      try {
        await addNewTask(this.userId, {
          id: new Date().toISOString(),
          title: this.value,
          isCompleted: false,
        });
        this.value = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>