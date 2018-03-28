<template>
  <div class="top-cut">
    <div class="cut-left">
      <image class="cut" src="http://osc94pt0z.bkt.clouddn.com/round_transfer_fill.png"/>
      <text class="cut-name">切换学生</text>
    </div>
    <div class="cut-middle">
      <div class="middle-li">
        <image class="icon" src="http://osc94pt0z.bkt.clouddn.com/round_people_fill.png"/>
        <text class="title">学生项目：</text>
        <text class="text">{{user.name}}</text>
      </div>
      <div class="middle-li">
        <image class="icon" src="http://osc94pt0z.bkt.clouddn.com/round_text_fill.png"/>
        <text class="title">一卡通号：</text>
        <text class="text">{{user.number}}</text>
      </div>
    </div>
    <div class="cut-right">
      <text class="card">一卡通</text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '思来氏',
        number: '1234567890'
      }
    }
  }
}
</script>

<style scoped>
.top-cut{
  align-items: flex-end;
  flex-direction: row;
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
}
.cut-right{}
.cut{
  width: 45px;
  height: 45px;
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
  margin-right: 6px;
  width: 36px;
  height: 36px;
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
