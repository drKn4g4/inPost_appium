import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'expect-webdriverio';

declare module '@cucumber/cucumber' {
  interface World {
    productDetails: {
      name: string;
      price: number;
    };
    orderDetails: {
      total: number;
      productNames: string[];
    };
  }
}

Given('the user is on a product page', async function () {
  await driver.$('~CatalogViewController').waitForDisplayed({ timeout: 15000 });
});

When('the user adds a product to the shopping cart', async function () {
  await driver.$('~ProductPageDetailController').waitForDisplayed({ timeout: 10000 });

  this.productDetails = {
    name: "A dynamic product name",
    price: 49.99,
  };
});

When('confirms that the added product is displayed in the cart', async function () {
  await driver.$('~MyCartViewController').waitForDisplayed({ timeout: 10000 });
});

When('opens the shopping cart and proceeds', async function () {
  await driver.$('~MyCartViewController').waitForDisplayed({ timeout: 10000 });
});

When('fills in all required information fields', async function () {
  await driver.$('~ShippingAddressViewController').waitForDisplayed({ timeout: 10000 });
});

When('navigates to the payment screen', async function () {
  await driver.$('~PaymentMethodViewController').waitForDisplayed({ timeout: 10000 });
});

When('enters payment information', async function () {
  await driver.$('~PaymentMethodViewController').waitForDisplayed({ timeout: 10000 });
});

When('proceeds to the order overview', async function () {
  await driver.$('~ReviewYourOrderViewController').waitForDisplayed({ timeout: 10000 });

  this.orderDetails = {
    total: this.productDetails.price,
    productNames: [this.productDetails.name],
  };
});

Then('the Checkout screen should display the correct order details', async function () {
  await driver.$('~ReviewYourOrderViewController').waitForDisplayed({ timeout: 10000 });
});

When('the user places the order', async function () {
  await driver.$('~ReviewYourOrderViewController').waitForDisplayed({ timeout: 10000 });
});

Then('the purchase process should be completed successfully', async function () {
  await driver.$('~CheckoutCompleteViewController').waitForDisplayed({ timeout: 15000 });
});