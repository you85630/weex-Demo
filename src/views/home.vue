<template>
  <div class="home">
    <div class="top-main">
      <router-view/>
    </div>
    <div class="bottom-nav">
      <div v-for="(li, index) in navList" :key="index" class="nav" :class="[nowInx===index?'active':'']" @click="jump(index)">
        <image class="icon" :src="li.icon" />
        <text class="title">{{li.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowInx: 0
    }
  },
  computed: {
    navList: function () {
      return this.$store.default.getters.navList
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
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 750px;
}
.top-main {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 120px;
  left: 0;
  width: 750px;
}
.bottom-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-around;
  width: 750px;
  height: 120px;
  background-color: #60b3f9;
}
.active {
  background-color: #8fc5f8;
  transition: all 0.2s ease-in-out;
}
.nav {
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
  color: #fff;
  font-size: 28px;
}
</style>
