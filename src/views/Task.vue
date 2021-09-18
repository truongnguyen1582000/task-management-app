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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "user/info",
    }),
  },

  methods: {
    ...mapActions("user", ["setStatus", "removeTask", "handleTaskClick"]),
  },
  provide() {
    return {
      handleTaskClick: this.handleTaskClick,
      setStatus: this.setStatus,
      removeTask: this.removeTask,
    };
  },

  components: {
    TaskList,
    TaskForm,
  },

  watch: {
    userInfo() {
      this.tasks = this.userInfo.tasks;
    },
  },

  mounted() {
    if (this.userInfo?.id) {
      this.tasks = this.userInfo.tasks;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>