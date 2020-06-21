<template>
  <div id="app">
    <MainTable/>
  </div>
</template>

<script>
import MainTable from "@/views/MainTable";

export default {
  name: 'App',
  components: {
    MainTable,
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
