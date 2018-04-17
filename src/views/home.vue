<template>
  <div class="home">
    <scroller class="top-main">
      <router-view/>
    </scroller>
    <div class="bottom-nav">
      <div v-for="(li, index) in navList" :key="index" class="nav" :class="[nowInx===index?'active':'']"  @click="jump(index)">
        <image class="icon" :src="li.icon"/>
        <text class="title">{{li.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowInx: 0,
      navList: [{
        title: '页面1',
        linkto: '/home/page1',
        icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
      }, {
        title: '页面2',
        linkto: '/home/page2',
        icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
      }, {
        title: '页面3',
        linkto: '/home/page3',
        icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
      }, {
        title: '页面4',
        linkto: '/home/page4',
        icon: '//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
      }]
    }
  },
  methods: {
    jump (key) {
      this.nowInx = key
      let link = this.navList[key].linkto
      this.$router.push(link)
    }
  },
  created () {
    this.$store.default.commit('getData')
  }
}
</script>

<style scoped>
.home{
  position: absolute;
  top:0;
  bottom:0;
  width:750px;
}
.top-main{
  position: fixed;
  top:0;
  right:0;
  bottom:120px;
  left:0;
  width: 750px;;
}
.bottom-nav{
  position:fixed;
  right: 0;
  bottom:0;
  left: 0;
  flex-direction: row;
  justify-content: space-around;
  width:750px;
  height: 120px;
  background-color: #60B3F9;
}
.active{
  background-color: #8FC5F8;
  transition: all 0.2s ease-in-out;
}
.nav{
  align-items: center;
  justify-content: center;
  width: 187.5px;
}
.icon {
  width: 45px;
  height: 45px;
}
.title {
  margin-top: 10px;
  color: #FFF;
  font-size: 28px;
}
</style>
