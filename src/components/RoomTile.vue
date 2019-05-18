<template>
  <v-list subheader>
    <v-list-tile v-for="room in rooms" :key="room._id" avatar @click="$emit('join', room)">
      <v-list-tile-content>
        <v-list-tile-title v-html="room.room_name"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon color="red" @click.stop="$emit('remove', room._id)">remove</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    rooms: { type: Array, required: true }
  }
};
</script>

<style>
</style>
