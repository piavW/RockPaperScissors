# Rock-Paper-Scissors application

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
Make sure you have npm and node installed, you can check throuh `$ npm -v` and `$ node -v`
Install packages through `$ npm install cucumber chai puppeteer superstatic --save-dev`
Install e2e_training_wheels through [automatic install](https://www.npmjs.com/package/e2e_training_wheels), when you run `$ npm run test` all test should go green. 
Make sure you install the most recent babel-loader `$ npm install --save-dev babel-loader@^7`

## Inspired by the following sources:
For [rock-paper-scissor logic](https://stackoverflow.com/questions/11377117/rock-paper-scissors-determine-win-loss-tie-using-math)

## License
MIT-license