<template>
  <v-toolbar>
    <v-toolbar-side-icon @click="setDrawer(!isNavigationDrawer)" />
    <v-toolbar-title>Title</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("navigation", ["isNavigationDrawer"])
  },
  methods: {
    ...mapMutations("navigation", ["setDrawer"])
  }
};
</script>

<style>
</style>
