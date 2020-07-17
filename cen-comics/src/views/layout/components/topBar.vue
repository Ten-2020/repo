<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
<div id="topBarWholeCss">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3"><div><el-menu-item index=1>柳宗元</el-menu-item></div></el-col>
      <el-col :span="3"><div><el-menu-item index=2>王维</el-menu-item></div></el-col>
      <el-col :span="3"><div><el-menu-item index=3>李白</el-menu-item></div></el-col>
      <el-col :span="3"><div><el-menu-item index=4>白居易</el-menu-item></div></el-col>
    </el-row>
  </el-menu>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'topBar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (index) {
      store.state.sideModuleIndex = index
      // store.state.centerModuleIndex = '1';//这个是让中间的模块默认显示左边第一个菜单相对应的内容.然而,左边却不是默认显示第一个.
    }
  }
}
</script>
<style>
  /* #topBarWholeCss{ */
      /* border:1px solid #F00; */
  /* } */
  .el-menu-demo2{
     text-align:center;
     margin:0 auto;
     display:flex
  }
</style>
