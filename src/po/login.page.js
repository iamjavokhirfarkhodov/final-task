const Page  = require('./page');

class LoginPage extends Page {
    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login-button');
    }
    get errorMessage(){
        return $('h3[data-test="error"]');
    }

    async open() {
        await super.open("/");
    }

    async submit() {
        await this.loginBtn.click();
    }
}

module.exports = LoginPage;