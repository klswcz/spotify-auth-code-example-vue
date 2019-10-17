<template>
  <div class="hello">
    <h1>Siemano witam w mojej stronce })</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        mounted() {
            console.log(1);
            // let SpotifyWebApi = require('spotify-web-api-node');
            // let spotifyApi = new SpotifyWebApi({
            //     clientId: '7c64cd79ca78468b8119df22e9f6d9a6',
            //     clientSecret: '7dbf678476c348129dedd98cec185a26',
            //     redirectUri: 'http://www.example.com/callback'
            // });
            // axios.get('https://accounts.spotify.com/authorize', {
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //     },
            //     client_id: spotifyApi.getClientId(),
            //     response_type: 'token',
            //     redirect_uri: '/passed',
            // });


            // spotifyApi.setAccessToken();
            //
            //
            // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
            //     function (data) {
            //         console.log('Artist albums', data.body);
            //         console.log('test');
            //     },
            //     function (err) {
            //         console.error(err);
            //     }
            // );
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
