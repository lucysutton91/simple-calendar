const express = require('express')
const db = require('./db')


export default class WebServer {
  constructor () {
    this.app = express()
    // this.db = db.sync()
    this.app.use('/', require('./api'))
    this.app.use(express.static('dist/public'))
  }
  start () {
    return new Promise((resolve, reject) => {
      try {
        this.db = db.sync()
        this.server = this.app.listen(3000, function () {
          resolve()
        })
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }
  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (err) {
        console.error(err.message)
        reject(err)
      }
    })
  }
}
