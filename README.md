
# InPost tech excercise using appium_iOS


**Native Mobile App UI Test Automation Assignment**

Technology Stack:
- Use Appium as the mobile automation framework
- You may choose to automate either Android or iOS
- Any programming language is allowed (TypeScript, JavaScript, Python, Java, etc.)
- You are free to use any test framework that supports Appium
- The tests should run either on a real device or an emulator/simulator
- The pre-built app is available for download at:
<https://github.com/saucelabs/sample-app-mobile/releases/>

_However, you are free to use a similar app if this one does not meet your requirements_

**Basic Requirements:**
- Implement the Page Object Model (POM) to structure and organise test code
- Create configuration files for Android or iOS to manage platform-specific settings
- Use environment variables (process.env or an equivalent in your chosen language stack) to dynamically manage key parameters such as platform version, application path, and more Advanced (optional, but recommended):
- Develop helper methods to simplify common test interactions
- Implement framework-level action wrappers to improve code reusability and maintainability
- Optimise test execution by handling dynamic waits, retries, or custom logging

**Required Test Case to automate:**
1. Add the product to the shopping cart. Confirm that the added product is displayed.
2. Open the shopping cart and continue. Fill in all required information fields.
3. Navigate to the payment screen. Enter payment information and proceed to order overview.
4. Ensure the Checkout screen displays the correct order details.
5. Place the Order and complete the purchase process.

**Additional Test Cases (optional):**
- Validate error messages for empty required fields
- Filter products by name, price
- Remove items from the cart and verify the update

**Final tasks:**
- Document your work - create a README file with instructions on how to execute test scripts including explanations of coding choices when necessary
- Upload the automation project to a source code repository of your choice (GitHub, GitLab BitBucket, etc.). Ensure that the commit history is preserved to reflect development progress
