const express = require('express')

export default class WebServer {
  constructor () {
    this.app = express()
    this.app.use(express.static('dist/public'))
  }
  start () {
    return new Promise((resolve, reject) => {
      try {
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
