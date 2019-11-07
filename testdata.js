const testData = {
    //Register
    url:`https://trello.com`,
    correctEmail:`test@gmail.com`,
    correctName:`Jan Kowalsy`,
    correctPassword:`1Testowe`,
    incorrectPassword:`1Testow`,
    incorrectEmail:`marcinchlebek92@gmail.com`,
    //Login
    loginEmail:`testingaccount@test.com`,
    loginPassword:`1Testowe`,
    loginIncorrectEmail:`testaccount@test.com`,
    loginIncorrectPassword:`2Testowe`,
}
const TextSample ={
    usedEmailText:`Email already in use by another account. You can use log in or use the forgot password page to reset your password.`,
}
module.exports = {
    testData,
    TextSample,
}