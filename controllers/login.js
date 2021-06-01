let express = require('express')
let request = require('request')
let querystring = require('querystring')
const fetch = require("node-fetch");

let app = express()

let redirect_uri = 'http://localhost:8080/'

module.exports = {
  getLogin: (req, res)=>{
      res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.client_id,
        scope: 'user-read-currently-playing',
        redirect_uri
      }))
      app.get('/login', function(req, res) {
        res.redirect('https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: process.env.client_id,
            scope: 'user-read-currently-playing',
            redirect_uri
          }))
      })
      app.get('/callback', function(req, res) {
        let code = req.query.code || null
        let authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          form: {
            code: code,
            redirect_uri,
            grant_type: 'authorization_code'
          },
          headers: {
            'Authorization': 'Basic ' + (new Buffer(
              process.env.client_id + ':' + process.env.client_secret
            ).toString('base64'))
          },
          json: true
        }
        request.post(authOptions, function(error, response, body) {
          var access_token = body.access_token
          let uri = redirect_uri
          res.redirect(uri + '?access_token=' + access_token)
        }) // end of post request
      }) // end of callback
  }, // end of getLogin method

  getCurrentlyPlaying: async (access_token)=>{
      const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + access_token}
      });

      const data = await result.json();
      console.log(data);
      // res.render('index.ejs')
    }
}

        // spotify craziness begins
//         const express = require('express')
//         var request = require('request'); // "Request" library
//         var cookieParser = require('cookie-parser');
//         var cors = require('cors');
//
//
// /**
//  * Generates a random string containing numbers and letters
//  * @param  {number} length The length of the string
//  * @return {string} The generated string
//  */
// var generateRandomString = function(length) {
//   var text = '';
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//
//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };
//
// var stateKey = 'spotify_auth_state';
//
// var app = express();
//
// app.use(express.static(__dirname + '/public'))
//    .use(cors())
//    .use(cookieParser());
//
// app.get('/login', function(req, res) {
//
//   var state = generateRandomString(16);
//   res.cookie(stateKey, state);
//
//   // your application requests authorization
//   var scope = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });
//
// app.get('/callback', function(req, res) {
//
//   // your application requests refresh and access tokens
//   // after checking the state parameter
//
//   var code = req.query.code || null;
//   var state = req.query.state || null;
//   var storedState = req.cookies ? req.cookies[stateKey] : null;
//
//   if (state === null || state !== storedState) {
//     res.redirect('/#' +
//       querystring.stringify({
//         error: 'state_mismatch'
//       }));
//   } else {
//     res.clearCookie(stateKey);
//     var authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code: code,
//         redirect_uri: redirect_uri,
//         grant_type: 'authorization_code'
//       },
//       headers: {
//         'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//       },
//       json: true
//     };
//
//     request.post(authOptions, function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//
//         var access_token = body.access_token,
//             refresh_token = body.refresh_token;
//
//         var options = {
//           url: 'https://api.spotify.com/v1/me',
//           headers: { 'Authorization': 'Bearer ' + access_token },
//           json: true
//         };
//
//         // use the access token to access the Spotify Web API
//         request.get(options, function(error, response, body) {
//           console.log(body);
//         });
//
//         // we can also pass the token to the browser to make requests from there
//         res.redirect('/#' +
//           querystring.stringify({
//             access_token: access_token,
//             refresh_token: refresh_token
//           }));
//       } else {
//         res.redirect('/#' +
//           querystring.stringify({
//             error: 'invalid_token'
//           }));
//       }
//     });
//   }
// });
//
// app.get('/refresh_token', function(req, res) {
//
//   // requesting access token from refresh token
//   var refresh_token = req.query.refresh_token;
//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     },
//     json: true
//   };
//
//   request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;
//       res.send({
//         'access_token': access_token
//       });
//     }
//   });
// });

        // spotify craziness ends

  // res.render('index.ejs')
