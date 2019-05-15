<template>
  <v-container class="background pa-2 ma-0">
    <v-layout column align-center justify-center style="height: 100%">
      <div class="input-box">
        <v-text-field solo label="Username" v-model="nickname" @keypress.enter="handleNickname"/>
      </div>
      <div>A Chat Wep App, Learn more about my project on GitHub</div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    nickname: ""
  }),

  methods: {
    ...mapMutations("data", ["setNickname"]),
    handleNickname() {
      this.setNickname(this.nickname);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.background {
  height: 100vh;
  max-width: 100%;
  background: #43c6ac;
  background: -webkit-linear-gradient(to top, #191654, #43c6ac);
  background: linear-gradient(to top, #191654, #43c6ac);
}
.input-box {
  max-width: 800px;
  width: 100%;
}
</style>
