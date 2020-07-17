<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-06-13 16:26:29
--> 
<template>
  <div>
    <Modal v-model="m_modal" footer-hide width="680px">
      <p slot="header" style="color:#f60;text-align:left">
        <span style="color:#f60;text-align:left">
          <Icon type="ios-information-circle"></Icon>
          <span>{{m_title}}</span>
        </span>
        <span style="margin-left:100px">
          <span>君主:{{power}}</span>
        </span>
      </p>
      <Table :height="table_height" :columns="columns_data" border :data="table_data" @on-row-click="t_row_click" id="id_table" stripe>
      </Table>
    </Modal>
  </div>
</template>
<script>
import Vue from 'vue';
import positions from '@/components/common/position'
export default {
  name: '',
  components: {},
  data () {
    return {
      m_modal: false,
      m_title: '',
      power: '',
      table_data: [],
      columns_data: [],
      governData: {},
      table_height: 300,
      sign: '',
    }
  },
  created () { },
  mounted () { },
  computed: {},
  watch: {},
  methods: {
    t_row_click (_row, _inx) { // 点击某行触发
      // Vue.call(this) // 根本就不是作用域的问题,是因为Notice要配置到原型中去:Vue.prototype.$Notice = Notice
      this.m_modal = false
      this.$emit('appoint_governor',this.sign,_row.name)
      this.$Notice.success({
        title: this.m_title,
        desc: `${_row.name}已被任命为${this.m_title.substring(this.m_title.length - 2)}`
      })
    },
    init (_governData, _power, _sign) {
      this.sign = _sign
      this.governData = _governData
      this.m_title = _sign === 'general' ? '任命州牧' : '任命幕僚'
      this.power = _power
      this.init_columns()
      this.init_datas(_sign)
      this.m_modal = true // 应该是最后再显示
    },
    init_datas (sortBy) {
      let { lead: leads } = this.governData
      // console.log('keys', Object.keys(leads))
      let leads_ = Object.values(leads)
      this.sortBySign(leads_, sortBy)
      this.table_data = JSON.parse(JSON.stringify(leads_)) // Object.assign会把数组转换为对象,列表就无法显示
      console.log('table_data', this.table_data)
    },
    sortBySign (array, soryBy) {
      array.sort(function (a, b) {
        if (a.sign === soryBy) { // 相等,排在前面
          return -1
        } else {
          return 1
        }
      })
    },
    init_columns () {
      this.columns_data = [
        {
          title: '序号',
          type: 'index',
          align: 'center',
          width: 65,
        },
        {
          title: '姓氏',
          key: 'name',
          align: 'center',
          width: 80
        },
        {
          title: '武力',
          key: 'force',
          align: 'center',
          width: 120
        },
        {
          title: '智力',
          key: 'brain',
          align: 'center',
          width: 120
        },
        {
          title: '官职',
          key: 'position',
          align: 'center',
          width: 120
        },
        {
          title: '定位',
          key: 'sign',
          align: 'center',
          width: 120,
          render: (h, _p) => {
            if(_p==='general')return h('span','武将')
            else return h('span','幕僚')
          }
        },
        // {
        //   title: '支付方式',
        //   key: 'payType',
        //   align: 'center',
        //   width: 120,
        //   render: (h, params) => {
        //     return h('span', findType(params.row.payType, this.payTypes).label)
        //   }
        // },
      ]
    },
  }
}
</script>
<style lang='less' scoped>
.demo-split {
  height: 512px;
  border: 1px solid #dcdee2;
  background-color: rgba(170, 170, 170, 0.692);
}
</style>
