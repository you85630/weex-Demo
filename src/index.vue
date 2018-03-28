<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-size: 0;
}
* {
  margin:0;
  padding:0;
}
</style>
