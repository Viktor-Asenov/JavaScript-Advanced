function calculate(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let neededMoney = weightInKg * pricePerKg;

    console.log('I need $' + neededMoney.toFixed(2) + ' to buy ' + weightInKg.toFixed(2) + ' kilograms ' + fruit + '.')
}