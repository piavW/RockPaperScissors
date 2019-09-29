# Rock-Paper-Scissors application

## What the code does
The code is supposed to deliver a web-based application where you can play rock-paper-scissors against a computer. Where the computer randomizes it's output. 
Main principles of the game:
Rock vs Paper -> Paper wins
Rock vs Scissors -> Rock wins
Paper vs Scissor -> Scissor wins

## Comments
**regarding the randomization**
Since the method Math.floor is used to produce random choices of rock/paper/scissor, which is a built in method, there is no need to test it. However I have manually tested that the computers choice does output all available choices in a non specific order when told to give a choice 9 times. 

## Dependencies
- JavaScript
- NodeJS
- Chai
- superstatic
- puppeteer
- e2e_training_wheels (for unit testing, install through automatic install https://www.npmjs.com/package/e2e_training_wheels)
- Cucumber (for feature testing)

## SetUp
Make sure you have npm and node installed, you can check throuh `$ npm -v` and `$ node -v`
Install packages through `$ npm install cucumber chai puppeteer superstatic --save-dev`
Install e2e_training_wheels through [automatic install](https://www.npmjs.com/package/e2e_training_wheels), when you run `$ npm run test` all test should go green. 
Make sure you install the most recent babel-loader `$ npm install --save-dev babel-loader@^7`

## How to Use tests

For unit testing: `$ npm run specs`
For feature testing: `$ npm run cucumber`

## Inspired by the following sources:
For [rock-paper-scissor logic](https://stackoverflow.com/questions/11377117/rock-paper-scissors-determine-win-loss-tie-using-math)

For stub random: https://sinonjs.org/releases/v7.5.0/stubs/ &  https://stackoverflow.com/questions/10515000/how-to-test-with-math-random-in-javascript/10516416

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