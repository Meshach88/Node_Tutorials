// creating and removing directories

const fs = require('fs')

if(!fs.existsSync('./newDir')){  //checks to see if a directory with the same name does not exist before creating the directory in order to avoid overwriting a directory.
    fs.mkdir('./newDir', (err)=>{
        if (err) throw err
        console.log('Directory created')
    
    })
}
if(fs.existsSync('./newDir')){    // checks to see if the directory exists before trying to delete/remove to avoid uncaught errors.
    fs.rmdir('./newDir', (err)=>{
        if (err) throw err
        console.log('Directory removed')
    
    })
}
