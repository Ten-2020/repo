const songs = require('../../../mock/pri/song/song')
// 形成形如：*&*&* 的key
function mixReg (vals) {
  let reg = '' // a&b&c
  let general = '' // *&*&*
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
    console.log('查询条件', req.body)
    let vals = Object.values(req.body)
    let reg = mixReg(vals)
    // console.log('返回的正则', reg)
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
        // /少年游&[^&]+/gm
        // /[^&]+&[^&]+/gm
        // /少年游&柳永/gm
        // /[^&]+&柳永/
        var aaa = new RegExp(reg)
        console.log('正则比较', reg, k, aaa.test(k))
        if (aaa.test(k)) {
        // if (k.match(`/${reg}/g`)) {
          list.push(songs[k])
        }
      }
      return res.json({
        status: 'ok',
        code: 0,
        data: list
      })
    }
    // const { author, name } = req.body

    // let keys = Object.keys(songs)
    // if (!author && !name) {
    //   return res.json({
    //     status: 'ok',
    //     code: 0,
    //     data: Object.values(songs)
    //   })
    // } else {
    //   if (author && name) {
    //   }
    // }
  }
}
