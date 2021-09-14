<template>
  <v-app>
    <v-main>
      <TaskForm />
      <TaskList :tasks="tasks" />
    </v-main>
  </v-app>
</template>

<script>
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import { useLoadTask } from "../configs/firebase";
export default {
  data() {
    return {
      tasks: [],
    };
  },

  components: {
    TaskList,
    TaskForm,
  },

  async mounted() {
    const response = await useLoadTask(localStorage.getItem("userId"));
    this.tasks = response.tasks;
  },

  async beforeUpdate() {
    if (localStorage.getItem("userId")) {
      const response = await useLoadTask(localStorage.getItem("userId"));
      this.tasks = response.tasks;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>