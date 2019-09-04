<template>
  <div class="input-form">
    <input type="input" v-model="inputtingItem" />
    <button @click="handleCreateTodo">Add</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "create-form",
  data: function() {
    return {
      inputtingItem: ""
    };
  },
  methods: {
    handleCreateTodo: function() {
      this.$store.commit("addTodoList", this.inputtingItem);
    }
  }
};
</script>

<style scoped>
</style>