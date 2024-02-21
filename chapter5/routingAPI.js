const express = require('express')
const app = express()
const path = require('path')
// const cors = require('cors') // install cors first
const { logger } =  require('./middleware/logEvents')  // used curly braces for importing logger function because the logEvents module has two exported functions
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000

app.use(logger)


app.use(express.urlencoded({ extended: false })) //app.use is used to apply middleware to all routes coming in. So this applies to all routes below. { extended: false } is an options object.

app.use(express.json())

//middleware for cookies
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))

app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'))


// app.get('/*', (req, res)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// OR
app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({"error": "404 Not Found"})
    }else {
        res.type('txt').send("404 Not Found")
    }
})



app.listen (PORT, () => console.log(`Server running at port ${PORT}`))








// //add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg))
// //Emit event
// myEmitter.emit('log', 'Log event was emitted!')
