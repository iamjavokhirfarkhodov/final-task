const logger = require('../config/winston_logger');
exports.config = {
    runner: 'local',
    specs: [
        '../../src/test/specs/**/*.spec.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }, {
        browserName: 'MicrosoftEdge'
    }],

    logLevel: 'error',
    outputDir: './logs',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSuite(suite){
        logger.info(`${suite.title} suite has started in ${browser.capabilities.browserName}`);
    }
}
