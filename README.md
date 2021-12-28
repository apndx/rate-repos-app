# rate-repos-app
FullStack Course Week 10 - React Native App

To run locally, create .env file in the root directory of the project with the following content:

```
ENV=development
APOLLO_URI=http://<ip shown in your expo developer tool console>:5000/graphql
```

Instructions for setting up the development environment are found in the [course material](https://fullstackopen.com/en/part10/introduction_to_react_native#setting-up-the-development-environment).

## Start app locally for development

### Server

First clone and configure [a server](https://github.com/fullstack-hy2020/rate-repository-api).

Start the project locally in the server root folder:

```
npm start
```

### Client

Start the project locally in the root folder:

```
npm start
```

The command opens expo developer tools in a browser. A QR code can be used to connect with a mobile device that has Expo app installed. The mobile device should use the same LAN so that a connection can be established.
