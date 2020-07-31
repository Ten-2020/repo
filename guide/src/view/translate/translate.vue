<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-07-30 09:27:45
--> 
<template>
  <div class="div-back">
    <div class="header-less">
    </div>
    <div class="content-less">
      <Row type="flex">
        <Col span="8" order="2">
        <!-- <Form ref="form" :model="form" inline class="search-form" :label-width="20" label-position="left"> -->
        <!-- <FormItem> -->
        <Input type="text" v-model="search_val" class="input-less" search enter-button="Search" @on-search="on_search" placeholder="F:翻译|D:指令" />
        <!-- </FormItem> -->
        <!-- </Form> -->
        </Col>
        <Col span="6" order="3">3 | order-2</Col>
        <Col span="8" order="1">4 | order-1</Col>
      </Row>
      <br>
      <Row>
        <!-- 只要双击,就可复制 -->
        <Tag color="success" type="dot" closable v-show="tag_text" style="{cursor:default;}"
        @dblclick.native="copyText">{{tag_text}}</Tag>
      </Row>
    </div>
  </div>
</template>
<script>
import MD5 from '@/utils/md5'
import copy from '@/utils/copy'
export default {
  name: 'translate',
  data () {
    return {
      appid: '20200729000529033',// 这两个是百度翻译注册的id
      key: 'HrV_OnEH8NqH06laNvcI',
      tag_text: '',
      commons: {
        trans: '>F:',// 中英文互译
      },
    }
  },
  computed: {
    search_val: {
      get: vm => vm.commons.trans,
      set: val => { } // 只是因为没有设置set会警告
    },
  },
  created () {
  },
  methods: {
    copyText (e) {
      copy(this.tag_text, e)
    },
    on_search (val) {
      if (val.includes(this.commons.trans)) {
        let val_ = val.replace(this.commons.trans, '')
        let regex = /[a-zA-Z]+/
        if (regex.test(val_)) {
          this.translate('en', 'zh', val_)
        } else {
          this.translate('zh', 'en', val_)
        }
      }
    },
    translate (from, to, query) { // 由于词典翻译需要认证,就先只搞这个简单翻译
      let salt = (new Date).getTime()
      let sign = MD5(this.appid + query + salt + this.key)
      // 在Vue项目中受到同源策略的影响，使用get方法不能跨域请求数据，这个时候我们可以使用jsonp这样一种模式（或者称之为协议），来请求数据。例如我们要请求豆瓣的数据，只需将上述代码中的get给成jsonp即可
      this.$http.jsonp("http://api.fanyi.baidu.com/api/trans/vip/translate?q=" + query +
        "&from=" + from + "&to=" + to + "&appid=" + this.appid + "&salt=" + salt +
        "&sign=" + sign + "&dict=0", {}, {
        headers: {},
        emulateJSON: true
      })
        .then(function (response) {
          let text = response.body.trans_result[0].dst
          // console.log(response.body.trans_result)
          this.tag_text = text
        })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>