<template>
  <div class="todo-input">
    <TodoSelect @selectAll="selectAll" :todos="todos" />
    <div class="todo-input__error">
      {{ validation.firstError("todo.name") }}
    </div>
    <input
      type="text"
      placeholder="Todo Name"
      autofocus
      :class="{ 'valid-error': validation.hasError('todo.name') }"
      class="input"
      v-model="todo.name"
      @keydown.enter="addNewTodo"
    />
  </div>
</template>

<script>
import TodoSelect from "@/components/TodoSelect.vue";
import { Validator } from 'simple-vue3-validator';
import { mapMutations } from 'vuex'

let unicId = 0;
export default {
  mixins: [require("simple-vue3-validator").mixin],

  validators: {
    "todo.name"(value) {
      return Validator.value(value).required('Поле не может быть пустым');
    },
  },

  components: { TodoSelect },

  props:{
    todos: Array
  },

  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false,
      },
    };
  },
  methods: {
    ...mapMutations(['addTodo']),

    addNewTodo() {
      this.$validate().then(success => {
        if (!success) return;
        unicId++;
        this.todo.id = unicId;
        this.addTodo({ ...this.todo });
        // this.$emit("addTodo", );
        this.todo.name = "";

        this.validation.reset();
      })

    },
    selectAll() {
      this.$emit("selectAll");
    },
  },
};
</script>

<style lang="scss">
.todo-input {
  position: relative;
  display: flex;
  background: rgba(0, 0, 0, 0.03);
}
.todo-input__error {
  position: absolute;
  color: firebrick;
  top: -50%;
  left: 0;
}
.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: 2px solid transparent;
  background: rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  box-sizing: border-box;
}
.valid-error {
  border: 2px solid firebrick;
}
</style>
