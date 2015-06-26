//Local instance
var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: ['chrome','firefox','safari']
});

var resolutions = [320, 640, 768, 1024, 1140];
var homePage = 'http://localhost:1337';
var config = require('./credentials.json');


// initialise WebdriverCSS for `client` instance
require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'tests/testImages',
    failedComparisonsRoot: 'tests/diffs-1'
});

client
  .init()
  .url(homePage)
  .title(function(err, res) {
    console.log('Title was: ' + res.value);
  })
  .webdrivercss('navigation', [
    {
      name: 'desktop',
      elem: '.blog-nav',
      screenWidth: resolutions.slice(3,5)
    }
  ])
  .moveToObject('.blog-nav-item', 1, 1)
  .webdrivercss('navigation - hover state',[
    {
      name: 'desktop',
      elem: '.blog-nav-item',
      screenWidth: resolutions.slice(4,5)
    }
  ])
  .webdrivercss('blog headers', [
    {
      name: 'all',
      elem: '.blog-header',
      screenWidth: resolutions
    }
  ])
  .webdrivercss('sidebar',[
    {
      name: 'all',
      elem: '.blog-sidebar',
      screenWidth: resolutions
    }
  ])
  .webdrivercss('mobile sidebar',[
    {
      name: 'mobile',
      elem: '.blog-sidebar',
      screenWidth: resolutions.slice(0,1)
    }
  ])

  .end();
