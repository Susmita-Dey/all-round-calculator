# getCurrency()

> This function is used to convert one currency to the other as per user's choice.

- @param {String} currencyFrom The currency you are converting from
- @param {String} currencyTo The currency you are changing to
- @param {number} value The value you are converting to
- @return {number} The converted currency

## Syntax

function(currencyFrom, currencyTo, value) { ..code.. }

## Parameters

The function takes three parameters and return the output.

## Note

Unlike other functions in the calculator, this is an <u>asynchronous function</u> which fetches the live currency rates to perform the conversion. 

## Example

### Code:
```js
const calculator = require('all-round-calculator');

async function printConversion() {
    // Converting 1000 USD to EUR
    var converted = await calculator.getCurrency("USD", "EUR", 1000);

    /* 
    Setting a timeout of 2000 miliseconds before printing the converted currency to ensure that the API call has enough time to be completed.
    Refer to asynchronous programming for more details.
    */
    setTimeout(()=>console.log(converted), 2000);
}
  
printConversion();
```

### Output:
```bash
1042
```
---

