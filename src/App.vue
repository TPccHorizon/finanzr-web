<template>
  <div id="app">
    <MainLayout/>
  </div>
</template>

<script>
import MainLayout from "@/views/MainLayout";

export default {
  name: 'App',
  components: {
    MainLayout: MainLayout,
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
