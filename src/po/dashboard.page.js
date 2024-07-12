const Page  = require('./page');

class DashboardPage extends Page{
    get dashboardTitle() {
        return $('.app_logo');
    }
}

module.exports = DashboardPage;