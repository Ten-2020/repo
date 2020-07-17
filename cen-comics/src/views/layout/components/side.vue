<template>
  <div id="sideWholeCss">
    <el-menu  @select="handleSelect" :default-active="activeIndex" :collapse="isCollapse">
      <el-menu-item v-for="item in sideModelVal" :key="item.id" :index="item.id">
        <!-- <template slot-scope="scope"> -->
        <i v-if="item.id == '1'" class="el-icon-menu"></i>
        <i v-if="item.id == '2'" class="el-icon-setting"></i>
        <i v-if="item.id == '3'" class="el-icon-share"></i>
        <span slot="title">{{item.name}}</span>
        <!-- </template> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'side',
  components: {},
  data () {
    return {
      // sideModelList:[[
      //     {id:"1",name:"江雪"},
      //     {id:"2",name:"渔翁"},
      //     {id:"3",name:"咏史"}
      // ],
      // [
      //     {id:"1",name:"渭城曲"},
      //     {id:"2",name:"重阳节"},
      //     {id:"3",name:"竹里馆"}
      // ],
      // [
      //     {id:"1",name:"蜀道难 "},
      //     {id:"2",name:"将进酒"},
      //     {id:"3",name:"长相思"}
      // ],
      // [
      //     {id:"1",name:"草"},
      //     {id:"2",name:"钱塘湖春行"},
      //     {id:"3",name:"大林寺桃花"}
      // ]],

      sideModelList1: [
        { id: '1', name: '江雪' },
        { id: '2', name: '渔翁' },
        { id: '3', name: '咏史' }
      ],
      sideModelList2: [
        { id: '1', name: '渭城曲' },
        { id: '2', name: '重阳节' },
        { id: '3', name: '竹里馆' }
      ],
      sideModelList3: [
        { id: '1', name: '蜀道难 ' },
        { id: '2', name: '将进酒' },
        { id: '3', name: '长相思' }
      ],
      sideModelList4: [
        { id: '1', name: '草' },
        { id: '2', name: '钱塘湖春行' },
        { id: '3', name: '大林寺桃花' }
      ],
      activeIndex: '1',
      sideModelVal: [],
      sideModuleIndex: '',
      isCollapse: true
    }
  },
  props: {
    // 接收父组件传递过来的参数
  },
  map: {
    // type:String
  },
  computed: {
    listenSideModelIndex () {
      // 这个方法是一定要写的,才能监听到
      // 小标题无法默认显示第一个的问题
      return store.state.sideModuleIndex
    }
  },
  mounted () {
    // this.sideModelVal = this.sideModelList[0];
    this.sideModelVal = this.deepCopy(this.sideModelList1)
    // console.info(this.sideModelList5.filter(this.isBigEnough("1")));
  },
  watch: {
    listenSideModelIndex: function (curVal, oldVal) {
      this.sideModelVal = []
      this.activeIndex = '1'
      // var re = JSON.parse(JSON.stringify(this.sideModelList))
      // console.info(re[curVal-1]);
      // this.sideModelVal = this.deepCopy(re[curVal-1]);
      switch (curVal) {
        case '1':
          this.sideModelVal = this.deepCopy(this.sideModelList1)
          break
        case '2':
          this.sideModelVal = this.deepCopy(this.sideModelList2)
          break
        case '3':
          this.sideModelVal = this.deepCopy(this.sideModelList3)
          break
        case '4':
          this.sideModelVal = this.deepCopy(this.sideModelList4)
          break
      }
    }
  },
  methods: {
    handleSelect (index) {
      store.state.centerModuleIndex = index
    },
    collapseOpen () {
      this.isCollapse = false
    },
    collapseClose () {
      this.isCollapse = true
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
    }
  }
}
</script>
<style>
#sideWholeCss {
  border: 1px solid rgba(0, 89, 255, 0.664);
  /* box-shadow：0 2px 12px 0 rgba(0,0,0,10) */
}
</style>
