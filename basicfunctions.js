const {driver} = require(`./driver`);
const {By, until } = require('selenium-webdriver');
const assert = require('assert');
const { cssSelectors } = require(`./selectors`);
const {testData} = require(`./testdata`);

const findByCssAndClick = async CssSelector => {
    await driver.findElement(By.css(CssSelector)).click();
  };
const sendDataWithCSS = async (cssSelector, sendData) => {
  await driver.wait(until.elementLocated(By.css(cssSelector))).sendKeys(sendData);
};
const compareStyleCss = async (selector, style, expected) => {
  const selectorPath = await driver.findElement(By.css(selector));
  const getStyle = await selectorPath.getCssValue(style);
  assert.equal(getStyle, expected);
};
const deleteDataFromInput = async cssSelector => {
  await driver.wait(until.elementLocated(By.css(cssSelector)));
  await driver.findElement(By.css(cssSelector)).clear();
};
const checkElementVisibleCss = async cssSelector => {
  const waitingFor = await driver.findElement(By.css(cssSelector));
  await until.elementIsVisible(waitingFor);
};
const compareText = async (cssSelector, expect) => {
  const text = await driver.findElement(By.css(cssSelector)).getText();
  await assert.equal(text, expect);
};
const stepOneToFour = async () =>{
  await driver.get(testData.url);// 1. Open trello.com 
  await findByCssAndClick(cssSelectors.buttonSignup);// 2. Click on button "Sign Up"
  await sendDataWithCSS(cssSelectors.emailInput,testData.correctEmail);// 3. Enter correct email
  await findByCssAndClick(cssSelectors.registrationEmailContinueButton);// 4. Click on "Create new account" button
}
const stepOneToTwo = async () =>{
  await driver.get(testData.url);// 1. Open trello.com 
  await findByCssAndClick(cssSelectors.loginBtn);// 2. Click on button "Sign Up"
}
  

module.exports={
    findByCssAndClick,
    sendDataWithCSS,
    compareStyleCss,
    deleteDataFromInput,
    checkElementVisibleCss,
    compareText,
    stepOneToFour,
    stepOneToTwo
};

