const { join } = require ('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.specs.js'
            ],
            framework: 'mocha'
            capabilities:[{
                "platformName": "Android",
                "platformVersion": "9.0",
                "deviceName": "teste-mob",
                "automationName": "UiAutomator2",
                "app": join(process.cwd(), "./app/android/Android-NativeDemoApp-0.4.0.apk"),
                "appWaitActivity" : ".MainActivity"
            
            }]
}