<template>
  <div>
    <h1>Компонент просмотра задания {{ $route.params.todo }}</h1>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss"></style>
