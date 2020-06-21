<template>
  <div id="app">
    <MainTable/>
  </div>
</template>

<script>
import MainLayout from "@/views/MainLayout";

export default {
  name: 'App',
  components: {
    MainTable: MainLayout,
  },
}
</script>

<style lang="scss">
  @import 'sass/variables.scss';
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: $body-font-family;
  }
</style>
