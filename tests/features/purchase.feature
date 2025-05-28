Feature: Product Purchase Process

  Scenario: Successful End-to-End Order Placement
    Given the user is on a product page
    When the user adds a product to the shopping cart
    And confirms that the added product is displayed in the cart
    And opens the shopping cart and proceeds
    And fills in all required information fields
    And navigates to the payment screen
    And enters payment information
    And proceeds to the order overview
    Then the Checkout screen should display the correct order details
    When the user places the order
    Then the purchase process should be completed successfully