const fs = require('fs')
module.exports = {
  mixReg: (vals) => { // 形成形如：*&*&* 的key
    let reg = ''
    let general = ''
    for (let v of vals) {
      let reg_ = v ? v : '[^&]+'
      reg = reg + reg_ + '&'
      general += '[^&]+&'
    }
    if (reg === general) return 1 // 表示参数都为空
    if (reg.endsWith('&')) {
      reg = reg.slice(0, reg.length - 1)
    }
    return reg
  },
  readJson: (fileUrl) => {
    let dataJson = ''
    fs.readFile(fileUrl, function (err, data) {
      if (err) {
        return console.error(err);
      }
      let dataStr = data.toString()
      let dataJson = JSON.parse(dataStr)
      // console.log('读取到的数据', dataJson)
      // var person = data.toString();//将二进制的数据转换为字符串
      // person = JSON.parse(person);//将字符串转换为json对象
      // person.data.push(params);//将传来的对象push进数组对象中
      // person.total = person.data.length;//定义一下总条数，为以后的分页打基础
      // console.log(person.data);
    })
    console.log('读取到的数据', dataJson)
    return dataJson
  },
  writeJson: (params) => {
    //现将json文件读出来
    fs.readFile('./mock/person.json', function (err, data) {
      if (err) {
        return console.error(err);
      }
      var person = data.toString();//将二进制的数据转换为字符串
      person = JSON.parse(person);//将字符串转换为json对象
      person.data.push(params);//将传来的对象push进数组对象中
      person.total = person.data.length;//定义一下总条数，为以后的分页打基础
      console.log(person.data);
      var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile('./mock/person.json', str, function (err) {
        if (err) {
          console.error(err);
        }
        console.log('----------新增成功-------------');
      })
    })
  }
}