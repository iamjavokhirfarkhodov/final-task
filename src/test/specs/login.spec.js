const logger = require('../../config/winston_logger')
const LoginPage = require('../../po/login.page');
const DashboardPage = require('../../po/dashboard.page');
const { dataProvider } = require('../../config/data');
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
        const username = dataProvider.getFakeUsername();
        await setUsernameAndPassword(username, dataProvider.getFakePassword());
        expect(await loginPage.username.getValue()).toEqual(username);
        expect(await loginPage.password.getValue()).toEqual(dataProvider.getFakePassword());
        logger.info(`Credentials: Username: ${username}, password: ${dataProvider.getFakePassword()} assigned`);

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
        expect(await loginPage.errorMessage.getText()).toEqual('Epic sadface: Username is required');

        logger.info('Error message displayed!');
        logger.info('UC-1 has finished successfully!');
    })

    it('UC-2. Should display "Epic sadface: Password is required"', async () => {
        logger.info('UC-2 has started!');

        //Given username and password
        const username = dataProvider.getFakeUsername();
        await setUsernameAndPassword(username, dataProvider.getFakePassword());
        expect(await loginPage.username.getValue()).toEqual(username);
        expect(await loginPage.password.getValue()).toEqual(dataProvider.getFakePassword());
        logger.info(`Credentials: Username: ${username}, password: ${dataProvider.getFakePassword()} assigned`);

        //Clearfix for Google Chrome
        await loginPage.username.setValue(username);

        //When password is cleared and login button clicked
        await loginPage.password.clearValue();
        expect(await loginPage.password.getValue()).toEqual('');
        await loginPage.loginBtn.click();
        logger.info(`Password field is cleared and login button clicked!`);

        // Then error message should be displayed
        await loginPage.errorMessage.waitForDisplayed();
        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        expect(await loginPage.errorMessage.getText()).toEqual('Epic sadface: Password is required');
        
        logger.info('Error message displayed!');
        logger.info('UC-2 has finished successfully!');
    })

    it('UC-3. Should validate the title "Swag Labs"', async () => {
        logger.info('UC-3 has started!');

        //Given valid credentials
        const username = dataProvider.getRandomUsername();
        await loginPage.username.setValue(username);
        await loginPage.password.setValue(dataProvider.getPassword());
        logger.info(`Credentials: Username: ${username}, password: ${dataProvider.getPassword()} assigned`);

        //When login button clicked
        await loginPage.loginBtn.click();
        logger.info('Login button clicked!');

        //Then dashboard should show title
        await dashboardPage.dashboardTitle.waitForDisplayed();
        expect(await dashboardPage.dashboardTitle.getText()).toEqual('Swag Labs');
        
        logger.info('"Swag Labs" title is displayed!');
        logger.info('UC-3 has finished successfully!');
    });
})