const fs = require('fs');
const readstream = fs.createReadStream('./documents/moretext.txt', { encoding: 'utf8' });

//Read stream file

readstream.on('data', (chunk) => {
    console.log(chunk);
})