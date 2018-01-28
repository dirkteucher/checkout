

# Quickstart
Clone the repo <br />
npm install <br />
npm run dev <br />
npm run test <br />


## Problem Description
We’re going to see how far we can get in implementing a supermarket checkout that calculates 
the total price of a number of items. 

In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our store, 
we’ll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. 
In addition, some items are multipriced: buy n of them, and they’ll cost you y pounds. For example, 
item ‘A’ might cost 50 pounds individually, but this week we have a special offer: buy three ‘A’s and 
they’ll cost you 130. The price and offer table:

>Item  Price   Offer<br />
>--------------------------<br />
>A     50       3 for 130<br />
>B     30       2 for 45<br />
>C     20<br />
>D     15<br />


Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and price them at 45 (for a total price so far of 95).


# checkout

> checkout

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Run unit tests
npm run test
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) 
and 
[docs for vue-loader](http://vuejs.github.io/vue-loader).
and 
[docs for vue-test-utils](https://vue-test-utils.vuejs.org/en/).


## Component info

The important files to view in the repo are:

src/components/ShoppingCart.vue   (LOGIC)
test/Data.spec.js  (Unit Tests)
test/DOM.spec.js  (Unit Tests)
test/Methods.spec.js  (Unit Tests)


## Testing info
The testing currently being done is already quite extensive. The DOM can easily be checked for changes to the structure of this component. The tests are also checking that the methods being used exist and that the data structure is correct. Checking the data structure in particular is very important.

## TESTING TODO
1) Code coverage of the interior of the buy(), remove(), updateShoppingTotal() and checkPricingRules() is missing and needs to be included. I need to figure out how to stub the data being used inside those methods with Vue and Mocha. This is the only major component from the testing that is currently missing but as this was my first few hours of using Mocha with Vue I need to spend more time figuring that part out.

2) Every single DOM elment could potentially be tested for availability. This would be trivial to do.
## Preview
![](https://raw.githubusercontent.com/dirkteucher/checkout/master/demo.gif)
