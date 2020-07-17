<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
  <div>
    <span>世纪空格</span>
    <el-button @click="click2">点击一下</el-button>
  </div>
</template>
<script>
export default {
  name: 'cen-c',
  data () {
    return {
      values: [],
      formData: {},
      obj: [],
      listQuery: {
        a: '',
        b: '',
        c: ''
      }
    }
  },
  created () {
    this.values = [1, 2, 3]
    this.formData = {'0': 'aa', '1': 'bb', '5': 'cc', length: 3} // 这个length一定要加,要不就转化不成数组
    this.obj = [{id: 1, name: 'n'}, {id: 2, name: 'm'}]
  },
  mounted () {

  },
  methods: {
    click () {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      let set = new Set(arr)
      console.log(Array.from(set, item => item + 1)) // [2,3,4,5,6,7,8,9,10]

      // let a1 = this.values.map(v => v ** 3) // succ//Array
      // let a2 = this.add(...this.values) // 3
      // let a3 = Array.from(this.formData) // {#} //["aa", "bb", undefined]
      // 对象的属性必须是按顺序排序的数字//也必须从0开始.
      // let a4 = this.obj.map(o => o.name) // ["n", "m"]
      // let [a5, ...rest] = [1, 2, 3, 4, 5] // {#} //...扩展运算符,不过是将数据遍历出来而已,不管是对象还是数组
      // let a6 = [1, 2, 3].includes(2, 0) // true//第二个参数表示从第几位开始
    },
    click1 () {
      //  let[a,[[b]]] = [1,[[2],3]] // {#}
      // 如果解构不成功,变量的值就等于undefined
      //  let [x,y,z] = new Set(['a','b','c']) // {#}
      let a2 = `'aaaa='
       ${this.add(1, 2, 3)}` // succ
      console.info('模板字符串', a2)
      // 解构赋值允许指定默认值
      // let [f = true] = [] // succ
      // es6 内部使用严格相等运算符(===)判断一个位置是否有值.所以,如果一个数组成员不严格等于undefined,
      //  默认值是不会生效的
      // let {f1,f2} = {f1:'f',f2:'ff'} // {#} //当解构时,还是不要写简写
      // 对象的解构:对象的属性没有次序,变量必须与属性同名才能取到正确的值.//如果没有取到,就unddefined
      // let {f1:f1,f2:f2} = {f1:'f',f2:'ff'} //上面是这个的简写.
      // let {f1:f11,f2:f22} = {f1:'f',f2:'ff'} // {#}
      // console.info(f11,f22)//f1,f2未定义
      // 解构就是相同结构,然后给结构点上给变量赋值
      // let obj ={p:['h',{y:'w'}],pp:['h',{y:'w'}]}
      // let {p:[x,{y}]} = obj //p只是匹配的模式 //succ
      // let {x:x=5} = {} //默认值生效的条件是,对象的属性值严格等于undefined
      // let {x: y = 3} = {x: 5} // y=5
    },
    click2 () {
      this.listQuery = {a: '2', b: '3'}
    },
    add (...values) {
      let s = 0
      for (let v in values) {
        s = s + v
      }
      return s
    }
  }
}
</script>
