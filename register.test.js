jest.setTimeout(30000);
require('chromedriver');
const {driver} = require(`./driver`);
const {testData} = require(`./testdata`);
const { cssSelectors } = require(`./selectors`);
const {
  findByCssAndClick,
  sendDataWithCSS,
  compareStyleCss,
  deleteDataFromInput,
  checkElementVisibleCss,
  stepOneToFour
} = require(`./basicfunctions`);


describe('Registration new user', async() =>{
  it('With valid data RE001', async() =>{
      await stepOneToFour();
      await sendDataWithCSS(cssSelectors.nameInput,testData.correctName);// 5. Enter correct name
      await sendDataWithCSS(cssSelectors.passwordInput,testData.correctPassword);// 6. Enter correct password
      await compareStyleCss(cssSelectors.registerSubmitButton, 'background-color','rgba(90, 172, 68, 1)');// 7. Check if button to sumbit is active
      await driver.manage().deleteAllCookies();
  })
  it('Enter invalid email RE002', async() =>{
      await stepOneToFour();
      await sendDataWithCSS(cssSelectors.nameInput,testData.correctName);// 5. Enter correct name
      await sendDataWithCSS(cssSelectors.passwordInput,testData.correctPassword);// 6. Enter correct password
      await deleteDataFromInput(cssSelectors.emailInput);// 7. Change email to incorrect
      await sendDataWithCSS(cssSelectors.emailInput,testData.incorrectEmail); // 7. Change email to incorrect
      await findByCssAndClick(cssSelectors.registerSubmitButton)//Click on submit button
      await checkElementVisibleCss(cssSelectors.emailAlertRegistration);//Check is there error message
      await driver.manage().deleteAllCookies();
})
  it('With invalid name (blank) RE003', async() =>{
      await stepOneToFour();
      await sendDataWithCSS(cssSelectors.passwordInput,testData.correctPassword);// 6. Enter correct password
      await compareStyleCss(cssSelectors.registerSubmitButton, 'background-color','rgba(226, 228, 230, 1)')// 7. Click submit
      await driver.manage().deleteAllCookies();
  })
  it('With invalid password RE004', async() =>{
    await stepOneToFour();
    await sendDataWithCSS(cssSelectors.nameInput,testData.correctName);// 5. Enter name
    await sendDataWithCSS(cssSelectors.passwordInput,testData.incorrectPassword) // 6. Enter incorrect password (1>7 signs)
    await findByCssAndClick(cssSelectors.registerSubmitButton);// 7. Click submit
    await checkElementVisibleCss(cssSelectors.emailAlertRegistration);
    await driver.manage().deleteAllCookies();

  })
  it('Sumbit with blank fields RE005', async() =>{
    await stepOneToFour();
    await sendDataWithCSS(cssSelectors.nameInput,testData.correctName); // 5. Enter correct name
    await sendDataWithCSS(cssSelectors.passwordInput,testData.correctPassword); // Enter correct password
    await deleteDataFromInput(cssSelectors.emailInput); // Delete email
    await deleteDataFromInput(cssSelectors.nameInput); //Delete name
    await deleteDataFromInput(cssSelectors.passwordInput); //Delete password
    await findByCssAndClick(cssSelectors.registerSubmitButton); // Click register button
    await checkElementVisibleCss(cssSelectors.emailAlertRegistration); // Check alert is displayed
    await driver.quit();
  })

})