const cssSelectors = {
    //Register
    buttonSignup:`body > header > nav > div.float-right.buttons > a.btn.btn-sm.bg-white.font-weight-bold`,
    emailInput:`#email`,
    registrationEmailContinueButton:'#signup',
    nameInput:`#name`,
    passwordInput:`#password`,
    registerSubmitButton:`#signup`,
    emailAlertRegistration:`#error > p`,
    emailAlertRegistration2:`#email-error`,
    //Login
    loginBtn:`body > header > nav > div.float-right.buttons > a.btn.btn-sm.btn-link.text-white`,
    loginEmailInput:`#user`,
    loginPasswordInput:`#password`,
    loginAcceptBtn:`#login`,
    loginError:`#error > p`,
}

module.exports = {
    cssSelectors
}