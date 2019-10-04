# Rock-Paper-Scissors application
Created by [Pia von Wachenfelt](https://github.com/piavW)
Deployed at [GitHub Pages](https://piavw.github.io/RockPaperScissors/)

## What the code does
The code is supposed to deliver a web-based application where you can play rock-paper-scissors against a computer. Where the computer randomizes it's output. 
Main principles of the game:

Rock vs Paper -> Paper wins
Rock vs Scissors -> Rock wins
Paper vs Scissor -> Scissor wins

## Dependencies
- JavaScript
- NodeJS
- Chai
- superstatic
- puppeteer
- e2e_training_wheels (for unit testing, install through automatic install https://www.npmjs.com/package/e2e_training_wheels)
- Cucumber (for feature testing)

## SetUp
Make sure you have npm and node installed, you can check throuhh `$ npm -v` and `$ node -v`
Install packages through `$ npm install cucumber chai puppeteer superstatic --save-dev`
Install e2e_training_wheels through automatic or manual [install](https://www.npmjs.com/package/e2e_training_wheels) (since we don't wanna use everything use manual, but if you're in a hurry go for automatic). When you run `$ npm run test` all test should go green. 
Make sure you install the most recent babel-loader `$ npm install --save-dev babel-loader@^7`

## How to Use tests
Remember to run `$ npm run build` is you change anything in app.js
For unit testing: `$ npm run specs`
For feature testing: `$ npm run cucumber`

## Inspiration
Pictures from : www.rd.com

## License
MIT-license

# User Stories
```
As a user
I want to be able to visit a website
To play a game of Rock, Paper, Scissor
```
```
As a user
I want to be able to click a button
To select rock, paper or scissor
```
```
As a user
When I've made my choice
I want to be able to see the computers choice
```
```
As a user
When I've chosen rock, paper or scissor
I want to be able to see if I've won or not
```