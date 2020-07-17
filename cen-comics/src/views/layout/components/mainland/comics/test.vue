<!--
 * @Author: 高腾
 * @Description:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
    <div>
      <span>
        <el-input v-model="input" placeholder="请输入内容" class="input-css" size="medium"></el-input>
        <el-button @click.native="add">添加</el-button>
      </span>
      <br>
      <span >你的待办事项</span>
      <ul>
        <li v-for="(i,ii) in list" :key="ii" @click="del(i, ii)">{{i}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'comics-cong',
  data () {
    return {
      input: '',
      list: []
    }
  },
  methods: {
    add () {
      if (this.input) {
        this.list.push(this.input)
      }
    },
    del (value, index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style scoped>
 .input-css{
   width: 180px;
 }
</style>
