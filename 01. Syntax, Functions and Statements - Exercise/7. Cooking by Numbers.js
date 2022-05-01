function cookingByNumbers(inputNum, firstOper, secondOper, thirdOper, fourthOper, fifthOper) {
    let number = Number(inputNum);
    let operations = [firstOper, secondOper, thirdOper, fourthOper, fifthOper];

    for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];
        switch (currentOperation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }

        console.log(number);
    }
}