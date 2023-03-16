<template>
  <div class="todo">
    <TodoInput 
      @selectAll="selectAll" 
      :todos="todos"
    />
    <TodoList
      v-if="todos.length >= 1"
      :todos="filteredTodos"
      @deleteComlitedTodos="deleteComlitedTodos"
    />
  </div>
  <pre class="pre">
    <!-- {{ todos }} -->
    <!-- {{ filter }} -->
    {{todos}}
  </pre>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { mapState } from "vuex";

export default {
  // data() {
  //   return {
  //     todos: [],
  //     filter: "all",
  //   };
  // },
  components: {
    TodoInput,
    TodoList,
  },
  computed: {
    ...mapState({
      todos: state => state.a.todos,
      filter: state => state.a.filter  
    }),
    filteredTodos() {
      switch (this.filter) {
        case "active":
          return this.todos.filter((item) => item.checked === false);
        case "complited":
          return this.todos.filter((item) => item.checked);
      }
      return this.todos;
    },
  },
  methods: {    
    deleteComlitedTodos() {
      this.todos = this.todos.filter((item) => item.checked === false);
    },
    selectAll() {
      if (this.todos.every((item) => item.checked !== true)) {
        this.todos.forEach((item) => {
          item.checked = true;
        });
      } else {
        this.todos.forEach((item) => {
          item.checked = false;
        });
      }
    },
  },
};
</script>

<style lang="scss">
.todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 1);
}

.todo-list {
  opacity: 0;
  animation: todolist 0.3s forwards;
}

@keyframes todolist {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.pre {
  text-align: left;
}
</style>
