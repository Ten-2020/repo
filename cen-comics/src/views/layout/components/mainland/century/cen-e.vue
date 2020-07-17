<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
  <div>
    <span>世纪</span>
    <el-button @click="handleSelect"></el-button>
    <div id="jsonTip"></div>
  </div>
</template>
<script>
// import $ from 'jquery'
import userinfo from './json/userinfo.json'
export default {
  name: 'cen-e',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    handleSelect () {
      // src/views/layout/components/mainland/century/json/userinfo.json
      // $.getJSON(userinfo, function(data) {
      //   var $jsontip = $("#jsonTip");
      //   var strHtml = "123";
      //   //存储数据的变量
      //   $jsontip.empty();
      //   //清空内容
      //   $.each(data, function(infoIndex, info) {
      //     strHtml += "姓名：" + info["name"] + "<br>";
      //     strHtml += "性别：" + info["sex"] + "<br>";
      //     strHtml += "邮箱：" + info["email"] + "<br>";
      //     strHtml += "<hr>";
      //   });
      //   $jsontip.html(strHtml);
      //   //显示处理后的数据
      // });
      console.info(userinfo)// 可以直接读取,不用ajax
    }
  }
}
</script>
