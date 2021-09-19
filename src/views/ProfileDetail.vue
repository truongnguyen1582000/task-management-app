<template>
  <v-card>
    <v-card-text class="font-weight-bold black--text">
      {{ profile.fullname }}
    </v-card-text>
    <task-form />
    <sub-task-list :tasks="profile.tasks" />
  </v-card>
</template>

<script>
import SubTaskList from "../components/SubTaskList.vue";
import TaskForm from "../components/TaskForm.vue";
export default {
  components: { SubTaskList, TaskForm },
  props: ["profileId"],
  data() {
    return {
      profile: {},
    };
  },
  provide() {
    return {
      profileId: this.profileId,
    };
  },

  inject: ["profiles"],

  methods: {
    loadNewProfile() {
      this.profile = this.profiles.find(
        (profile) => profile.id === this.profileId
      );
    },
  },
  mounted() {
    this.loadNewProfile();
  },

  watch: {
    profileId() {
      this.loadNewProfile();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>