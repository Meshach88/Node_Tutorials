// A better way to carry out file operations in the 'index.js' file using promises, async and await functions

const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try{
        await fsPromises.writeFile(path.join(__dirname, 'files', 'text2.txt'), 'I am learning Node.js')
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text2.txt'), 'utf-8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'text2.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nDoing Great')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8', data)
        console.log(newData)
    }catch(err){
        console.error(err)
    }
}

fileOps()