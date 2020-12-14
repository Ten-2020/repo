// console.log('你好呀')

var str: string = "你好ts"
let str1: string = "你好typescript"

let num: any = "你好ts"

// - 布尔类型(boolean)
let isDone: boolean = false
// - 数学类型(number)
let count: number = 10
// - 字符串类型(string)
let name1: string = "semliker"
// - 数组类型(array)
let list: number[] = [1, 2, 3]
// - 元组类型(tuple)
// - 枚举类型(enum)
enum Direction { NORTH, SOUTH = 3, EAST, WEST }
let dir: Direction = Direction.NORTH
// - 任意类型(any)
let notSure: any = 666
notSure = "semlinker"
notSure = false
// - void 类型
function warnUser(): void {
  console.log('', '')

}
// - never 类型
// never 是其它类型的子类型。
// - null 和 undefined
// null 就是一个空对象引用.用 typeof检测 null 返回是 object.
let x: number
x =1 // 运行正确
// x = undefined //运行错误
// x = null;    // 运行错误
let y: number | null | undefined
y = 1 // 运行正确
y = undefined // 运行正确
y = null //运行正确

class Site {
  name():void{
    console.log('Run')
  }
}
let obj = new Site()
obj.name

import Sit from'./src/practice/exportDefault' // 这个引入要在文件中加入export default
let ob = new Sit()
ob.name() // 想要name方法执行,要加上()
// console.log('print',ob.name()); // 这个打印的是方法的返回,不过会先执行方法

import Si = require('./src/practice/export')
debugger
console.log('打印',Si,typeof Si,Si.Si.prototype.name()); // 要这样才能执行name()

