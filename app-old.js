const http = require('http');

http.createServer((req, res) => {
    let salida = {
        nombre: 'Santiago',
        edad: 22,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');