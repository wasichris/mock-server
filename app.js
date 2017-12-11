var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var sassMiddleware = require('node-sass-middleware')

// 引入 routes 檔案
var index = require('./routes/index')
var users = require('./routes/users')
var auth = require('./routes/api/auth') /* api */
var cr00 = require('./routes/api/cr00') /* api */

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

// 設定 CORS
app.use((req, res, next) => {
  // 如果要發送 Cookie，Access-Control-Allow-Origin 就不能設為星號 wildcard，必須指定明確的、與請求網頁一致的域名。
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
  // CORS 請求默認不發送 Cookie 和 HTTP 認證信息，如果要把 Cookie 發到服務器，要服務器同意並指定 Access-Control-Allow-Credentials 為 true
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.cookie('isVisit', 1, {maxAge: 60 * 1000})
  next()
})

// 設定 routes 的 root path
app.use('/', index)
app.use('/users', users)
app.use('/api/auth', auth) /* api */
app.use('/api', cr00) /* api */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
