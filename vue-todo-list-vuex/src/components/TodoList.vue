<template>
  <ul class="items">
    <template v-for="(item,index) in filteredTodoList">
      <li :key="index" :class="item.status">
        <input
          name="status-toggle"
          :checked="item.status === 'completed'"
          type="checkbox"
          @change="handleToggleActive(index)"
        />
        <label href @click="update(index)" class="content">{{item.content}}</label>
      </li>
    </template>
  </ul>
</template>
</ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "todo-list",
  computed: {
    filteredTodoList: function() {
      return this.$store.getters.filteredTodoList;
    }
  },
  methods: {
    handleToggleActive: function(index) {
      this.$store.commit("changeStatus", index);
    },
    update: function(index) {
      this.$store.dispatch("updateTodos", index);
    }
  }
};
</script>

<style scoped>
</style>
