<template>
  <v-card shaped elevation="2" style="overflow: hidden">
    <h2 v-if="tasks.length === 0" class="text-center">Let's add new task</h2>
    <v-list v-else>
      <v-list-item-group multiple v-for="task in tasks" :key="task.name">
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="task.isCompleted ? active : ''"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["tasks"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>