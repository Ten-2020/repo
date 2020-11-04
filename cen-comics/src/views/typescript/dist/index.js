"use strict";
// console.log('你好呀')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var str = "你好ts";
var str1 = "你好typescript";
var num = "你好ts";
// - 布尔类型(boolean)
var isDone = false;
// - 数学类型(number)
var count = 10;
// - 字符串类型(string)
var name1 = "semliker";
// - 数组类型(array)
var list = [1, 2, 3];
// - 元组类型(tuple)
// - 枚举类型(enum)
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 3] = "SOUTH";
    Direction[Direction["EAST"] = 4] = "EAST";
    Direction[Direction["WEST"] = 5] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
// - 任意类型(any)
var notSure = 666;
notSure = "semlinker";
notSure = false;
// - void 类型
function warnUser() {
    console.log('', '');
}
// - never 类型
// never 是其它类型的子类型。
// - null 和 undefined
// null 就是一个空对象引用.用 typeof检测 null 返回是 object.
var x;
x = 1; // 运行正确
// x = undefined //运行错误
// x = null;    // 运行错误
var y;
y = 1; // 运行正确
y = undefined; // 运行正确
y = null; //运行正确
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('Runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name;
var exportDefault_1 = __importDefault(require("./src/practice/exportDefault")); // 这个引入要在文件中加入export default
var ob = new exportDefault_1.default();
ob.name(); // 想要name方法执行,要加上()
// console.log('print',ob.name()); // 这个打印的是方法的返回,不过会先执行方法
var Si = require("./src/practice/export");
debugger;
console.log('打印', Si, typeof Si, Si.Si.prototype.name()); // 要这样才能执行name()
