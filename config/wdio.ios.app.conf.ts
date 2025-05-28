import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: ["../tests/specs/**/app*.spec.ts"],

    capabilities: [
        {

            platformName: "iOS",
            "wdio:maxInstances": 1,
            "appium:deviceName": "iPhone 16 Pro",
            "appium:platformVersion": "18.2",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:app": "https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip",
            "appium:newCommandTimeout": 240,
            "appium:webviewConnectTimeout": 5000,
        },
    ],
};