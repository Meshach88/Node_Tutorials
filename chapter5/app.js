const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.get('^/$|/index(.html)?', (req, res)=>{
    // res.sendFile('./views/index.html', { root: __dirname})
    //OR
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

//To redirect pages
app.get('/orig-page(.html)?', (req, res)=>{
    res.redirect(301, '/new-page.html') //302 by default, the search engine will not say its permanent but temporal
})

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
