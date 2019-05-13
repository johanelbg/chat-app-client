<template>
  <v-app>
    <MainToolbar />
    <NavigationDrawer />
  </v-app>
</template>

<script>
export default {
  components: {
    MainToolbar: () => import("@/components/MainToolbar"),
    NavigationDrawer: () => import("@/components/NavigationDrawer")
  }
};
</script>
