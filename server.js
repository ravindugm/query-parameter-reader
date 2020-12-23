const http = require("http");
const url = require("url");
const zlib = require("zlib");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {

    res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
    res.write('The response\n\n');
    console.log(req.url);

    let data = req.url;

    let paramString = data.split('?')[1];

    let queryString = new URLSearchParams(paramString);

    for (let pair of queryString.entries()) {
        console.log("Key is:" + pair[0]);
        let enco = Buffer.from(pair[1]).toString('base64');
        console.log("Value is:" + enco);

        console.log('Query is : ' + pair[0] + '=' + enco);
    }

    res.end('\n\nEnd of Message to Browser');

});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
