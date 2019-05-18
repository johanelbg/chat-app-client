<template>
  <v-app>
    <MainToolbar/>
    <Chat/>
    <NavigationDrawer/>
  </v-app>
</template>

<script>
export default {
  components: {
    MainToolbar: () => import("@/views/Navigation/MainToolbar"),
    NavigationDrawer: () => import("@/views/Navigation/NavigationDrawer"),
    Chat: () => import("@/views/Chat")
  }
};
</script>
