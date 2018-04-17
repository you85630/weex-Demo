<template>
  <div class="page">
    <top-nav :data="user"></top-nav>
    <psy-list :data="list"></psy-list>
    <tips-list :data="tips"></tips-list>
  </div>
</template>

<script>
import topNav from '../../components/modules/topnav'
import psyList from '../../components/modules/psylist'
import tipsList from '../../components/modules/tipslist'

export default {
  components: {
    topNav,
    psyList,
    tipsList
  },
  data () {
    return {
      user: '',
      list: '',
      tips: ''
    }
  },
  created () {
    let getters = this.$store.default.getters
    this.user = getters.user
    this.list = getters.list
    this.tips = getters.tips
  }
}
</script>

<style scoped>

</style>
