const { format } = require('date-fns')   // 'date-fns' stands for date functions. It's a package for formatting dates
const {v4: uuid} = require('uuid') // import version 4 of uuid as uuid (alias). uuid is a package that generates id everytime we run the file.

//Common Node Modules
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
//
    } catch (err) {
        console.error(err)
    }
}


module.exports = logEvents


// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))  //tab delimited
// console.log(uuid())
// console.log()