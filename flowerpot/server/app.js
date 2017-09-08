const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const resolve = file => path.resolve(__dirname, file)
const api = require('./api_router')
const app = express()

app.set('port', (process.env.port || 3000))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

app.use(api)

//移动端
// app.get('/', function (req, res) {
//   var iphone6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
//   var pc = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
// //   const fileName = db.initialized ? 'index.html' : 'setup.html'
//   const userAgent = req.headers['user-agent']
//   const fileName = userAgent==pc?'index.html':'mobile.html';
//   const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
//   // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
//   console.log('send')
//   res.send(html)
// })

app.get('/', function (req, res) {
  const fileName = 'index.html'
  const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
  // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
  console.log('send')
  res.send(html)
})

app.get('*',function(req,res){
  res.end('404 NOT FOUND')
})


app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
