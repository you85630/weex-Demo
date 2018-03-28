<template>
  <scroller class="home">
    <div class="top-main">
      <router-view/>
    </div>
    <div class="bottom-nav">
      <div v-for="(li, index) in navList" :key="index" class="nav" :class="[nowInx===index?'active':'']"  @click="jump(index)">
        <image class="icon" :src="li.icon"/>
        <text class="title">{{li.title}}</text>
      </div>
    </div>
  </scroller>
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
      }, {
        title: '页面5',
        linkto: '/home/page5',
        icon: '//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
      }]
    }
  },
  methods: {
    jump (key) {
      this.nowInx = key
      let link = this.navList[key].linkto
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>
.home{
  position: relative;
  width: 750px;
}
.top-main{
  padding-bottom: 115px;
  min-height: 100%;
  width: 100%;
}
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: #60B3F9;
}
  .nav{
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 150px;
  }
  .icon{
    width: 45px;
    height: 45px;
  }
  .title{
    margin-top: 10px;
    color: #fff;
    font-size: 28px;
  }
  .active{
    background-color: #8FC5F8;
    transition: all 0.2s ease-in-out;
  }
</style>
