<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-04 09:15:56
 -->
<template>
  <div class="b-pic">
    <Row type="flex" class="code-row-bg padding-top-large">
      <Col span="5" offset="6">
      <div class="demo-split">
        <Split v-model="split">
          <div slot="left">
            <Menu mode="horizontal" theme="primary">
              <Menu-Item name="1">
                <!-- <Icon type="ios-construct" /> -->
                <span class="font-size-large">内政管理</span>
              </Menu-Item>
            </Menu>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">自动施行</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">施展开发</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">使用物品</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">搜索物品</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">重新开启</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">势力地图</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">保存记录</Button>
            </Row>
            <Row>
              <Button type="warning" ghost long class="font-size-large font-height-large">读取记录</Button>
            </Row>
            <Row>
              <Button type="warning" @click="route_to_map" ghost long class="font-size-large font-height-large">结束内政</Button>
            </Row>
          </div>
          <div slot="right" class="width-400">
            <img src="../../assets/关羽.jpg" width="130">
            <Row class="font-size-large padding-top-small">
              <Col span="8">
              <p>时间:</p>
              <p>君主:</p>
              <p>城数:</p>
              <p>关卡:</p>
              <p>武将:</p>
              <p>士兵:</p>
              <p>金钱:</p>
              <p>人口:</p>
              </Col>
              <Col span="14">
              <p>公元210年</p>
              <p>关羽</p>
              <p>100个</p>
              <p>10个</p>
              <p>200名</p>
              <p>100000名</p>
              <p>100000人</p>
              <p>100000币</p>
              </Col>
            </Row>
          </div>
        </Split>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
// import T from 'T'
export default {
  name: 'index',
  components: {},
  data () {
    return {
      split: 0.35
    }
  },
  created () {
    console.log('created', '执行created方法')
  },
  mounted () { },
  computed: {},
  watch: {},
  methods: {
    route_to_map () {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
<style lang='less' scoped>
.padding-top-small {
  padding-top: 10px;
}

.font-height-large {
  height: 50px;
}

.font-size-large {
  font-size: 28px;
  font-family: "楷体";
}

.ivu-menu-horizontal .ivu-menu-item {
  float: none;
  padding: 0;
}

.demo-split {
  height: 512px;
  border: 1px solid #dcdee2;
  background-color: rgba(170, 170, 170, 0.692);
}

.padding-top-large {
  padding-top: 80px;
  padding-left: 34px;
}

.width-height {
  width: 200px;
  height: 500px;
  background-color: red;
}

.bgc {
  background-color: red;
  height: 500px;
}

.b-pic {
  height: 1080px;
  background: url("../../assets/内政背景.jpeg");
  text-align: center;
}
</style>