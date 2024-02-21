const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises


const logEvents = require('./logEvents')
const EventEmitter = require('events')
class Emitter extends EventEmitter { }

//initialize object
const myEmitter = new Emitter()

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method)
})

server.listen (PORT, () => console.log(`Server running at port ${PORT}`))








// //add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))
// //Emit event
// myEmitter.emit('log', 'Log event was emitted!')
