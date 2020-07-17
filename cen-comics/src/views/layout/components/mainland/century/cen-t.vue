<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <i class="el-icon-paperclip" />
        <span style="font-size: 17px;font-weight: 700;">通道信息</span>
      </div>
      <el-form ref="channelInfo" label-width="200px" :rules="rules" :model="newTradeseq">
        <el-row :gutter="0">
          <el-col
            :span="12"
            style="font-size: 14px;font-family: 微软雅黑,serif; color: #444444;"
          >
            <el-form-item label="送出省（替代方）" prop="snOutParty">
              <el-select
                v-model="newTradeseq.snOutParty"
                value-ke="marketId"
                multiple
                filterable
                placeholder="请选择"
                style="width: 80%"
                value=""
                @change="snOutPartyChange"
              >
                <el-option
                  v-for="item in sendOuts"
                  :key="item.marketId"
                  :label="item.marketName"
                  :value="item.marketId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="12"
            style="font-size: 14px;font-family: 微软雅黑,serif; color: #444444;"
          >
            <el-form-item label="受入省（被替代方）" prop="snInParty">
              <el-select
                v-model="newTradeseq.snInParty"
                value-ke="marketId"
                multiple
                filterable
                placeholder="请选择"
                style="width: 80%"
                value=""
                @change="snInPartyChange"
              >
                <el-option
                  v-for="item in sendOuts"
                  :key="item.marketId"
                  :label="item.marketName"
                  :value="item.marketId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col
            :span="12"
            style="font-size: 14px;font-family: 微软雅黑,serif; color: #444444;"
          >
            <el-form-item label="送出地区（替代方）" prop="snInBranch">
              <el-select
                v-model="newTradeseq.snInBranch"
                multiple
                filterable
                placeholder="请选择"
                style="width: 80%"
                value=""
              >
                <el-option
                  v-for="item in sendOuts"
                  :key="item.marketId"
                  :label="item.marketName"
                  :value="item.marketId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col
            :span="12"
            style="font-size: 14px;font-family: 微软雅黑,serif; color: #444444;"
          >
            <el-form-item label="受入地区（被替代方）" prop="snOutBranch">
              <el-select
                v-model="newTradeseq.snOutBranch"
                multiple
                filterable
                placeholder="请选择"
                style="width: 80%"
                value=""
              >
                <el-option
                  v-for="item in sendOuts"
                  :key="item.marketId"
                  :label="item.marketName"
                  :value="item.marketId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button type="primary" >查询</el-button>
      </el-form>
      <el-table :data="tradeRouteList">
      <el-table-column type="selection" label="选择" width="55"></el-table-column>
      <el-table-column prop="index" label="序号" width="60" ></el-table-column>
      <el-table-column prop="route_name" label="调度路径" width="60" ></el-table-column>
      <el-table-column prop="route_id" label="调度路径编号" width="60" ></el-table-column>
      <el-table-column property="gate_section_name" label="报表/断面/联络线名称" width="308"></el-table-column>
      <el-table-column property="gate_section_type" label="官员/断面/联络线名称" width="280" align="center" />
      <el-table-column property="power_direction" label="电能方向" width="80" align="center"/>
      <el-table-column property="version" label="数据版本" width="80" align="center" />
      <el-table-column property="revert" label="操作" width="80" align="center">
        <template>
          <el-button type="primary" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    </el-card>
  </div>
</template>
<script>
export default {
  name: 'TradingRoute',
  components: {},
  data () {
    return {
      sectionOrPassWidth: 140,
      pretradeRouteShow: false,
      queryParam: {
        data: {
          sendProv: '',
          reveiveProv: ''
        },
        pageInfo: {
          pageNum: 1,
          pageSize: 20,
          size: 0,
          startRow: 1,
          endRow: 1,
          pages: 0,
          prePage: 0,
          nextPage: 0,
          isFirstPage: true,
          isLastPage: true,
          hasPreviousPage: false,
          navigatePages: 0,
          navigatepageNums: [],
          navigateFirstPage: 1,
          navigateLastPage: 1,
          total: 0
        }
      },
      currentPage4: 1,
      tradeRouteList: [
        {
          'guid': '01',
          'route_id': '0000001',
          'gate_section_id': 'jd1',
          'gate_section_name': '陕西',
          'gate_section_type': '3',
          'order_id': 1,
          'power_direction': null
        },
        {
          'guid': '02',
          'route_id': '0000001',
          'gate_section_id': 'dm1',
          'gate_section_name': '陕甘断面',
          'gate_section_type': '1',
          'order_id': 2,
          'power_direction': '1'
        },
        {
          'guid': '03',
          'route_id': '0000001',
          'gate_section_id': 'jd2',
          'gate_section_name': '甘肃',
          'gate_section_type': '3',
          'order_id': 3,
          'power_direction': null
        },
        {
          'guid': '04',
          'route_id': '0000001',
          'gate_section_id': 'dm2',
          'gate_section_name': '宁夏送入断面',
          'gate_section_type': '1',
          'order_id': 4,
          'power_direction': '-1'
        },
        {
          'guid': '05',
          'route_id': '0000001',
          'gate_section_id': 'jd3',
          'gate_section_name': '宁夏',
          'gate_section_type': '3',
          'order_id': 5,
          'power_direction': null
        },
        {
          'guid': '06',
          'route_id': '0000001',
          'gate_section_id': 'llx1',
          'gate_section_name': '昭沂直流',
          'gate_section_type': '2',
          'order_id': 6,
          'power_direction': '1'
        },
        {
          'guid': '07',
          'route_id': '0000001',
          'gate_section_id': 'jd4',
          'gate_section_name': '山东',
          'gate_section_type': '3',
          'order_id': 7,
          'power_direction': null
        }
      ],
      pretradeRowSelectList: [],
      tradeseqId: null,
      sendOuts: [],
      rules: {
        snOutParty: [{ required: true, message: '请输入内容', trigger: 'change' }],
        snInParty: [{ required: true, message: '请输入内容', trigger: 'change' }],
        snInBranch: [{ required: true, message: '请输入内容', trigger: 'change' }],
        snOutBranch: [{ required: true, message: '请输入内容', trigger: 'change' }]

      }
    }
  },
  created () {
    this.queryParamsCode()
  },
  mounted () {},
  methods: {
    queryParamsCode () {
    },
    snInPartyChange (val) {
      this.newTradeseq.snOutBranch = []
      val.forEach(vl => {
        this.sendOuts.forEach(data => {
          if (data.marketId === vl) {
            // console.log(data)
            if (data.superMarketId === 'PSGCC' || data.superMarketId === '') {
              if (this.newTradeseq.snOutBranch.indexOf(data.marketId) === -1) {
                this.newTradeseq.snOutBranch.push(data.marketId)
              }
            } else {
              if (
                this.newTradeseq.snOutBranch.indexOf(data.superMarketId) === -1
              ) {
                this.newTradeseq.snOutBranch.push(data.superMarketId)
              }
            }
          }
        })
      })
    },
    snOutPartyChange (val) {
      this.newTradeseq.snInBranch = []
      val.forEach(vl => {
        this.sendOuts.forEach(data => {
          if (data.marketId === vl) {
            // console.log(data)
            if (data.superMarketId === 'PSGCC' || data.superMarketId === '') {
              if (this.newTradeseq.snInBranch.indexOf(data.marketId) === -1) {
                this.newTradeseq.snInBranch.push(data.marketId)
              }
            } else {
              if (
                this.newTradeseq.snInBranch.indexOf(data.superMarketId) === -1
              ) {
                this.newTradeseq.snInBranch.push(data.superMarketId)
              }
            }
          }
        })
      })
      // console.log(this.newTradeseq.snInParty)
    },
    deepCopy (obj) {
      if (typeof obj !== 'object') {
        return obj
      }
      var newobj = {}
      if (Array.isArray(obj)) {
        newobj = []
      }
      for (var attr in obj) {
        newobj[attr] = this.deepCopy(obj[attr])
      }
      return newobj
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.queryParam.pageInfo.pageSize = val
      this.queryPage(this.queryParam)
    },
    // 分页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.queryParam.pageInfo.pageNum = val
      this.queryPage(this.queryParam)
    }
  }
}
</script>
<style scoped></style>
