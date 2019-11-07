const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

module.exports = { driver };