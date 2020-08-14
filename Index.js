let restify = require('restify');
let listaRoute = require('./JS/Script');
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*']
});

let server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.fullResponse());

server.pre(cors.preflight);
server.use(cors.actual)

console.log(typeof (listaRoute));

listaRoute(server);

server.listen(3000, function () {
    console.log("Servidor na Porta: " + server.url);
});
