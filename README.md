# Starter Project for Phaser 3 and Facebook Instant Games using TypeScript

A TypeScript webpack project that includes the phaser library in its output. Base build size is ~700KB. Facebook Instant Games SDK is available when loaded in the browser. As no typings are available for the SDK there is a bit of guesswork involved with integrating it in game.

The aim of the project is to create a quicker entry to development using these libraries and exploiting them as much as possible.

### Phaser 3
Phaser 3 is a great free open source game engine which makes use of the native HTML5 elements and will work in the browser whether it supports WebGL or the simpler Canvas. 
Read more: [Phaser Home Page](http://phaser.io/)

It has many great examples covering all aspects of development at: [Phaser 3 Examples](http://labs.phaser.io/)

### Facebook Instant Games
Facebook Instant Games functionality is only testable once your game is being hosted on the Facebook servers. It was important to check where the game was being hosted before attempting to integrate the Facebook Instant Games SDK script into any game code. This was easy by looking at the window.location.host string and checking it matched “www.facebook.com“ and then making adjustments in the code to account for the host not being on Facebook while developing. Read more: [Facebook Developers Instant Games SDK](https://developers.facebook.com/docs/games/instant-games/sdk)

## How to get started
### Clone
You can clone or download this and use it as you wish and help improve it

### Install Packages
```
npm install
```
Install all the packages specified in package.json

### Run Development Server with Webpack
```
npm run dev
```
Visit localhost:8080

### Build for Production
```
npm run build
```
Output is bundle.js in dist folder

The dist folder can be compressed and uploaded to Facebook Instant Games Hosting and tested

## Built with
### Developmemt Dependencies
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Development server
* [webpack](https://github.com/webpack/webpack) - Production build bundler
* [webpack-cli](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) - Webpack command line interface
* [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) - Production build pipeline
* [TypeSript](https://github.com/Microsoft/TypeScript) - Scalable JavaScript

### Production Dependencies
* [Phaser 3 and Typings](https://github.com/photonstorm/phaser) - Game engine (part of bundle)

### Other
* [Facebook Developers Instant Games SDK](https://developers.facebook.com/docs/games/instant-games/sdk) - FBInstant made available by index.html (not part of bundle)

### Feature Requests
* Typings for Facebook Instant Games SDK to remove some of the guesswork when using it
* Cleaner interface between the game and scoring mechanisms to make integration with Facebook much nicer
* Tests, currently there are no tests but the functions should be simple enough to only accomplish one thing which they do
* Anyone with some imagination will be able to improve this starter project, to make it easier for others starting out using this workflow
