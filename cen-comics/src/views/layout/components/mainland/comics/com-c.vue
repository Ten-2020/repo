<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
  <div>
    <!-- @click.native="isShowSelect = !isShowSelect" -->
    <div>
      <el-tag @click="cj.cs=!cj.cs;cj.bdz=!cj.bdz;logElTag('城市测距')">&nbsp;&nbsp;城市测距&nbsp;&nbsp;</el-tag>
      <el-tag @click="cj.cs=!cj.cs;cj.bdz=!cj.bdz;logElTag('变电站测距')">&nbsp;&nbsp;变电站测距&nbsp;&nbsp;</el-tag>
      <div v-show="cj.cs" style="height: 101%;width: 100%;">
        <table>
          <thead>
            <tr>
              <td class="num">序号</td>
              <td>城市</td>
              <td>距离(km)</td>
            </tr>
          </thead>
        </table>
      </div>
      <div v-show="cj.bdz" style="height: 101%;width: 100%;">
        <table>
          <thead>
            <tr>
              <td class="num">序号</td>
              <td>变电站</td>
              <td>距离(km)</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comics-ci',
  data () {
    return {
      cj: {cs: true, bdz: false}
    }
  },
  mounted () {
  },
  methods: {
    logElTag (title) {
      console.info(title)
    }
  }
}
</script>
