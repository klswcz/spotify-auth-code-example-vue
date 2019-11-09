<template>
  <div class="hello">
    <template v-if="this.user">
      <h1>Hi there, {{ this.user.display_name }}</h1>
      <img :src="this.user.images[0].url" alt="profile_picture" class="profile_pic">
      <p>Email address: {{ this.user.email }}</p>
      <p>
        <a :href="this.user.external_urls.spotify">Link to your profile</a>
      </p>
      <p>Number of followers: {{ this.user.followers.total }}</p>
      <p>
        <button v-on:click="logOut()" class="btn btn-primary">Log out</button>
      </p>
    </template>
    <template v-else>
      <h1>Log in to Spotify using Authorization Code flow</h1>
      <a href="YOUR_SERVER_ADDRESS/login" class="btn btn-primary">Log in with Spotify</a><br>
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
        computed: {
            user() {
                return this.$store.getters.getUser
            }
        },
        methods: {
            logOut() {
                this.$store.commit('mutateUser', null);
                this.$router.push({ name: 'Home'})
            }
        },
        created() {
            if (this.$route.query) {
                Vue.axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': 'Bearer ' + this.$route.query.access_token
                    }
                }).then((response) => {
                    this.$store.commit('mutateUser', response.data);
                    console.log('Response from server: ');
                    console.log(this.$store.state.user);
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

  .profile_pic {
    width: 100px;
  }
</style>
