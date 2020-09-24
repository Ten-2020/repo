module.exports = { // 把这里当做用户的数组,配有用户的基本设置还有权限角色等
  '/api/user': {
    // id: 1,
    // username: 'kenny',
    // sex: 6,
    data: { // 用这个data给response里的data赋值|真真是机灵的主意!
      id: 1,
      username: 'kenny',
      sex: 6,
    }
  },

  'GET /api/user/list': [
    {
      id: 1,
      username: 'kenny',
      sex: 6
    }, {
      id: 2,
      username: 'kenny',
      sex: 6
    }
  ],


  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  }
}
