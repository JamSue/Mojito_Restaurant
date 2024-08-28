<template>
  <el-container>
    <!-- header -->
    <nav-tab class="navtab"></nav-tab>
    <my-intro> </my-intro>
    <!-- species -->
     <my-species></my-species>
  </el-container>
</template>

<script>
import myIntro from './mainPage/myIntro.vue'
import mySpecies from './mainPage/mySpecies.vue'
import NavTab from './mainPage/navTab'
export default {
  components: {
    NavTab,
    mySpecies,
    myIntro
   },

}
</script>

<style scoped>
  .navtab {
    display: flex;
  }
 
</style>