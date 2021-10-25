const backstop = require('backstopjs');
const backstopConfig = require('./backstop-settings.js')();

backstop('reference', { config: backstopConfig });