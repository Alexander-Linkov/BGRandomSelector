const http = require('http');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

http.get('http://localhost:8088/xmlapi2/collection?username=fill_freeman', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(data);
        let xml = new dom().parseFromString(data);
        let message = xpath.select('//message', xml)[0].firstChild.data;
        console.log(message);
    });

}).on('error', (err) => {
    console.log(err.message);
});
