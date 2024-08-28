<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    background-color="#ECECEA" text-color="#000" active-text-color="#965454">
    <el-menu-item index="1">{{ $t('homePage.species') }}</el-menu-item>
    <el-submenu index="2">
      <template slot="title">{{ $t('homePage.menu') }}</template>
      <el-menu-item index="2-1">{{ $t('homePage.breakfast') }}</el-menu-item>
      <el-menu-item index="2-2">{{ $t('homePage.mainDish') }}</el-menu-item>
      <el-menu-item index="2-3">{{ $t('homePage.soup') }}</el-menu-item>
      <el-menu-item index="2-4">{{ $t('homePage.desert') }}</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">{{ $t('homePage.about') }}</el-menu-item>
    <el-menu-item index="4">{{ $t('homePage.chefs') }}</el-menu-item>
    <el-menu-item index="5">{{ $t('homePage.contact') }}</el-menu-item>
    <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">{{ $t('homePage.login') }}</a></el-menu-item>
  </el-menu>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .el-menu-demo {
      width:100vw;
      margin: 0;
      top: 0;
      position: fixed;
      left:0%
    }
</style>