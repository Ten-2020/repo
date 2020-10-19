// const songs = require('../pri/song/song')
const utils = require('./util/handle')
let songs = ''
if (!songs) {
  songs = utils.readJson('./mock/pri/song/song.json')
}

module.exports = {
  'POST /wanyue/search': (req, res) => {
    let vals = Object.values(req.body)
    let reg = utils.mixReg(vals)
    console.log('读取到的数据', songs)
    if (reg === 1) {
      return res.json(Object.values(songs))
    } else {
      let keys = Object.keys(songs)
      let list = []
      for (let k of keys) {
        if (new RegExp(reg).test(k)) {
          list.push(songs[k])
        }
      }
      return res.json(list)
    }
  },
  'POST /wanyue/edit': (req, res) => {
    return res.json()
  }
}
