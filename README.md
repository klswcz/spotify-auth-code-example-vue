# Example VueJS app with implementation of Spotify's Authorization Code API flow

Project showcases flow that let's you fetch access and refresh token ([find out more here](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow)).

Frontend comes with Vue Router and VueX already baked in.

## Project setup
### Set up your project credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard and add this url
`http://localhost:8081/callback/` to the Redirect URIs list.

Open a project, go to server.js file and update `client_id`, `client_secret`, `redirect_uri`, `server_address` and `frontend_server_port` variables.
Open HelloWorld.vue and replace `YOUR_SERVER_ADDRESS` with `http://localhost:8081/callback/`
### Install dependencies
```
yarn install
```

### Run VueJS
```
yarn run serve
```

### Run Express server
```
pm2 start server.js
```
Then, open http://localhost:8080 in a browser.
