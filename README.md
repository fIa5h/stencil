# kickstart-meteor-react-flowrouter

A real time application template. Built using meteor, webpack, babel, react, flow-router and material design .

1. `curl https://install.meteor.com/ | sh`
1. `sudo apt install -y npm`
1. `sudo apt install -y git`
1. `git clone https://github.com/RyanThomasMusser/stencil.git`
1. `cd stencil`
1. `npm install`
1. `meteor run --production`

**Note** : sometimes if you just run with `meteor` you will **only** be able to connect with a browser on the same host. (Due to `GET http://localhost:3500/assets/web.js net::ERR_CONNECTION_REFUSED`)

### Next steps :

# Production
You can use meteor run, meteor build, mup or anything working with Meteor.

## Run in production mode
`meteor run --production`

## Build for production
`meteor build .`

## Deploy with Meteor-up
`mup deploy`

# Cordova
You need to do those 3 steps to make it works with iOS or Android:

1. Add the platform to your Meteor project

    ```javascript
    meteor add-platform ios
    meteor add-platform android
    ```
1. Allow access to your dev server in your `/mobile-config.js` file:

    ```javascript
    App.accessRule('http://192.168.1.100:3500/*');
    ```

1. Replace localhost by your local ip address in `webpack.json`.
