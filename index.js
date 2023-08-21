const express = require('express');
const base64 = require('base-64')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();


app.use('/api', createProxyMiddleware({
  target: 'https://fitsharing.oxem.dev',
  changeOrigin: true,
  cookieDomainRewrite: '127.0.0.1',
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Accept, Accept-Encoding,' +
      ' Accept-Language, Cache-Control, Connection, Host, Origin, Pragma, Referer, Sec-Fetch-Dest,' +
      ' Sec-Fetch-Mode, Sec-Fetch-Site, User-Agent, Authorization'
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true'
  }
}))


// app.use('/api', createProxyMiddleware({
//   target: 'https://qbik.ru',
//   changeOrigin: true,
//   onProxyRes: function (proxyRes, req, res) {
//     proxyRes.headers['Access-Control-Allow-Origin'] = '*'
//     proxyRes.headers['Access-Control-Allow-Headers'] = '*'
//     proxyRes.statusCode = 200
//   },
//   onProxyReq: function (proxyReq, req, res, options) {
//     proxyReq.setHeader('Authorization', `Basic ${base64.encode('oxem:oxempass')}`)
//     proxyReq.setHeader('Content-Type', `application/json`)
//     proxyReq.setHeader('Accept', `application/json`)
//   }
// }))


// app.use('/wp-json/wp/v2', createProxyMiddleware({
//   target: 'https://tvaq.oxem.dev',
//   changeOrigin: true,
//   onProxyRes: function (proxyRes, req, res) {
//     proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
//     proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Accept, Accept-Encoding,' +
//       ' Accept-Language, Cache-Control, Connection, Host, Origin, Pragma, Referer, Sec-Fetch-Dest,' +
//       ' Sec-Fetch-Mode, Sec-Fetch-Site, User-Agent'
//     proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
//     proxyRes.headers['Access-Control-Allow-Credentials'] = 'true'
//     proxyRes.headers['Content-Type'] = 'application/json; charset=UTF-8'
//   },
//   onProxyReq: function (proxyReq, req, res, options) {
//     proxyReq.setHeader('Authorization', `Basic ${base64.encode('oxem:oxempass')}`)
//     proxyReq.setHeader('Content-Type', `application/json; charset=UTF-8`)
//   }
// }))
//
// app.use('/wp-json/contact-form-7/v1', createProxyMiddleware({
//   target: 'https://tvaq.oxem.dev',
//   changeOrigin: true,
//   onProxyRes: function (proxyRes, req, res) {
//     proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
//     proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Accept, Accept-Encoding,' +
//       ' Accept-Language, Cache-Control, Connection, Host, Origin, Pragma, Referer, Sec-Fetch-Dest,' +
//       ' Sec-Fetch-Mode, Sec-Fetch-Site, User-Agent'
//     proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
//     proxyRes.headers['Access-Control-Allow-Credentials'] = 'true'
//   },
//   onProxyReq: function (proxyReq, req, res, options) {
//     proxyReq.setHeader('Authorization', `Basic ${base64.encode('oxem:oxempass')}`)
//   }
// }))

app.listen(4000);
