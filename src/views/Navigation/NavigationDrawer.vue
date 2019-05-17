<template>
  <v-navigation-drawer v-model="drawer">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Rooms</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider/>

    <v-btn @click="roomDialog = true" color="blue" class="white--text" depressed round>Add Room</v-btn>

    <RoomTile
      v-if="!isRoomsLoading"
      :rooms="rooms"
      @remove="handeRemoveRoom"
      @join="handleJoinRoom"
    />

    <RoomDialog :dialogProps.sync="roomDialog"/>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    RoomTile: () => import("@/components/RoomTile"),
    RoomDialog: () => import("@/components/RoomDialog")
  },

  data: () => ({
    isRoomsLoading: false,
    roomDialog: false
  }),

  created() {
    this.handleGetRooms();
  },

  computed: {
    ...mapState("navigation", ["isNavigationDrawer"]),
    ...mapState("data", ["rooms"]),
    drawer: {
      get() {
        return this.isNavigationDrawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations("navigation", ["setDrawer"]),
    ...mapActions("data", ["getAllRooms", "deleteRoom"]),
    async handleGetRooms() {
      try {
        this.isRoomsLoading = true;
        await this.getAllRooms();
      } finally {
        this.isRoomsLoading = false;
      }
    },

    async handeRemoveRoom(roomId) {
      await this.deleteRoom(roomId);
    },

    handleJoinRoom(roomId) {
      console.log("join", roomId);
    }
  }
};
</script>

<style>
</style>
