<template>
  <v-container ma-0 pa-0 class="main-box">
    <v-layout column v-if="!isRoomSelected">Start by joining a chat</v-layout>

    <v-layout column v-if="isChatLoading">Loading....</v-layout>

    <v-layout column style="height:100%" v-if="!isChatLoading && isRoomSelected">
      <v-flex xs1>Chat: {{selectedRoom.room_name}}</v-flex>

      <v-flex xs10>
        <ChatTile v-for="chat in chats" :key="chat.id" :chat="chat"/>
      </v-flex>

      <v-flex xs1>
        <v-text-field label="Message" v-model="message" @keypress.enter="handleSendMessage"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    ChatTile: () => import("@/components/ChatTile")
  },

  data: () => ({
    isChatLoading: false,
    message: ""
  }),

  computed: {
    ...mapState("data", ["selectedRoom", "chats"]),
    ...mapGetters("data", ["isRoomSelected"])
  },

  methods: {
    ...mapActions("data", ["getChatByRoomId", "sendMessage"]),
    async handleGetChat(roomId) {
      try {
        this.isChatLoading = true;
        await this.getChatByRoomId(roomId);
      } finally {
        this.isChatLoading = false;
      }
    },

    async handleSendMessage() {
      try {
        await this.sendMessage(this.message);
        await this.$socket.emit("postMessage", this.message);
      } finally {
        this.message = "";
      }
    }
  },

  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    postMessage: function(val) {
      console.log("val", val);
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

<style scoped>
.main-box {
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 64px);
}
</style>
