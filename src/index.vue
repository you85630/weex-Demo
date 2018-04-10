<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<style scoped>
.wrapper{
  width: 750px;
  background-color: #f5f5f5;
}

</style>

<script>
export default {
  created () {
    // eslint-disable-next-line
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': 'awesomeFont',
      'src': "url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0')"
    })
  }
}
</script>
