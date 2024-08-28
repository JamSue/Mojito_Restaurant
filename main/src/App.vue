<template>
  <div id="app">
    <homePage />
  </div>
</template>

<script>
import homePage from './components/homePage.vue'

export default {
  name: 'App',
  components: {
    homePage
  },

  mounted() {
    let lang = localStorage.getItem('lang')
    if (lang == 'en_US') {
      this.$i18n.locale = "en"
    } else {
      this.$i18n.locale = "zh"
      this.locale = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
