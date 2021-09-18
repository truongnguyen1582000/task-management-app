<template>
  <v-card shaped elevation="2" style="overflow: hidden">
    <h2 v-if="tasks.length === 0" class="text-center">Let's add new task</h2>
    <v-list v-else class="p-0">
      <v-list-item
        multiple
        v-for="task in tasks"
        :key="task.id"
        :class="task.isCompleted ? 'completed' : ''"
        class="d-flex"
      >
        <div @click="setStatus(task.id)">
          <v-list-item-action v-if="task.isCompleted" class="mr-6">
            <v-icon color="indigo">fas fa-check-square</v-icon>
          </v-list-item-action>
          <v-list-item-action v-else class="mr-6">
            <v-icon color="indigo">far fa-check-square</v-icon>
          </v-list-item-action>
        </div>
        <v-list-item-content @click="setStatus(task.id)">
          <v-list-item-title class="task-title">{{
            task.title
          }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="delete-btn">
          <v-btn icon @click="removeTask(task.id)">
            <v-icon color="indigo">far fa-trash-alt</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  inject: ["setStatus", "removeTask"],
  props: ["tasks"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.completed {
  background-color: rgba(0, 128, 0, 0.555);

  .task-title {
    text-decoration: line-through;
  }
}

.p-0 {
  padding: 0;
}
</style>