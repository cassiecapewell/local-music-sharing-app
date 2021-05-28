const clientId = '';
const clientSecret = '';

module.exports = {
    getIndex: (req,res)=>{
        // console.log(data)
        res.render('index.ejs')
    },
    getCurrentlyPlaying: async (token)=>{
        const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(data);
        res.render('index.ejs')
      }





    // // private methods (APIController in video)
    // _getToken: async (req, res)=>{
    //   const result = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Authorization': 'Basic ' + btoa(clientId + ":" + clientSecret)
    //     },
    //     body: 'grant_type=client_credentials'
    //   });
    //
    //   const data = await result.json();
    //   return data.access_token;
    // },
    // // () taken out..... killed server
    //
    // _getCurrentlyPlaying: async (token)=>{
    //     const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    //       method: 'GET',
    //       headers: { 'Authorization' : 'Bearer ' + token}
    //     });
    //
    //     const data = await result.json();
    //     console.log(data);
    //   }

    // _getGenres: async (token)=>{
    //   const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
    //     method: 'GET',
    //     headers: { 'Authorization' : 'Bearer ' + token}
    //   });
    //
    //   const data = await result.json();
    //   return data.categories.items;
    // },
    //
    // _getPlaylistByGenre: async (token, genreId)=>{
    //
    //   const limit = 10;
    //
    //   const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=${limit}`, {
    //     method: 'GET',
    //     headers: { 'Authorization' : 'Bearer ' + token}
    //   });
    //
    //   const data = await result.json();
    //   return data.playlists.items;
    // },
    //
    // _getTracks: async (token, tracksEndPoint) => {
    //   const limit = 10;
    //
    //   const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
    //     method: 'GET',
    //     headers: { 'Authorization' : 'Bearer ' + token}
    //   });
    //
    //   const data = await result.json();
    //   return data.items;
    // },
    //
    // _getTrack: async (token, trackEndPoint) => {
    //
    //   const result = await fetch(`${trackEndPoint}`, {
    //     method: 'GET',
    //     headers: {'Authorization' : 'Bearer ' + token}
    //   });
    //
    //   const data = await result.json();
    //   return data;
    // },
    //
    // return {
    //   getToken() {
    //     return _getToken();
    //   },
    //   getGenres(token) {
    //     return _getGenres(token);
    //   },
    //   getPlaylistByGenre(token, genreId) {
    //     return  _getPlaylistByGenre(token, genreID);
    //   },
    //   getTracks(token, tracksEndPoint) {
    //     return _getTracks(token, tracksEndPoint);
    //   },
    //   getTrack(token, trackEndPoint) {
    //     return _getTrack(token, trackEndPoint);
    //   }
    // }
}
