const http = require('http');
//const core = require('./core');
//test

const server = http.createServer( (req, res) => {
    let url = req.url;
    console.log('request to' + url);
    if (url === '/') {
        res.write('<html><meta><title>Board Game Selector Prototype</title></meta><body><form action="/collection" method="GET"><input type="text" name="username"/><input type="submit" value="Submit"></form><body></html>');
        console.log('response');
        return res.end();
    }
    if (url === '/collection') {
        console.log('collection request')
        let data = [];
        let username = "";
        req.on('data', (chunk) => {
            data += chunk;
        });
    
        req.on('end', () => {
            console.log(data);
            username = data.slice("=")[1];
            console.log(username);
        });
        res.statusCode = "302";
        res.setHeader("Location", "/");
        return res.end();
    }
});
server.listen('3000');