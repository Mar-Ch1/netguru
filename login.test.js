jest.setTimeout(30000);
require('chromedriver');
const {driver} = require(`./driver`);
const {testData} = require(`./testdata`);
const { cssSelectors } = require(`./selectors`);
const {
  findByCssAndClick,
  sendDataWithCSS,
  checkElementVisibleCss,
  stepOneToTwo
} = require(`./basicfunctions`);


describe('Login to account by email', async() =>{
  it('Login with valid data LE001', async() =>{
    await stepOneToTwo();// 1. Open trello.com    // 2. Click 'Log in' button
    await sendDataWithCSS(cssSelectors.loginEmailInput,testData.loginEmail);// 3. Enter valid email
    await sendDataWithCSS(cssSelectors.loginPasswordInput,testData.loginPassword);// 4. Enter correct password
    await findByCssAndClick(cssSelectors.loginAcceptBtn); // 5. Click button 'Log in'
    await driver.manage().deleteAllCookies();
  })
  it('Login with invalid email LE002', async() =>{
    await stepOneToTwo();// 1. Open trello.com    // 2. Click 'Log in' button
    await sendDataWithCSS(cssSelectors.loginEmailInput,testData.loginIncorrectEmail); // 3. Enter invalid email
    await sendDataWithCSS(cssSelectors.loginPasswordInput,testData.loginPassword);// 4. Enter correct password
    await findByCssAndClick(cssSelectors.loginAcceptBtn); // 5. Click button 'Log in'
    await checkElementVisibleCss(cssSelectors.loginError);//Check is there error message
    await driver.manage().deleteAllCookies();
})
  it('Login with invalid password LE003', async() =>{
    await stepOneToTwo();// 1. Open trello.com    // 2. Click 'Log in' button
    await sendDataWithCSS(cssSelectors.loginEmailInput,testData.loginEmail);// 3. Enter valid email
    await sendDataWithCSS(cssSelectors.loginPasswordInput,testData.loginIncorrectPassword);  // 4. Enter incorrect password
    await findByCssAndClick(cssSelectors.loginAcceptBtn);    // 5. Click button""Log in"""
    await checkElementVisibleCss(cssSelectors.loginError);//Check is there error message
    await driver.manage().deleteAllCookies();
  })
  it('Login with empty email LE004', async() =>{
    await stepOneToTwo();// 1. Open trello.com    // 2. Click 'Log in' button
    await sendDataWithCSS(cssSelectors.loginPasswordInput,testData.loginPassword);// 3. Enter correct password
    await findByCssAndClick(cssSelectors.loginAcceptBtn); // 4. Click button""Log in"""
    await checkElementVisibleCss(cssSelectors.loginError);//Check is there error message
    await driver.manage().deleteAllCookies();
  })
  it('Login with empty password LE005', async() =>{
    await stepOneToTwo();// 1. Open trello.com    // 2. Click 'Log in' button
    await sendDataWithCSS(cssSelectors.loginEmailInput,testData.loginEmail);// 3. Enter valid email
    await findByCssAndClick(cssSelectors.loginAcceptBtn);// 4. Click button 'Log in'
    await checkElementVisibleCss(cssSelectors.loginError);//Check is there error message
    await driver.quit();
  })
})





