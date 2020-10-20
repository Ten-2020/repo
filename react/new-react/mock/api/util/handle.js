const fs = require('fs')
module.exports = {
  // 形成形如：[^&]+&[^&]+&[^&]+ 的key
  // 以 & 为间隔,一来它不是关键字,本来想用的 | 这个,但是它是关键字
  // [^&]+ 表示 除&个的所有字符.
  mixReg: (vals) => {
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
  writeJson: (res, state, str) => {
    let { fileUrl } = state
    let json = JSON.stringify(str)
    console.log('要写入的数据', json)
    fs.writeFile(fileUrl, json, function (err) {
      if (err) {
        console.error(err);
        res.status(403).json({
          status: 'error',
          code: 403
        })
      } else {
        console.log('----------写入成功-------');
        state.songs = str
        return res.json()
      }
    })
  }
}