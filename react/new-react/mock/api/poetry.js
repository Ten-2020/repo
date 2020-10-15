const songs = require('../pri/song/song')
// 形成形如：*|*|* 的key
function mixReg (params) {
  let vals = Object.values(params)
  let reg = ''
  for (let v of vals) {
    let reg_ = v ? v : '*'
    reg = reg + reg_ + '|'
  }
  if (reg.endsWith('|')) {
    reg=reg.slice(0,reg.length-1)
  }
  return reg
}
module.exports = {
  'POST /wanyue/search': (req, res) => {
    console.log('查询条件', req.body);
    let reg = mixReg(req.body)
    console.log('正则', reg)
    const { author, name } = req.body
    let keys = Object.keys(songs)
    if (!author && !name) {
      return res.json({
        status: 'ok',
        code: 0,
        data: Object.values(songs)
      })
    } else {
      if (author && name) {
      }
    }
  }
}
