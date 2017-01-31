var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: '72f367755ecb493093cc9a73f958684d',
    clientSecret: 'b021ffa892e347ef8057f95f7f7e4961',
    redirectUri: 'http://localhost/'
});


module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendfile('./public/index.html');
    });

    var data = {};

    app.get('/data', function (req, res) {
        //res.json(data);

        spotifyApi.searchTracks(req.query.search)
            .then(function (data) {
                res.json(data.body.tracks.items);
            }, function (err) {
                console.error(err);
            });
    });
};