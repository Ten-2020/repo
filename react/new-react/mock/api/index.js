const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
let mockData = {}
//通过递归函数,遍历所有mock文件夹下的文件,汇总所有的路径和响应
/*形成一个如下形式的对象mockData
{
  'POST /api/login/account': (req, res) =>{res.json({ id: 123, name: 456 })}),
  '/api/user': { id: 1, username: 'kenny', sex: 6 },
  'GET /api/user/list': [
    { id: 1, username: 'kenny', sex: 6 },
    { id: 2, username: 'kenny', sex: 6 }
  ],
  'DELETE /api/user/:id': (req, res) =>{res.json({status:1,msg:"xxxxx"})}),
}
key值为请求方法和路径,value值是json数据或者响应回调函数
*/
function readMockDir (dir) {
  let dirs = fs.readdirSync(dir)

  dirs.forEach(file => {
    let _path = path.join(dir, file)
    let isDirectory = fs.statSync(_path).isDirectory()
    if (isDirectory) {
      readMockDir(_path)
    }
    else {
      Object.assign(mockData, require(_path))
    }
  })
}
readMockDir(path.join(__dirname))

//导出一个如下形式的函数
//function(app){ 
//	app.get('path',(req,res)=>{})
//	app.get('path',(req,res)=>{})
//	app.get('path',(req,res)=>{})
//  ...
//  ...
//} 
//遍历上一步代码中生产的mockData对象,将每一个键值对转换成app.get('path',(req,res)=>{})这样的形式
module.exports = function (app) {
  app.use(bodyParser()) // 使用这个很成功|非常牛皮
  // app.use(bodyParser.urlencoded({extended:false}))// 如果上面不行就用这个,可惜用不到了
  // console.log(mockData);
  for (let key in mockData) {
    //解析请求方法和路径
    let _key = key.replace(/(^\s*)|(\s*$)/g, '')
    console.log(_key);
    let _method = 'get'
    let _url = _key.replace(/^(get|post|put|delete)\s*/i, function (rs, $1) {
      _method = $1.toLowerCase();
      return '';
    })
    //解析响应是json形式,还是回调形式
    //如果是json形式的,就拼装一个(req,res)=>{}回调函数,并设置一个随机的延迟时间,来模拟网络延迟
    if (typeof mockData[key] != 'function') {
      app[_method](_url, (req, res) => {
        let timeout = (Math.random() * 2800) + 200
        setTimeout(() => {
          res.json(mockData[key]) // 这是node中express的返回数据的方法,不过要这样:{data:{数据}}
          // 这样才能通过res.data直接获取到数据
        }, timeout);
      })
    }
    //如果响应已经是回调函数的形式了
    else {
      app[_method](_url, mockData[key])
    }

  }
}
