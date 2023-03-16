<template>
  <div class="todo-list">
    <div class="content">
      <ul class="list">
        <li class="item" :key="todo" v-for="todo in todos">
          <TodoListItem
            :todo="todo"
          />
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="counter">{{todos.length}} items left</div>
        <div class="filter">
          <TodoListFilter/>
        </div>
        <button class="btn btn--remove-complited"
          @click="deleteComlitedTodos"
        >delete complited</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue"
import TodoListFilter from "@/components/TodoListFilter.vue";

export default {
  props: {
    todos: Array,
  },
  components: {
    TodoListItem,
    TodoListFilter,
  },
  methods:{
    deleteComlitedTodos(){
      this.$emit('deleteComlitedTodos')
    },
  }
};
</script>

<style lang="scss">
// .btn--remove-complited{
//   background-color: red;
// }

ul.list {
  padding: 0;
}
.list {
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.item {
  list-style: none;
  border-bottom: 1px solid #ededed;
  opacity: 0;
  animation: todoitem 0.3s forwards;
  &:last-child {
    border-bottom: 0 none;
  }
}

@keyframes todoitem {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 14px;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
.footer-content {
  display: flex;
  align-items: center;
  position: relative;
}
.filter {
  flex: 1;
}


</style>
