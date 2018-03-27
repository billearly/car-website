exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'Chrome',
        },
        {
            maxInstances: 5,
            browserName: 'Firefox',
        },
        {
            maxInstances: 5,
            browserName: 'MicrosoftEdge',
        }
    ],
    sync: true,
    logLevel: 'silent',    
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './test/errorShots/',
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: false
    },
    services: [
        'selenium-standalone'
    ],
    reporters: ['dot'],
}
