# Coinage app
This simple application takes a given number of pennies and calculates the minimum number of Sterling coins needed to make that amount.

## Setting up

Install the required tools: `yo`, `gulp`, `bower`
```
npm install -g yo gulp bower
```

Install the dependencies
```
npm install && bower install
```

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

## Production version
The production version is located in `dist/` folder
To run it just open `index.html` file
