<template>
  <div>
    <button class="btn button-filter"
      :key="filter"
      v-for="filter in filters"
      type="button"
      @click="filterCurrentTodos(filter)"
      :class="{active: currentFilter === filter}"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      filters: ["all", "active", "complited"],
      currentFilter: 'all',
    };
  },
  methods:{
    ...mapMutations(['filterTodos']),
    filterCurrentTodos(filter){
      this.currentFilter = filter
      this.filterTodos(filter)
    }
  }
};
</script>

<style lang="scss">
.btn {
  &.button-filter{
    margin-right: 20px;
  }
  &.active {
    border-color: rgba(175, 47, 47, 0.2);
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
