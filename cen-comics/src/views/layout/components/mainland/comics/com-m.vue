<!--
 * @Author: 高腾
 * @Descripttion:
 * @Date: 2019-07-27 12:08:23
 -->
<template>
<div>
</div>
</template>
<script>
export default {
  name: 'TradingRoute',
  components: {},
  data () {
    return {
    }
  },
  created () {},
  mounted () {
    this.exploreArrayAdd()
  },
  methods: {
    exploreArrayAdd () {
      // const addArray = (a, b, c) => a + b + c
      // const oneArray = [1, 2, 3, 4]
      // console.info('数组元素相加', addArray(...oneArray))
    }
  }
}
// function getPersonInfo (one, two, three) {
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }
// const person = 'Lydia'
// const age = 21
// getPersonInfo`${person} is ${age} years old`

function getAge (...args) {
  console.log(typeof args)
}

getAge(21)

// var num = 8
// var num = 10
// console.log('num的值', num)

const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

console.info(obj.hasOwnProperty('1')) // true
console.info(obj.hasOwnProperty(1)) // true
console.info(set.has('1')) // false
console.info(set.has(1)) // true

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123 // 这里就是粗暴的把对象b做为a的属性
a[c] = 456
console.log(a)
console.log(a[b])

function* generator (i) {
  yield i
  yield i * 2
}
const gen = generator(10)
console.log(gen.next().value) // 这个设置真的很精炒,一步一步的执行,而不会出现别的异步操作.
console.log(gen.next().value)

let person2 = {name: 'Lydia'}
const members = [person2] // 把对象的引用的复制到数组中,他的关联就断了
// person = null
person2 = {name: 'GT'} // 即使是这样,members的值也不变
console.log(members)

// function Person (firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// const lydia = new Person('Lydia', 'Hallie')
// const sarah = Person('Sarah', 'Smith')

// console.log(lydia)
// console.log(sarah)

// const name_1 = "Lydia"
// age = 21
// console.log(delete name_1) // 但是通过 var, const 或 let 关键字声明的变量无法用 delete 操作符来删除。
// console.log(delete age)
// //设定 age等于 21时,我们实际上添加了一个名为 age的属性给全局对象。对象中的属性是可以删除的，全局对象也是如此，所以 delete age返回 true.

const user = { name: 'Lydia', age: 21 }
const admin = { admin: true, ...user }

console.log(admin) // 这是就是两个对象合并了,很经典

const settings = {username: 'lydiahallie', level: 19, health: 90}
const data1 = JSON.stringify(settings, ['level', 'health'])
console.log(data1) // "{"level":19, "health":90}"
// JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。

let num = 10
const increaseNumber = () => num++
const increasePassedNumber = number => number++
const num1 = increaseNumber() // 就像匿名函数一样,调用的时候要加()
const num2 = increasePassedNumber(num1) // // 就像匿名函数一样,调用的时候要加(),还要传参
console.log(num1)
console.log(num2)

const value = { number: 10 }
const multiply = (x = { ...value }) => {
  console.log(x.number *= 2)
}
multiply()
multiply()
multiply(value) // es6中的扩展运算符仅仅对引用类型进行了第一层的拷贝
multiply(value) // 而...value,value是引用类型,所以不会进行复制,所以value.number的值在跟着改变
console.info('最后value', value)

function* startGame () {
  const answer = yield 'Do you love JavaScript?'
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here"
  }
  return 'JavaScript loves you back ??'
}

const game = startGame()
console.log(game.next().value)
console.log(game.next('Yes').value)

async function getData () {
  // eslint-disable-next-line no-return-await
  return await Promise.resolve('I made it!')
}
const data2 = getData()
console.log(data2) // Promise{<pending>}
data2.then(res => { console.log('打印同步函数返回', res) })
//  74题--------------------------------------------------
function addToList (item, list) {
  return list.push(item)
}
const result = addToList('apple', ['banana'])
console.log(result) // 2 // push返回的是数组的长度.
//  75题--------------------------------------------------
const box = { x: 10, y: 20 }
Object.freeze(box) // 冻结一个对象,不能添加跟删除属性等
const shape = box
// shape.x = 100 // 这里就会报TypeError
console.log(shape) // 这里的shape是不变的
//  76题--------------------------------------------------
// eslint-disable-next-line no-unused-vars
const { name: myName } = { name: 'Lydia' }
console.log(name) // name未定义
//  78题--------------------------------------------------暂时没搞懂
const add = () => {
  const cache = {}
  return num => {
    // console.info('cache', cache)
    if (num in cache) {
      return `From cache! ${cache[num]}`
    } else {
      const result = num + 10
      cache[num] = result
      return `Calculated! ${result}`
    }
  }
}
const addFunction = add()
console.log(addFunction(10))
console.log(addFunction(10))
console.log(addFunction(5 * 2))
//  80题--------------------------------------------------
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list) // 3,2,0.5
//  82题--------------------------------------------------
// eslint-disable-next-line no-unused-vars
var status = '??'
setTimeout(() => {
  // eslint-disable-next-line no-unused-vars
  const status = '??'
  const data = {
    status: '??',
    getStatus () {
      return this.status
    }
  }
  console.log(data.getStatus())
  console.log('更改this指向的对象', data.getStatus.call(this))
}, 0)
// 使用 call方法，可以更改 this指向的对象。data.getStatus.call(this)是将 this的指向由 data对象更改为全局对象。在全局对象上，
// 有一个名为 status的变量，其值为 ”??“。因此打印 this.status时，会打印 “??”。
//  83题--------------------------------------------------
const person3 = {name: 'Lydia', age: 21}
// eslint-disable-next-line no-unused-vars
let city = person3.city // 没有给person3设置city的属性,只是把person3的属性city的值给到city
city = 'Amsterdam'
console.log('person3', person3) // undefined
//  85题--------------------------------------------------
// fetch(`https://fanyi.baidu.com/?aldtype=16047#en/zh/`)
//   .then(res => res.json())
//   .then(res => console.log(res))
//  88题--------------------------------------------------
function sum (num1, num2 = num1) {
  console.log(num1 + num2)
}
sum(10) // 20,这里num2的默认值是num1,因为是写在后面的,所以他的值也是10.如果两个参数相反,就会报错.
//  90题--------------------------------------------------
class Person {
  constructor (name) {
    this.name = name
  }
}
const member = new Person('John')
console.log(typeof member)

// 类是构造函数的语法糖，如果用构造函数的方式来重写 Person类则将是：function Person() {  this.name = name}
// 通过 new来调用构造函数，将会生成构造函数 Person的实例，对实例执行 typeof关键字将返回 "object"，上述情况打印出 "object"。
//  92题--------------------------------------------------
function giveLydiaPizza () { return 'Here is pizza!' }
const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype) // {constructor:...} undefined

// 常规函数，例如 giveLydiaPizza函数，有一个 prototype属性，它是一个带有 constructor属性的对象（原型对象）。
// 然而，箭头函数，例如 giveLydiaChocolate函数，没有这个 prototype属性。
// 尝试使用 giveLydiaChocolate.prototype访问 prototype属性时会返回 undefined。
//  98题--------------------------------------------------
let xx = [1, 2, 3, 4]
// function xxx ([x, ...y]) { // ...y 就表示y=[2,3,4]
//   console.info('打印的x,y的值', x, y)
// }
const xxxx = ([x, ...y]) => [x, y]
console.info('打印的x,y的值', xxxx(xx))
const user4 = { name: 'Lydia', age: 21 }
// const getUser = user => { name: user.name, age: user.age }

// getUser函数接收一个对象。对于箭头函数，如果只返回一个值，我们不必编写花括号。但是，如果您想从一个箭头函数返回一个对象，
// 您必须在圆括号之间编写它，否则不会返回任何值!下面的函数将返回一个对象:

const getUser = user => ({ name: user.name, age: user.age })
console.log(getUser(user4))
// 由于在这种情况下不返回任何值，因此该函数返回 undefined。
//  100题--------------------------------------------------
// eslint-disable-next-line no-unused-vars
const output = `${[] && 'Im'}possible!You should${'' && `n't`} see a therapist after so much JavaScript lol`

// []是一个真值。使用 &&运算符，如果左侧值是真值，则返回右侧值。在这种情况下，左侧值 []是一个真值，所以返回 Im。
// ""是一个假值。如果左侧值是假的，则不返回任何内容。n't不会被退回。
//  101题--------------------------------------------------
const one = (false || {} || null)
const two = (null || false || '')
const three = ([] || 0 || true)
console.log(one, two, three)

// 使用 ||运算符，我们可以返回第一个真值。如果所有值都是假值，则返回最后一个值。
// （false||{}||null）：空对象 {}是一个真值。这是第一个（也是唯一的）真值，它将被返回。one等于 {}。
// （null||false||""）：所有值都是假值。这意味着返回传递的值 ""。two等于 ""。
// （[]||0||“”）：空数组 []是一个真值。这是第一个返回的真值。three等于 []。
</script>
<style scoped></style>
