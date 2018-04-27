<template>
  <list>
    <header>
      <text class="banner">HEADER</text>
    </header>
    <cell v-for="index in lists" :key="index">
      <div class="panel">
        <text class="text">{{index}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        'First', 'Second', 'Third', 'Fourth',
        'Fifth', 'Sixth', 'Seventh', 'Eighth'
      ]
    }
  }
}
</script>

<style scoped>
  .banner {
    width: 750px;
    padding: 25px;
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    color: #41B883;
    background-color: rgb(162, 217, 192);
  }
  .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>
