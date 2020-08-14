'use strict'

function register(server) {
    let baseUrl = '/script';

    let musics = [
        { Musica: 'Higway to hell', BandaDJ: 'AC/DC' },
        { Musica: 'Nave espacial', BandaDJ: 'Liu'}
    ];

    server.get(baseUrl, function (req, res, next) {
        res.json(200, musics);
    });

    server.get(baseUrl + '/:id', function (req, res, next) {
        res.json(200, req.params.id);
    });
    
    server.post(baseUrl, function (req, res, next) {
        let obj = req.body;        
        musics.push(obj);
        res.json(201, obj);
    })

    

}

module.exports = register;

