<template>
  <div class="todo-item">
    <label class="label" :class="{checked: todo.checked}">
      <div class="input-block">
        <input type="checkbox"
        class="input" 
        @change="checkTodoAsComplited" 
        :checked="todo.checked"
      />
      </div>
      <div class="title">{{ todo.name }}</div>
    </label>
    <div class="buttons">
      <router-link 
        :to="`/view/${todo.name}`"
        class="btn btn-view"
      >...</router-link>
      <button type="button" class="btn btn-remove" @click="removeExistedTodo">X</button>
    </div>
  </div>
</template>

<script> 

import { mapMutations } from 'vuex';

export default {
  props: {
    todo: Object,
  },
  methods: {
    ...mapMutations(['removeTodo', 'checkTodo']),
    removeExistedTodo() {
      this.removeTodo(this.todo.id)
    },
    checkTodoAsComplited(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked,
      };
      this.checkTodo(todoItem);
    },
  },
};
</script>

<style lang="scss">

.todo-item {
  display: flex;
  align-items: center;

  &:hover {
    .btn-remove {
      visibility: visible;
    }
    .btn-view {
      visibility: visible;
    }
  }
}

.checked {
  text-decoration: line-through;
}

.label {
  display: flex;
  align-items: center;
  flex: 1;
}

.input-block {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  padding: 15px 0;
  display: block;
  line-height: 1.2;
}

.buttons {
  margin-right: 15px;
  display: flex;
  width: 70px;
  justify-content: space-between;
  align-items: center;
}

.btn-remove {
  border: none;
  color: firebrick;
  font-size: 20px;
  visibility: hidden;
}

.btn-view {
  visibility: hidden;
  align-items: center;
  text-decoration: none;
}


</style>
