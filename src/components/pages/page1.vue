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
      user: this.$store.default.getters.user,
      list: this.$store.default.getters.list,
      tips: this.$store.default.getters.tips
    }
  }
}
</script>

<style scoped>

</style>
