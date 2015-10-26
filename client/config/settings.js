var info      = require('../package.json');
var path      = require('path');

var clientAppPath = path.join(__dirname, '../');

var devRelativeOutput     = '/assets/';
var prodRelativeOutput    = '/assets/';

var devOutput     = path.join(__dirname, '../../app', devRelativeOutput);
var prodOutput    = path.join(__dirname, '../../build', prodRelativeOutput);

// There is a warning if the .env file is missing
// This is fine in a production setting, where settings
// are loaded from the env and not from a file
require('dotenv').load({path: path.join(__dirname, '../../.env')});

var hotPort = process.env.ASSETS_PORT || 8080;

module.exports = {
  title: info.title,
  author: info.author,
  version: info.versions,
  build: Date.now(),

  devRelativeOutput: devRelativeOutput,
  prodRelativeOutput: prodRelativeOutput,

  devOutput: devOutput,
  prodOutput: prodOutput,

  // Dev urls
  devAssetsUrl: process.env.ASSETS_URL || 'http://localhost:' + hotPort,

  hotPort: hotPort,
  
  entries: {
    app: clientAppPath + 'js/app.jsx'
  },

  cssEntries: {
    
  }

};
