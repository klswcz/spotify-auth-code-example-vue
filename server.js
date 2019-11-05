const express = require('express');
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('query-string');
const app = express();
app.use(express.static(__dirname + '/public'))
    .use(cors());

const client_id = '7c64cd79ca78468b8119df22e9f6d9a6'; // Your client id
const client_secret = '7dbf678476c348129dedd98cec185a26'; // Your secret
const redirect_uri = 'http://localhost:8082/callback/'; // Your redirect uri
const scope = 'user-read-email'; // Your scope

app.get('/login', function (req, res) {
    res.writeHead(302, {
        'Location': encodeURI(`https://accounts.spotify.com/authorize` +
            `?client_id=${client_id}` +
            `&response_type=code` +
            `&redirect_uri=${redirect_uri}` +
            `&scope=${scope}` +
            `&show_dialog=true`)
    });
    res.send();
});

app.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    const code = req.query.code || null;

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token,
                refresh_token = body.refresh_token;

            // we can also pass the token to the browser to make requests from there
            res.redirect('http://localhost:8080?' +
                querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                }));
        } else {
            res.redirect('http://localhost:8080?' +
                querystring.stringify({
                    error: 'invalid_token'
                }));
        }
    })
});

app.listen(8082);
