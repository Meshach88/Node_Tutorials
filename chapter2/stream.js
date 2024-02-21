// using streams for handling large files. It moves or copies data in chunks which is a better way of reading or writing data than taking everything at once


const fs = require('fs')
const path = require('path')


const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf-8'})

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'))

// rs.on('data', (dataChunck)=>{            // listening for data
//     ws.write(dataChunck)
// })

//OR

rs.pipe(ws) // yields the same result as the code in line 12-14 but is more efficient