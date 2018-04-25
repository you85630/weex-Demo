<template>
  <div class="top-cut">
    <div class="cut-left">
      <text  class="awesomeFont cut">&#xf0ec;</text>
      <text class="cut-name">切换学生</text>
    </div>
    <div class="cut-middle">
      <div class="middle-li">
        <text class="awesomeFont icon">&#xf2be;</text>
        <text class="title">学生项目：</text>
        <text class="text">{{data.name}}</text>
      </div>
      <div class="middle-li">
        <text class="awesomeFont icon">&#xf2bc;</text>
        <text class="title">一卡通号：</text>
        <text class="text">{{data.number}}</text>
      </div>
    </div>
    <div class="cut-right">
      <text class="card">一卡通</text>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.awesomeFont{
  font-family:awesomeFont
}
.top-cut{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px;
  width: 750px;
  background-color: #fff;
}
.cut-left{
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.cut-middle{
  margin:0  20px;
  padding: 0 20px;
  width: 450px;
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: #eee;
  flex-direction: column;
  justify-content:space-between;
}
.cut-right{
  flex-direction: column;
  justify-content: flex-end;
}
.cut{
  color:#3c9ffc;
  font-size: 60px;
}
.cut-name{
  color:#3c9ffc;
  text-align:center;
  font-size: 26px;
}
.middle-li{
  flex-direction: row;
}
.icon{
  margin-right: 10px;
  font-size: 34px;
  color: #999;
}
.title{
  color: #999;
  font-size: 30px;
}
.text{
  font-size: 30px;
}
.card{
  padding:2px 18px;
  border-radius:4px;
  background-color:#3c9ffc;
  color:#fff;
  font-size: 26px;
}
</style>
