const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
global.Game = require('./src/app.js')
global.ComputerChoice = require('./src/app.js')
global.randomChoice = require('./src/app.js')