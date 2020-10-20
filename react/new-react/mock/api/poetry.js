// const songs = require('../pri/song/song')
const fs = require('fs')
const utils = require('./util/handle')
const { v1: uuidv1 } = require('uuid');
// let uuid = uuidv1() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'|这是根据时间戳生成的
const fileUrl = './mock/pri/song/song.json'
const state = {
  fileUrl: './mock/pri/song/song.json',
  itemSong: {
    "key": "",
    "name": "",
    "role": "",
    "author": "",
    "dynasty": "",
    "poetry": ""
  },
  songs:''
}

if (!state.songs) {
  let datas = fs.readFileSync(state.fileUrl) // 相对项目的路径
  let dataStr = datas.toString() // 将二进制的数据转换为字符串
  state.songs = JSON.parse(dataStr) // 将字符串转换为json对象
}

module.exports = {
  'POST /wanyue/search': (req, res) => {
    let {songs}  = state
    let { name, author } = req.body
    let vals = ['', name, author] // 加上key是为了在编辑时能够找到数据的来源
    let reg = utils.mixReg(vals)
    // console.log('读取到的数据', songs)
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
    console.log('要编辑的数据', req.body)
    let {songs}  = state
    let { key, name, author } = req.body
    let reg = `${key}&[^&]+&[^&]+`
    let keys = Object.keys(songs)
    let item = ''
    for (let k of keys) {
      if (new RegExp(reg).test(k)) {
        item = songs[k]
        delete songs[k] // 删掉再添加
        break
      }
    }
    songs[`${key}&${name}&${author}`] = Object.assign(item, req.body)
    utils.writeJson(res, state, songs)
  },
  'POST /wanyue/fresh': (req, res) => {
    let {songs}  = state
    let { name, author } = req.body
    let uuid = uuidv1()
    let wholeItem = Object.assign(state.itemSong, req.body, { key: uuid })
    songs[`${uuid}&${name}&${author}`] = wholeItem
    utils.writeJson(res, state, songs)
  }
}
