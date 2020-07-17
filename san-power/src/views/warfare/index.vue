<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-06-13 09:38:13
--> 
<template>
  <div>
    <Modal v-model="m_modal" footer-hide width="370px" :mask="true" :mask-closable="true">
      <p slot="header" style="color:#f60;text-align:left">
        <span style="color:#f60;text-align:left">
          <Icon type="ios-information-circle"></Icon>
          <span>{{m_title}}</span>
        </span>
        <span style="margin-left:100px">
          <!-- <span style="color:#f60;text-align:right"> -->
          <span>君主:{{power}}</span>
        </span>
      </p>
      <Form>
        <Row type="flex">
          <Col span="10">
          <div>
            <Button type="warning" ghost long class="font-size-large font-height-large">补充兵员</Button>
            <Button type="warning" @click="appoint_governor_init('general')" ghost long class="font-size-large font-height-large">任命州牧</Button>
            <Button type="warning" @click="appoint_governor_init('civil')" ghost long class="font-size-large font-height-large">任命幕僚</Button>
            <Button type="warning" ghost long class="font-size-large font-height-large">誓师出征</Button>
          </div>
          </Col>
          <Col span="12" :offset="2">
          <div>
            <img src="../../assets/关羽.jpg" width="130">
            <Row class="font-size-center padding-top-small">
              <Col span="9">
              <p>州牧:</p>
              <p>军师:</p>
              <p>文武:</p>
              <p>防御:</p>
              <p>金钱:</p>
              <p>人口:</p>
              <p>预备:</p>
              <p>士兵:</p>
              </Col>
              <Col span="13">
              <p>{{govern.governor}}</p>
              <p>{{govern.advisor}}</p>
              <p>{{govern.leads}}</p>
              <p>{{govern.defend}}</p>
              <p>{{govern.gold}}</p>
              <p>{{govern.pop}}</p>
              <p>{{govern.prepare}}</p>
              <p>{{govern.commands}}</p>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
      </Form>
    </Modal>
    <appoint-governor ref="appoint_governor" @appoint_governor="appoint_governor"></appoint-governor>
  </div>
</template>
<script>
import positions from '@/components/common/position'
import appointGovernor from '@/views/warfare/appoint-governor/appoint-governor.vue'
export default {
  name: '',
  components: {
    appointGovernor
  },
  data () {
    return {
      m_modal: false,
      m_title: '',
      power: '',
      governData: {},
      split: 0.35,
      govern: {
        governor: '',
        advisor: '',
        leads: '',
        defend: '',
        gold: '',
        pop: '',
        commands: '',
        prepare: '',
      }
    }
  },
  created () { },
  mounted () { },
  computed: {},
  watch: {},
  methods: {
    appoint_governor(_sign,_name){
      if(_sign === 'general'){
        this.govern['governor'] = _name
      } else{
        this.govern['advisor'] = _name
      }
    },
    init_govern (_governData) {
      // this.govern = { governor, advisor, defend, prepare, gold, pop, lead } = _governData
      // let {lead,...arguments} = _governData // 可以试下这个可不可以实现
      Object.assign(this.govern, _governData) //继承了所有属性
      let { lead } = _governData
      let leadKeys = Object.values(lead)
      this.govern.leads = leadKeys.length
      let whole = 0
      leadKeys.forEach(function (item, inx) {
        whole += item.command.cavalry + item.command.infantry
      })
      this.govern.commands = whole
    },
    init (_governName, _governData) { // 传过来的是整个州的数据
      this.m_modal = true
      this.m_title = _governName
      this.power = _governData.power
      this.governData = _governData
      this.init_govern(_governData)
    },
    appoint_governor_init (_sign) {
      let _th = this
      _th.$nextTick(() => {
        if (_th.$refs.appoint_governor) {
          _th.$refs.appoint_governor.init(_th.governData, _th.power, _sign)
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.font-height-large {
  height: 50px;
}

.font-size-large {
  font-size: 24px;
  font-family: "楷体";
}
.font-size-center {
  font-size: 20px;
  font-family: "楷体";
}

::v-deep .ivu-modal-header {
  padding-bottom: 0;
}
</style>