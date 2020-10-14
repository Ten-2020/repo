const songs = require('../pri/song/song')
module.exports = {
  'POST /wanyue/search': (req, res) => {
    debugger
    const { author, name } = req.body
    console.log('获取到的条件', author, name)
    if (!author && !name) {
      return res.json({
        status: 'ok',
        code: 0,
        data: songs
      })
    }

  }
}
