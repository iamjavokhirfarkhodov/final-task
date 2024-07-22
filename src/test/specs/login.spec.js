const logger = require('../../config/winston_logger')
const LoginPage = require('../../po/login.page');
const DashboardPage = require('../../po/dashboard.page');
const { usernames, passwords, errors, titles } = require('../../config/data');
const setUsernameAndPassword = require('../../utils/clearfix');
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Final Task',() => {

    beforeEach(async () => { 
        await loginPage.open();
    })

    it('UC-1. Should display "Epic sadface: Username is required"', async () => {
        logger.info('UC-1 has started!')

        //Given username and password
        await setUsernameAndPassword(usernames.standard_user, passwords.secret_sauce);
        expect(await loginPage.username.getValue()).toEqual(usernames.standard_user);
        expect(await loginPage.password.getValue()).toEqual(passwords.secret_sauce);
        logger.info(`Credentials: Username: ${usernames.standard_user}, password: ${passwords.secret_sauce} assigned`);

        //When username and password is cleared
        await loginPage.username.clearValue();
        await loginPage.password.clearValue();
        expect(await loginPage.username.getValue()).toEqual('');
        expect(await loginPage.password.getValue()).toEqual('');
        logger.info(`Credentials cleared!`);

        // When login button clicked with empty credentials
        await loginPage.submit();
        logger.info('Login button clicked!');

        //Then error message should be displayed
        await loginPage.errorMessage.waitForDisplayed();
        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        expect(await loginPage.errorMessage.getText()).toEqual(errors.username_error);

        logger.info('Error message displayed!');
        logger.info('UC-1 has finished successfully!');
    })

    it('UC-2. Should display "Epic sadface: Password is required"', async () => {
        logger.info('UC-2 has started!');

        //Given username and password
        await setUsernameAndPassword(usernames.standard_user, passwords.secret_sauce);
        expect(await loginPage.username.getValue()).toEqual(usernames.standard_user);
        expect(await loginPage.password.getValue()).toEqual(passwords.secret_sauce);
        logger.info(`Credentials: Username: ${usernames.standard_user}, password: ${passwords.secret_sauce} assigned`);

        //Clearfix for Google Chrome
        await loginPage.username.setValue(usernames.standard_user);

        //When password is cleared and login button clicked
        await loginPage.password.clearValue();
        expect(await loginPage.password.getValue()).toEqual('');
        await loginPage.loginBtn.click();
        logger.info(`Password field is cleared and login button clicked!`);

        // Then error message should be displayed
        await loginPage.errorMessage.waitForDisplayed();
        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        expect(await loginPage.errorMessage.getText()).toEqual(errors.password_error);
        
        logger.info('Error message displayed!');
        logger.info('UC-2 has finished successfully!');
    })

    it('UC-3. Should validate the title "Swag Labs"', async () => {
        logger.info('UC-3 has started!');

        //Given valid credentials
        await loginPage.username.setValue(usernames.standard_user);
        await loginPage.password.setValue(passwords.secret_sauce);
        logger.info(`Credentials: Username: ${usernames.standard_user}, password: ${passwords.secret_sauce} assigned`);

        //When login button clicked
        await loginPage.loginBtn.click();
        logger.info('Login button clicked!');

        //Then dashboard should show title
        await dashboardPage.dashboardTitle.waitForDisplayed();
        expect(await dashboardPage.dashboardTitle.getText()).toEqual(titles.swag_labs);
        
        logger.info('"Swag Labs" title is displayed!');
        logger.info('UC-3 has finished successfully!');
    });
})