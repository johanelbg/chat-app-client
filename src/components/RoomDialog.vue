<template>
  <v-dialog v-model="dialog" overlay max-width="500px" transition="dialog-transition">
    <v-card class="pa-3">
      <v-text-field label="Room Name" v-model="roomName"/>

      <div class="text-xs-right">
        <v-btn
          color="blue"
          class="white--text"
          round
          :loading="isLoading"
          @click="handleAddRoom"
        >Submit</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    dialogProps: Boolean
  },

  data: () => ({
    roomName: "",
    isLoading: false
  }),

  computed: {
    dialog: {
      get() {
        return this.dialogProps;
      },
      set(val) {
        this.$emit("update:dialogProps", val);
      }
    }
  },

  methods: {
    ...mapActions("data", ["postRoom"]),
    async handleAddRoom() {
      try {
        this.isLoading = true;
        await this.postRoom({
          room_name: this.roomName
        });
      } finally {
        this.isLoading = false;
        this.dialog = false;
        this.roomName = "";
      }
    }
  }
};
</script>

<style>
</style>
