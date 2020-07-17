<template>
  <div>
    <el-container>
      <el-header id="elHeaderCss">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="3"><div><router-link to="/header/comics/c"><el-menu-item index=1>漫画</el-menu-item></router-link></div></el-col>
            <el-col :span="3"><div><router-link to="/header/century/ce"><el-menu-item index=2>世纪</el-menu-item></router-link></div></el-col>
            <!-- <el-col :span="3"><div><el-menu-item index=3>李白</el-menu-item></div></el-col> -->
            <!-- <el-col :span="3"><div><el-menu-item index=4>白居易</el-menu-item></div></el-col> -->
          </el-row>
        </el-menu>

      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import {bottomBar,topBar,mainland,side} from './components'

export default {
  name: 'tl',
  components: {},
  data () {
    return {
      activeIndex: '1'
    }
  },
  watch: {
    '$route': {
      handler (to, from) { // 这个方法参数不能打印
        // 对路由变化作出响应...
        if (to.params.id.includes('comics')) this.activeIndex = '1'
        if (to.params.id.includes('century')) this.activeIndex = '2'
      },
      immediate: true
    }
  },
  methods: {
    handleSelect (index) {
      this.$store.state.route.index = index
    }
  }
}
</script>
<style>
  #elHeaderCss{
      border:1px solid #F00;
      text-align: center
  }
  #elMainCss{
      border:1px solid rgba(234, 0, 255, 0.664);
  }
  #elFooterCss{
      border:1px solid rgba(0, 255, 13, 0.692);
  }
</style>
