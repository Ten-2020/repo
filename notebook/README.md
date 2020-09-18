# 突然发现,还是把新发现的写在上面好点

### 9-9 通过测试发现的一些问题(9-10 更新)

1. 滚动条被遮住问题:(问题在 9-18 号得到解决)

- 列表显示在有前提下:最大高度固定(max-height),操作这一列固定右边(fixed'),数据下边有左右横向的滚动条
- 如果列表在该高度下无法显示所有数据,这时,操作这一栏就会把下面的滚动条遮住.
- 解决---在 mer.income.vue 中:(在向下滚动到底部会出现滚动条)

```less
::v-deep .ivu-table-fixed-body {
  padding-bottom: 15px;
}
```

2. 同一个浏览器只能存在一个账号.因为账号信息是放在 localStorage 中的,一旦有别的账号登陆,就会替换掉.

3. 密码的问题:(该问题在写完下面的描述之后,灵感突来,得到了解决)

- 在弹出框中,在新增的时候把密码的显示点出来之后,再一次点击新增进来界面,发现密码框是显示的
- 因为 input type:'password' 是把密码隐藏,而按了显示标志之后 type 就变成'text',而这一过程不可逆.
- 解决方法--><Input :type="input_type" :icon="icon_type" @on-click="icon_click">
- 通过上述的动态控制 input 类型以及 icon 以及 icon 点击事件 on-click 得到了解决
- 注意:原本在浏览器上按 F12,隐藏的标志是这样的:<i class="ivu-icon ivu-icon-ios-eye-outline"></i>
- 但是在 input 中这样写:icon="ios-eye-outline",以 ios 开头

  4.之前在写路由菜单时,如果父级菜单只有一个子级菜单,该父级菜单不会显示---已解决

- 网上说要在路由菜单中设置属性 alwaysShow,可是我在该项目中只搜索到 item.meta.showAlways
- 所以用 true 替换了它,在 mixin.js 的 showChildren 方法中
- 注意: 这个能在两个文件中搜索到,只是替换一个,另一个替换会报错,导致登陆不了,具体不清楚.

  5.缓存的问题

- 把登陆返回的,如:用户 ID,菜单列表,权限列表等放在 localStorage 中,这样即使关闭页面还是会存在.
- 把从后台返回的类型,诸如银行类别,这些,就放在缓存中,页面一渲染就判断有没有,如果没有再去请求.
- 登陆就更新这些,或者不更新,看情况决定缓存在 local 还是 session 中.
- 要不然一打开页面就获取这些,导致打开页面很慢,有些类别很多.

  6.两个无关组件之间进行通信

- 在我司内部账户编辑时,想让管理页面的列表也跟随着刷新数据,所以我就在 vuex 中设置一个全局变量
- 在编辑时,改变这个全局变量的值,接着在管理页面监听这个值,然后刷新列表,也就是再查一遍数据.
- 可通过在 main.js 中引用: Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信
- 至于上面为什么这个引用,我就不清楚了.待运用多时能明白此间奥妙.
- this.$bus.$emit('isCalled')|如果在 js 文件中,就先引进 Vue,再通过 Vue.\$bus 来使用
- this.$bus.$on('isCalled', ()=>{
  this.init_datas()
  })
- 这样就跟上面实现的一样,一个调用,一个监听,然后实现两个页面同步刷新.

### 9-7 脱敏规则

/**
 *  对敏感数据进行脱敏处理
 *  支持脱敏的数据类型及脱敏规则：
 * a)  卡号，脱敏原则：银行卡卡号隐去除卡号前 6 位和最后 4 位的其他位数，预付卡、网络支付账号、结算账号可结合业务需求借鉴此原则处理
 * b)  身份证号，脱敏原则：隐去除证件号码前 10 位和最后 4 位的其他位数
 * c)  手机号，脱敏原则：隐去除手机号前 3 位和最后 4 位的其他位数
 * d)  固定电话，脱敏原则：隐去除固定电话前 3 位的其他位数（如果有“-”，其前面作为区号，后面信息脱敏，如 020-855\*\*\***）
 * e)  地址（含商户地址、用户地址），脱敏原则：隐去除地址列前三个字以外的其他信息
 * f)  邮箱，邮箱脱敏原则：隐去除邮箱前 1 位和“@”后面的信息的其他位数
 * g)  姓名,脱敏原则：隐去除姓名前 1 位的其他位数
 * h)  默认,保留后 4 位，隐去其他位数
 *  其中，隐去为使用“*”替代，对于卡号，身份证号，手机号，固定电话，邮箱、姓名，默认类型时隐去位都一一对应一个“_”号；地址则隐去位默认使用 6 个“_”代替
 * 【注】：当数据不满足脱敏规则的最低位数时，则原文返回；当传入脱敏类型不支持时，则异常提示“不支持该类型（类型值）”
 */

### 9-3 在学习 react-state 时发现:

```js
export default class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }
  increment () {
    this.setState({
      count: this.state.count + 1
    })
  }
  clickHandle = () => {
    console.log(this)
  }
  render () {
    return (
      <button onClick={this.decrement}>减少</button>
      //上面这个调用方法时,方法中的this是undefined.
      <button onClick={this.decrement.bind(this)}>减少</button>
      //而这个调用方法时,方法中的this指向的就是这个class.
      <button onClick={this.clickHandle}>关于this</button>
      // 像这种方法是箭头函数,默认会指向最外层,也就是指向这个class.
    )
  }
}
```

#### 下面这些可以帮助理解下:转载于[https://www.cnblogs.com/lfri/p/11872696.html]

```js
function test(name) {
  console.log(name)
  console.log(this)
}
test('Jerry') //一般我们调用函数是这样写,跟下一行那个是一样的,只不过是简写了而已
test.call(undefined, 'Tom')
// 如果方法在对象中,如下:
const obj = {
  name: 'Jerry',
  greet: function () {
    console.log(this.name)
  },
}
obj.greet()
obj.greet.call(obj) //这两种方法也是一样的,上一行那个就是默认设定this代表的是obj
```

- 箭头函数默认不会使用自己的 this,而是会和外层的 this 保持一致,最外层的 this 就是 window 对象.

### 9-2 在学习 react/router 的时候发现 vue-router 有两种模式:hash 模式和 history 模式

- history 路由可以前进后退

```js
history.go(-2) //后退两次
history.go(2) //前进两次
history.back() //后退
hsitory.forward() //前进
```

- 通过 history api,我们丢掉了丑陋的#,但是它也有个问题：不怕前进,不怕后退,就怕刷新:f5(如果后端没有准备的话)
- 因为刷新是实实在在地去请求服务器的,不玩虚的.
- 在 hash 模式下,前端路由修改的是#中的信息,而浏览器请求时是不带它玩的,所以没有问题.
- 但是在 history 下,你可以自由的修改 path,当刷新时,如果服务器中没有相应的响应或者资源,会分分钟刷出一个 404 来.

#### 总结:在之前做支付运营项目的时候,最怕就是刷新,或者可以用 hash 模式,而且没有后退,没有前进,只有跳转,

#### 所以 vue 应该使用的是 hash 模式,有些人可能为了需求把项目改的跟初衷不一致了.

# 从 4-27 到 6 月 30 号,项目终于告了一段落(.md 文档格式化之后有些特殊字符会加上/)

## 做个总结吧!

- 杨花落尽子规啼,商道龙标过五溪.
- 我寄愁心与明月,随风直到夜郎西.

### 明细页面

1. input 替代 span,用上 readonly 这个属性 (不能编辑)
2. input 有些字段过多用 textarea,属性用 :autosize:"true" (自动控制文本区域的行数)
3. 有些属性需要替代,比如 0->微信支付等,就要这样 :value="findType(form.parent, payProducts)" (通过方法来返回数据)

### 修改/新增页面(字段多的用页面来展示)

- Object.assign 是对象的合并,属性相同,后者覆盖前者,属性不同,则添加属性到前者.(贼鸡儿的坑,之前一直以为只是复制)

1. 表单赋值时,不管是新增还是修改,都要先让表单初始化:this.init_item()再执行 this.init_data()或者
   Object.assign(this.m_form_item,this.formVal)
2. 数据初始化时,因为已经初始化表单了,再执行 Object.assign(this.m_form_item,res.data)诸如这样的赋值,
   res.data 中有些字段没有值,会被删掉,所以使用以上的方式赋值就不会出现字段 undefined.
3. 把 select 的数组放在一个公共的 js 文件中,虽然说很繁琐,但是方便于管理(把数组改成对象,每个数组对象用对象的属性来定义)
4. 数组每次查询都要循环,这是让人非常恼火的事情.
5. 通过 readonly 来控制 input 禁用,而 select 用 disabled,都用上 clearable,select 再加上个 filterable.
6. 通过 maxlength="15" 来控制输入框的长度,还可以通过设置:type="number"来控制只能输入数字.

#### 表单校验(真是个不好的东西,还好最后发现了问题的关键)

1. input 用 blur 来监听是否为空, select 用 change 来监听.导致这一关键的原因是 select 没有 blur 事件,
   可能是因为它有下拉选项,不好控制失去焦点(仅个人意见)
2. 不管是新增还是修改,开始之前都要清空校验: this.\$refs['selectForm'].resetFields().
3. 给表单赋值要用: this.m_form_item = JSON.parse(JSON.stringify(params.row)),这样赋值就不会触发表单校验.
4. let params = Object.assign({}, this.m_form_item) 这样赋值会把后者变成对象,所以如果是数组就不要用这个赋值或者复制.
5. 给 Modal 添加属性 loading 后,点击确定按钮对话框不会自动消失,并显示 loading 状态,需要手动关闭对话框,常用于表单提交。
   校验不通过,就执行下面的语句,显示 loading 状态.

```js
setTimeout(() => {
  this.loading = false // 之前都弄错了,以为是关闭整个对话框的,原来才知道是用来缓冲校验的.
  this.$nextTick(() => {
    this.loading = true
  })
}, 1000)
```

#### 方法请求

1. 一定要写 then,catch 来处理不管是数据还是错误

### 列表展示数据

1. 列表的高度用 :max-height="table_height" (这样就不会在没有数据时出现一大段空白,虽然我不觉得它不好看)
2. 通过监听表单折叠以及 F11 使浏览器全屏来动态控制表格的最大高度.[src\view\system-manage\income\components\edit.vue]
3. window.onresize = function temp(){} 这个就是用来监听 F11 全屏变化的方式.[一定要给方法命名,也即这里的 temp]
4. 注意上面的监听一定不要用匿名(其它的诸如此类的监听也不要用|vue 中的 computed 跟 watch 也不要用)

### 路由配置以及页面刷新数据缓存

1. 如果某个页面要缓存,一定要写 name,就是:(记住一定要写,要不然就没有缓存,跟上面不要使用匿名一样的道理)
2. 如果是明细/修改/新增页面,一定不要写 name,因为明细页面的数据是可以每次点击就要刷新页面.(注意不是对话框)

```js
export default {
  name: '',
}
```

3. 这里有 main.vue 跟 parent.vue 都有<router-view :key="key"/> (具体缘由不清楚)
4. 因为在某种原因导致了诸如修改/新增页面不是随着路由的改变而刷新页面的.所以百度上说给路由设置 key 就可以.
   之前也尝试过监听路由,可不是每次都能监听到的.(现在想想也是因为给页面设置了 name,导致页面有缓存的缘故)
5. 不要在 main.vue 中设置上面这个 key,否则就会让整个页面都会刷新(标签即使是关闭了,也会刷新数据)
6. 不要在 parent.vue 的中设置上面这个 key,否则切换父路由就会发现整个页面都刷新了(即所以标签都刷新数据了)
7. 之后,我把两个 key 都注释掉了,就使用给页面写不写 name 这一属性来解决了上述问题.
8. 之前 router 添加标签的时候,只是判断传递的数据是字符串,而没有对象,所以我就修改判断方法:
   [app.js]中的 addTag():修改了判断路由是否重复以及是否要添加标签的方式
   以及它调用的方法[tools.js]中的 objEqual():修改了路由传递参数是否一样的方式
9. 上面的 addTag() 方法中调用的 doCustomTimes(一个同步调用请求的方法,还是非常好用的)

```js
doCustomTimes(len, (index) => {
  if (routeEqual(tagNavList[index], routeItem)) res = true
})
/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}
```

### F5 刷新页面,获取缓存数据

1. 在页面中的 beforeMount()方法来获取缓存以及保存数据到缓存中[src\view\system-manage\income\components\edit.vue]
2. 注意清空缓存现在不建议去清空的.因为切换路由也会导致缓存清空,因为没有设置 name,
   整个页面就像匿名函数一样,下次再进来就又重新开始了.
3. 一个页面的要缓存的变量名称一定要跟别的页面区分开来,不然就会冲突.

### 下面是一些知识点

#### 4-24

1. 由于动态路由也是传递 params 的,所以在 this.\$router.push() 方法中,
2. path 不能和 params 一起使用,否则 params 将无效,需要用 name 来指定页面.
3. 5-14 vue 的表单校验太 TM 垃圾了.(要自定义表单校验)
4.

- import {payTypes} from '@/common/constants/type'
- 像上面引入外部对象,不能直接使用,要在 data 里 return 中用对象引入才行:payTypes: payTypes

5.

- console.table('一行的数据', params.row)
- console.dir(params) // 不要加其它的参数

6.

- 当刷新页面（这里的刷新页面指的是 --> F5 刷新,属于清除内存了）时 vuex 存储的值会丢失,sessionstorage 页面关闭后就清除掉了,localstorage 不会.

#### 4-30

- 设置属性为布尔值,如: :hide-arrow="true" 加上:就表示是'true'字符串,又因为其是特殊字符串,所以就直接表示成布尔值.
- 在 computed 中使用匿名函数,因为不能使用 this,所以可以用 vm 来代替 this.vue 是把数据放在 vm 中,以便监听.

#### 5-11

- input、select 默认的样式是不同的,你无法通过直接改变 width 值去覆盖掉原来的默认样式,所以需要添加一个属性:
  input,select{
  box-sizing: border-box;
  }
  这个时候 input 和 select 宽度就一致了.
- 解释一下关于 box-sizing：

1. border-box： width 为 content+padding+border
2. content-box（默认属性值）： width 的是 content,padding 以外的再另算。

### 记录一些疑难杂症(之前的很多没有记载下来,觉得非常吃亏)

#### 7-13 [问题解决了,但是具体缘由尚不清楚]

- 内部账户编辑页面:如果一条数据中的金额(必输的)是 0,点修改进入编辑页面,一开始是没有报校验错误的,
- 可是如果点了确认按钮,就会报诸如:\*\*金额不能为空.
- 校验方法是这样写的:
  creditAmount:[
  {required:true,message:'**金额不能为空',trigger:'blur'},
  {validator:validate,trigger:'blur'}
  ]
  解决: 把两行校验写都一行,如:
  {required:true,validator:validate,trigger:'blur'}

#### 7-14 [在本地的电脑的 vscode 上搜索文件(ctrl+shift+r)能搜索到 app.js,但是在云桌面就不行,之前是可以的.]

- 7-15 问题终于得到了解决.
- 是由于在 settings.json 中"files.exclude": {}中设置了"\*\*.js":true
- 在本地的电脑中没有设置这个,所以没有这个问题

#### 7-14 [问题解决了,可以尝试下看看缘由]

1.切换路由,数据混乱问题

- 内部账户编辑页面:先点击修改,然后切换回列表页面,再点击新增,然后切换回列表页面,再切换回编辑页面
- 发现页面有了数据 --> 发现是 app.js 中 let ifExist = routeHasExist(tags\_, router),这个 ifExist 老是返回 true
- 里面用到了 doCustomTimes 这个方法,应该是异步的问题,可以尝试下.
- 解决方法:因为之前已经查找出有相同路径名的路由了,所以直接比较参数是否相同即可.如下:
- let ifExist = routeEqual(tags\_, router) 2.渠道账户,限制只能输入数字
- 开始是用的 type="number" 来限制的,但是输入 e 或者 +-等都是可以的,而且用鼠标滚动,数字还会随着变化
- 解决方法:(把输入的时候,把不是数字的替换掉)

```html
<FormItem label="清算渠道" prop="settChnlNo">
  <Input type="text" v-model="m_form_item.settChnlNo" placeholder="请输入清算帐号"
  @on-keyup="m_form_item.settChnlNo=m_form_item.settChnlNo.replace(/[^\d]/g,'')"></Input>
</FormItem>
```

#### 7-15 学习发现 JSON.parse(JSON.stringify())还能这么用!

```js
- 只复制需要的那部分属性: const formData = JSON.parse(JSON.stringify(this.form, ["nickName", "price"]))
- 可以只打印想要的属性: console.log(JSON.stringify(product,['name'])-->{"name" : "Cake"}
```

#### 7-20 vue 中的 filters 的使用(详见于 inside-account.vue)

```html
<FormItem label="备付金账户类型" prop="provisionAccountType">
  <Input :value="m_form_item.provisionAccountType|findType(provisionAccountTypes)" readonly></Input>
</FormItem>
```

```js
  components: {}, // 写这个是为了标明filters的位置
  filters:{
    formatDate(value) {
      return format(value, 'yyyy-MM-DD HH:mm:ss')
    },
    findType(a,b) {
      return findType(a,b).label
    }
  },
```

- 这个 filters 就像是对数据进来处理一斑,如名为过滤,但用于如:对时间数据进行格式化,对数据进来转化等

- 对于全局过滤器,一般建议在项目里面添加 filters 目录,然后在 filters 目录里面添加

```js
// filters\index.js

import Vue from 'vue'
import { format } from '@/utils/date'

Vue.filter('formatDate', (value) => {
  return format(value, 'yyyy-MM-DD HH:mm:ss')
})
```

- 然后将 filters 里面的文件引入到 main.js 里面
- 这样就可以直接在页面上使用,诸如:{{ dateStr | formatDate }},不用添加别的东西.

#### 7-21 vue 中的 require.context 的使用(详见于 config.vue)

- 因为在 config.vue 是用一个页面来控制动态画板,所以引入了多个组件,譬如:import specialConfig from '这是文件绝对路径'
- 使用 require.context 来读取这些文件,来动态加载这些组件(使用的是 webpack 中的技术)
- 缺点在于,要全局注册这些组件,有可能会造成重复.

### 8-19 好久没有发现疑难杂症了(主要是最近有点忙)

1. 在添加路由的时候,现在路由不是写在前端的 js 文件中了,是由后端配置完之后,再返回前端的

- 这个时候如果只执行下面其中一个是不行的(两个都要执行)
- this.\$router.addRoutes(list) // 这个是显示菜单的
- this.\$router.options.routes.push(...list) // 这个是打开页面的

2. 再者,即使是把路由加进去了,可如果页面 F5 刷新了,路由还是会丢失的

- 所以就得在 router 的 beforeEach 的方法中判断是否刷新,然后把路由加进去
- 在已有的路由不能有{path:'\*',}要不然就会跳转这里
- 得添加一个路由:{path:'\*},redirect:'/401'}
- 然后,得执行:next({...to,replace:true}),相当于再执行一遍这个方法,才能正常跳转.

3. 添加全局自定义指令来控制按钮的权限

- 比如:这里的自定义指令:v-limit-->[src\directive\module\permission.js]
- 要上上述路径文件中,添加指令发生的生命周期是哪个,如:inserted(插入的时候,执行一次),update(更新的时候,可执行多次)等
- 在 main.js 中配置就可以全局使用了.如:v-limit="{id: 'inside-account-edit' }"
- 如果是列表的按钮中使用,就得添加如: (在 mer-income-bank.vue 文件中示例)
  directives: [
  {
  name: 'limit',
  value: { id: 'mer-income-bank-edit' }
  }]

4. 要求是这样的:如果操作里面的按钮权限都没有的话,不仅要隐藏按钮,操作这一列也要隐藏(宽度也要随之改变)

- 我是这样做的:首先把操作这一列先不放进去,先把操作中的所有权限都传到 permission.js 中判断
- 如:[a,b,[c,d]],如果都存在的话,就返回[a,b,[c,d]],接着判断返回的在哪个位置,就把在同一个位置的按钮返回渲染.

### 8-21 要求:提供一个本地导入模板方便导入(点击 a 标签即可下载模板)

- 一开始以为文件可在当前路径可以下载,跟引入.less 文件直接导入一样
- 后来发现只有在 public 中的文件可以下载
- 实现方式:<a href="../excel/进件.xls">下载商户进件模板</a>
- 就这么简直.在这之前写了一大堆,又是 axios 请求,又是乱码,后来发现写请求路径就能下载,如下面:
  <a href="http://127.0.0.1:12088/excel/进件.xls">下载商户进件模板</a>
- 后来发现如果写的是直接的请求,如:/excel/进件.xls,得到请求是:
- http://127.0.0.1:12088/sys/excel/进件.xls,会加上已有的路由.
- 这样路径就要求在 public 中建立两级文件夹才能访问到这个 xls 文件.
- 后来发现可以使用..来实现路径的缩短,就像上面../excel/进件.xls 这个路径就是http://127.0.0.1:12088/sys/excel/进件.xls的缩写版本,而且不用写端口跟IP等就能直接访问到.

### 8-27 启动 react 项目,vscode 会很卡

- 弄了两天,一开始下载的一个项目,一打开项目就卡,即使把 node_modules 删除.
- 后来,想着是不是项目的问题,就又开始了一个,这个就好很多,除了下载 node_modules 时会占用些 cpu,因为下载涉及防火墙.
- 不过,有些时候还是会卡,观察了下任务管理器,发现一打开项目,就运行 perl.exe,而且很占 cpu
- 百度说是 cnpm 的问题,就把它卸载了,好像有效果(在 vscode 的插件中发现有 perl,我就把它也删了)
- 上述操作之后,还是会时不时的运行,我就把 oracle 相关的服务全关闭了,不行就只能卸载,反正也好久没用了.
- 后来发现还有一个 codehelper.exe 占用 cpu,百度说是要设置"files.exclude"以及"search.exclude"就可以
- 问题好像得到了解决,之后遇到再看看.(现在看到 perl.exe,就关闭,没出现问题)
- D:\GT\world\work\soft\environment\oracle\install\product\11.2.0\dbhome_2\perl\bin
- 把这个路径下的 perl.exe 放在 zip 压缩包下了,下次有需要再放开,真烦.

### 8-27 要求:图片从后台上传,到前端预览

- 想着是不是要用 node 的服务器传个图片到前端看看效果
- 后来看到通过 mock 模板传到前端是否是一样的道理(好像是这样)

### 8-27 之前是实现过 js 文件直接点击 crtl 就能跳转到定义的

- 之前是这样实现的:(是写在 jsconfig.json 中的|网上说跟 tsconfig.json 一样的效果)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    // "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "target": "ES6",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*", "public/api.js"],
  "exclude": ["node_modules"]
}
```

- 现在是在运行 react 项目,其中很多 jsx 文件,想着是可以直接复制上面的配置来用,但是是放在 tsconfig.json 中的

```json
{
  "compilerOptions": {
    "jsx": "preserve", // 共有三种枚举： react, react-native, preserve,实测均可
    "baseUrl": ".", // "baseUrl": "./", // 这个可能有出入,不过现在是没有问题的
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true
  },
  "exclude": ["node_modules"]
}
```

- 关键点来了:可以实现点击跳转,但是会报错,因为在 node_modules 中的 axios-mock-adapter 有配置了 tsconfig.json
- 发生了冲突所以就把文件名字改成 jsconfig.json
- 项目启动还是会提示错误,只能先开启项目,再把它配置回来.
- 问题终于解决了,不提示错误,项目启动也不提示报错了

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "baseUrl": ".",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true
  },
  "exclude": ["node_modules"]
}
```

- 总结:因为在 json 文件之前是以 JSON 语言模式的,最近才发现有 JSON with Comments 的,也就是可以在 json 文件中添加注释
- 所以在编辑就没有报错,之前文件名冲突已经解决(只要属性不重叠),但是项目运行就会报错,无法读取有注释的 json 文件
- 所以去掉注释问题就解决了(完满完成,喜极而泣!)
