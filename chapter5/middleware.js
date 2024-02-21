const express = require('express')
const app = express()
const path = require('path')
// const cors = require('cors') // install cors first
const { logger } =  require('./middleware/logEvents')  // used curly braces for importing logger function because the logEvents module has two exported functions
const PORT = process.env.PORT || 3000
// Middleware: 3 types of middleware
// Built in middleware
// Custom middleware - the ones we make ourselves
// 3rd-party middleware

//custom middleware
// app.use((req, res, next)=>{          // for custom middleware we have to add the next function. The next() function is already provided in built-in functions that's why we don't need to add them there.
//     console.log(`${req.method} ${req.path}`)
//     next()
// })
//custom middleware logger
app.use(logger)

// CORS- Cross Origin Resource Sharing
// app.use(cors())

// Built-in middleware to handle urlencoded data, in order words, form-data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false })) //app.use is used to apply middleware to all routes coming in. So this applies to all routes below. { extended: false } is an options object.

//Built in middleware for handling json data
app.use(express.json())

//Buit-in middleware for serving static files
app.use(express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

app.use('/subdir', require('./routes/subdir'))
app.use('/', require('./routes/root'))

// app.get('^/$|/index(.html)?', (req, res)=>{
//     // res.sendFile('./views/index.html', { root: __dirname})
//     //OR
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })

// app.get('/new-page(.html)?', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
// })

// //To redirect pages
// app.get('/orig-page(.html)?', (req, res)=>{
//     res.redirect(301, '/new-page.html') //302 by default, the search engine will not say its permanent but temporal
// })

// Route handlers
app.get('/hello(.html)?', (req, res, next)=>{
    console.log('attempted to load hello.html')
    next()
}, (req, res) => {
    res.send('Hello World!')
})

// Chain routes
const one = (req, res, next) => {
    console.log('one')
    next()
}
const two = (req, res, next) => {
    console.log('two')
    next()
}
const three = (req, res) => {
    console.log('three')
    res.end('Finished')
}

app.get('/chain', [one, two, three]) // route handlers in array


//For every other calls or get requests
app.get('/*', (req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



app.listen (PORT, () => console.log(`Server running at port ${PORT}`))








// //add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))
// //Emit event
// myEmitter.emit('log', 'Log event was emitted!')
