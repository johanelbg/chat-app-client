<template>
  <v-app>
    <MainToolbar/>
    <NavigationDrawer/>
  </v-app>
</template>

<script>
export default {
  components: {
    MainToolbar: () => import("@/views/Navigation/MainToolbar"),
    NavigationDrawer: () => import("@/views/Navigation/NavigationDrawer")
  }
};
</script>
