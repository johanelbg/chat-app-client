<template>
  <div>
    <div>
      <span>{{chat.nickname}}</span>
      <span>{{chat.created_date}}</span>
    </div>
    <div>{{chat.message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    chat: { type: Object, required: true }
  }
};
</script>

<style>
</style>
