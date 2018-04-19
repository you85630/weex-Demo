<template>
  <div class="box">
    <div class="btn" @click="captureImage">
      <image class="btn-bg" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"/>
      <text class="btn-text">点击拍照</text>
    </div>
  </div>
</template>

<script>
import Nat from 'natjs'
export default {
  data () {
    return {
      path: null
    }
  },
  methods: {
    captureImage () {
      Nat.camera.captureImage({}, (err, ret) => {
        if (err) {
          Nat.toast('[ERROR] ' + JSON.stringify(err))
          return
        }
        Nat.toast(JSON.stringify(ret, null, 2))
        this.path = ret.path
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  .box {
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
  }
  .btn {
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 160px;
    margin: 50px;
    opacity: 0.7;
  }
  .btn:active {
    opacity: 1;
  }
  .btn-bg {
    width: 450px;
    height: 160px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .btn-text {
    color: #505050;
    font-size: 64px;
    text-align: center;
  }
</style>
