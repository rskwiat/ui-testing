## UI Testing - Built with Webdriver.io / Webdrivercss

WebdriverIO lets you control a browser or a mobile application with just a few lines of code. Your test code will look simple, concise and easy to read.

### Dependencies

#### Selenium Standalone

Selenium drives the browser to run all the tests - we need this installed globally to run all the tests

    npm install selenium-standalone@latest -g
    selenium-standalone install
    selenium-standalone start

#### Image Magick

Webdriver css uses Imagemagick to save images

    brew install imagemagick --build-from-source

If the command fails - unlink jpeg and relink the file

    brew install jpeg
    brew unlink jpeg
    brew link jpeg

In a new command line tab install / run seleninum standalone

    selenium-standalone install
    selenium-standalone start

#### Install NPM modules

    npm install webdriverio webdrivercss --save-dev

This allows us to run webdriver and run our tests

All the tests are located in the /tests/visual.js file (this can be named whatever we want).

#### Run a test

Grunt has been updated to have the node command for running the tests.

    grunt test

All your images will be saved inside the /tests/ folder under test-1 or diff-1.
Currently we are only testing if there is navigation + hover state, the terms page content, etc.

#### Layout of a test

```
.webdrivercss('navigation', [ {name: 'desktop', elem: '.blog-nav', screenWidth: resolutions.slice(3,5)}])
```

#### Writing a new test

Coming Soon. In the meantime [read the docs](http://webdriver.io/)
