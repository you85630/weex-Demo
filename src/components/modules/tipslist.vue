<template>
  <div class="tips-list">
    <text class="tips-title">什么是小思成长档案？</text>
    <text class="tips-text">{{data}}</text>
    <text class="tips-text">{{data}}</text>
    <text class="tips-text">{{data}}</text>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.tips-list {
  padding: 10px 20px;
  width: 750px;
}
.tips-title {
  display: block;
  margin: 10px 0;
  color: #666;
  font-size: 30px;
}
.tips-text {
  display: block;
  color: #888;
  font-size: 26px;
}

</style>
