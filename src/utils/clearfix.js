const LoginPage = require('../po/login.page');

const loginPage = new LoginPage();

//Clearfix function for Google Chrome
async function setUsernameAndPassword(username, password){
    await browser.execute((u, p, usrn, pass) => {
      u.value = usrn;
      p.value = pass;
  }, await loginPage.username, await loginPage.password, username, password);
}

module.exports = setUsernameAndPassword;