<template>
  <div class="hello">
    <template v-if="email">
      <a href="/" class="btn btn-primary">Log out</a>
      <p> Hi there, {{ email }}</p>
    </template>
    <template v-else>
      <a href="http://localhost:8082/login" class="btn btn-primary">Log in with Spotify</a><br>
    </template>
  </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                email: ''
            }
        },
        mounted() {
            let uri = window.location.href;
            if (uri.indexOf('access_token') > -1) {
                let access_token = uri.indexOf('access_token');
                let refresh_token = uri.indexOf('refresh_token');
                let access = uri.substring(access_token + 13, refresh_token - 1);
                Vue.axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': 'Bearer ' + access
                    }
                }).then((response) => {
                    this.email = response.data.email;
                })
            }
        }
    }
</script>

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
