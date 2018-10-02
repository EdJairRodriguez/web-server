
const fs = require('fs')

const consoleLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  console.log(`Time: ${now} ${req.method} ${req.url}`)
  next()
}

const fileLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const message = (`Time: ${now} ${req.method} ${req.url}\n`)
  fs.appendFile('server.log', message, (err) => {
    if (err) console.log(err)
  })
  next()
}

module.exports = {
  consoleLogMiddleware,
  fileLogMiddleware
}
