const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const ajv = require('ajv')()

const Datastore = require('nedb')

const db = new Datastore({ filename: 'data/db.json', autoload: true })

app.use('/', express.static('public/'))
app.use('/leaflet', express.static('node_modules/leaflet/dist/'))

http.listen(3000, function () {
  console.log('listening on *:3000')
})
