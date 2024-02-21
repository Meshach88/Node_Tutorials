const express = require('express')
const router = express.Router()
const path = require('path')


router.get('^/$|/index(.html)?', (req, res)=>{
    // res.sendFile('./views/index.html', { root: __dirname})
    //OR
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/new-page(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})

//To redirect pages
router.get('/orig-page(.html)?', (req, res)=>{
    res.redirect(301, '/new-page.html') //302 by default, the search engine will not say its permanent but temporal
})

module.exports = router