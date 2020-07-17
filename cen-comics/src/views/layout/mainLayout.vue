<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
  <div>
        <!-- 先设定左边有两个 -->
    <el-container e-if="1">
      <el-aside width="66px">
          <div id="sideWholeCss">
            <el-menu   :default-active="activeIndex" :collapse="true">
            <el-menu-item v-for="item in sideModelList" :key="item.id" :index="item.id">
                    <router-link :to="item.path">
                <i v-if="item.id == '1'" class="el-icon-menu"></i>
                <i v-if="item.id == '2'" class="el-icon-setting"></i>
                <i v-if="item.id == '3'" class="el-icon-share"></i>
                <span slot="title">{{item.name}}</span>
                </router-link>
            </el-menu-item>
            </el-menu>
          </div>
      </el-aside>
      <el-container>
        <el-main id="elMainCss">
            <router-view></router-view>
        </el-main>
        <el-footer id="elFooterCss"><bottomBar /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import { bottomBar, topBar, mainland, side } from './components'
import { bottomBar } from './components'

export default {
  name: 'mainLayout',
  // components: { bottomBar, topBar, mainland, side },
  components: {bottomBar},
  data () {
    return {
      activeIndex: '1',
      sideModelList: []
    }
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    '$route': {
      handler (to, from) { // 对路由变化作出响应...//这个方法参数不能打印
        this.sideModelList = this.$store.state.route.url[to.params.id]
        // {#} 这个在打印,难怪,这个之前引入的打印程序
      },
      immediate: true
    }
    // dynamicSegment:{
    //   handler(c, v) {
    //     this['sideModelList'] = this['sideModelList'+c] //这个实现的很完美
    //   },
    //   immediate:true,
    // },

  },
  methods: {
  }
}
</script>
