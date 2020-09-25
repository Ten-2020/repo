const users = require('../pri/user.js')
module.exports = {
  'POST /api/login': (req, res) => {
    const { password, username } = req.body
    let userItem = users[username]
    // console.log('用户', users, userItem, password, username)
    if (userItem) {
      if (userItem.password === password) {
        return res.json({
          status: 'ok',
          code: 0,
          // token: "sdfsdfsdfdsf",
          data: userItem
        })
      } else {
        return res.status(403).json({
          status: 'error',
          code: 403
        })
      }
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      })
    }
  }
}
