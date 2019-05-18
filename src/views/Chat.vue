<template>
  <v-container>
    <v-layout column v-if="!isRoomSelected">Start by joining a chat</v-layout>

    <v-layout column v-if="isChatLoading">Loading....</v-layout>

    <v-layout column v-if="!isChatLoading && isRoomSelected">
      <div>Chat: {{selectedRoom.room_name}}</div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    isChatLoading: false
  }),

  computed: {
    ...mapState("data", ["selectedRoom"]),
    ...mapGetters("data", ["isRoomSelected"])
  },

  methods: {
    ...mapActions("data", ["getChatByRoomId"]),
    async handleGetChat(roomId) {
      try {
        this.isChatLoading = true;
        await this.getChatByRoomId(roomId);
      } finally {
        this.isChatLoading = false;
      }
    }
  },

  watch: {
    selectedRoom(next) {
      if (next._id) {
        this.handleGetChat(next._id);
      }
    }
  }
};
</script>

<style>
</style>
