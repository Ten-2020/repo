const songs = require('../pri/song/song')

function mixReg (vals) { // 形成形如：*&*&* 的key
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
}
module.exports = {
  'POST /wanyue/search': (req, res) => {
    // console.log('查询条件', req.body)
    let vals = Object.values(req.body)
    let reg = mixReg(vals)
    if (reg === 1) {
      return res.json({
        status: 'ok',
        code: 0,
        data: Object.values(songs)
      })
    } else {
      let keys = Object.keys(songs)
      let list = []
      for (let k of keys) {
        if (new RegExp(reg).test(k)) {
          list.push(songs[k])
        }
      }
      return res.json({
        status: 'ok',
        code: 0,
        data: list
      })
    }
  }
}
