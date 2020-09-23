module.exports = {
  // =====================
  // The default GET request.
  '/api/user': {
    id: 1,
    username: 'kenny',
    sex: 6,
    data: {
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
