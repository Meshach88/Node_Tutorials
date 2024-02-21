const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'text1.txt'), 'utf-8', (err, data) => {   // hardcoding the path like this './files/text1.txt' might lead to issues with different operating systems. Some operating systems use '/' while others use '\' to specify path. It's better to use the path module.
    if (err) throw err;
    console.log(data)
})

fs.writeFile(path.join(__dirname, 'files', 'newText.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write complete')

    fs.appendFile(path.join(__dirname, 'files', 'newText.txt'), '\n\nNice to meet you too', (err) => {
        if (err) throw err;
        console.log('Append complete')
        // fs.appendFile adds content to a file, but also creates a file if it does not exists.

        fs.rename(path.join(__dirname, 'files', 'newText.txt'), path.join(__dirname, 'files', 'renamedText.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete')
        }) 
    })

    //Notice the use of callbacks to determine the order in which file operations are executed by node. Controlloing the flow.
})





console.log('Hello ...')

// exit on uncaught errors

process.on('uncaughtException', err => {
    console.error (`There was an uncaught error: ${err}`)
    process.exit(1)
})