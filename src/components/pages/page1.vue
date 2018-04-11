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

import { mapGetters } from 'vuex'
export default {
  components: {
    topNav,
    psyList,
    tipsList
  },
  computed: {
    ...mapGetters([
      'user',
      'list',
      'tips'
    ])
  }
}
</script>

<style scoped>

</style>
