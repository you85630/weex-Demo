<template>
  <scroller class="page">
    <top-nav :data="user"></top-nav>
    <psy-list :data="list"></psy-list>
    <tips-list :data="tips"></tips-list>
  </scroller>
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
  computed: {
    user: function () {
      return this.$store.default.getters.user
    },
    list: function () {
      return this.$store.default.getters.list
    },
    tips: function () {
      return this.$store.default.getters.tips
    }
  },
  created () {
    this.$store.default.dispatch('getData')
  }
}
</script>

<style scoped>

</style>
