var express = require('express')
var router = express.Router()

/** 登入 */
router.post('/CR000101', function (req, res, next) {
  const { headers, body } = req
  let response = {
    isPass: true,
    token: '888899990000'
  }
  // res.status(404)
  setTimeout(() => res.json(response), 500)
})

/** 取得個人資料 */
router.get('/CR000102', function (req, res, next) {
  let response = {
    account: 'WASICHRIS',
    email: 'chris@big.com',
    address: '103 Prince Street',
    city: 'New York',
    state: 'NY',
    zip: 1001,
    hasJob: true,
    weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    skills: ['react', 'vue'],
    sex: 'male',
    isEmployee: true
  }
  setTimeout(() => res.json(response), 200)
})

/** 取得系統設定參數 */
router.get('/CR000103', function (req, res, next) {
  let response = {
    sessionAlivePeriod: 10,
    isMaintain: false
  }
  setTimeout(() => res.json(response), 100)
})

/** 檢查 Token 是否有效 */
router.get('/CR000104', function (req, res, next) {
  const { headers: {authorization = null} } = req
  let response = {
    isPass: !!authorization
  }
  setTimeout(() => res.json(response), 200)
})

module.exports = router
