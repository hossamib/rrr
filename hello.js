const http = require('http'); // Loads the http module
http.createServer((request, response) => {
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 2. Write the announced text to the body of the page
    response.write('Hello, Node Js World!\n');
    // 3. Tell the server that all of the response headers and body have been sent
    response.end();
}).listen(1337); // 4. Tells the server what port to be on

/* var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('Helllllo, Node js');
}).listen(8080); */