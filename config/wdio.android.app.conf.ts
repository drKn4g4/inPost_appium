import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: ["../tests/specs/**/app*.spec.ts"],

    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
            "appium:deviceName": "Pixel_8_Pro_Android_15_API_35",
            "appium:platformVersion": "15.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": "https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk",
            "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
            "appium:newCommandTimeout": 240,
        },
    ],
};
