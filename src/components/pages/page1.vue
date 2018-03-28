<template>
  <div class="page">
    <top-nav></top-nav>
    <psy-list></psy-list>
    <tips-list></tips-list>
  </div>
</template>

<script>
import topNav from 'components/modules/topnav'
import psyList from 'components/modules/psylist'
import tipsList from 'components/modules/tipslist'
export default {
  components: {
    topNav,
    psyList,
    tipsList
  }
}
</script>

<style scoped>

</style>
