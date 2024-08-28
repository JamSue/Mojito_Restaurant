<template>
  <el-container>
    <nav-tab></nav-tab>
    <div class="intro">
      <div class="overlay">
        <div class=" intro-text">
          <h1>{{ $t("homePage.title") }}</h1>
          <p>{{ $t("homePage.description") }}</p>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import NavTab from './mainPage/navTab'
export default {
  components: { NavTab },

}
</script>

<style scoped>
  .intro {
    background: url('@/assets/intro-bg.jpg') center center no-repeat;
    display: flex;
    width: 100%;
    height: 80vh;
    padding: 0;
    margin:0;
    left: 0%;
    position: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    background-color: #939391;
    -o-background-size: cover;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .intro h1 {
    font-family: 'Brush Script MT', sans-serif;
    color: #fff;
    font-size: 10em;
    font-weight: 500;
    padding-top: 500;
    text-align: center;
  }
  .intro p {
    font-family: 'Rochester', cursive;
    color: #fff;
    font-size: 1em; 
    /* em相对于父元素的大小单位 */
    font-weight: 400;
    margin-top: 0;
  }
</style>