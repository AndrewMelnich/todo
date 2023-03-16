<template>
  <button class="btn btn--select-all" @click="selectAll">
    <div
      class="arrow arrow-right"
      :class="{ 'arrow-down': todos.length !== 0 }"
    ></div>
  </button>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  data() {
    return {
      hasItems: false,
    };
  },
  watch: {
    // todos(value) {
    //    console.log(value);
    // },
  },
  methods: {
    selectAll() {
      this.$emit("selectAll");
    },
    todosCounter(value) {
      if (value === 1) {
        this.hasItems = true;
      } else if (value === 0) {
        this.hasItems = false;
      }
    },
  },
};
</script>

<style lang="scss">
// .test {
//   position: absolute;
//   top: -80px;
//   left: 15px;
//   font-size: 20px;
// }

.btn--select-all {
  position: absolute;
  top: 37%;
  left: 1%;
  // background: rgba(0, 0, 0, 0.03);
  margin-right: 0;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: 0.5s;
}

.arrow-right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  animation: todoitem 0.3s forwards;
}
.arrow-down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  animation: todoitem 0.3s forwards;
}

@keyframes arrow-right {
  0% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

@keyframes arrow-down {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
