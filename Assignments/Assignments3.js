const fs = require('fs');


//Read file
fs.readFile('./documents/readnote.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());

})