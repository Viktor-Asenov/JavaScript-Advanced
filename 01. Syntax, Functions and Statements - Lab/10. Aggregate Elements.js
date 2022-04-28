function aggregateElements(array) {
    let sum = 0;
    let inverseSum = 0;
    let concatenatedValues = '';
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let inversedNum = 1 / currentNum;
        
        sum += currentNum;
        inverseSum += inversedNum;
        concatenatedValues += currentNum;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedValues);
}

aggregateElements([2, 4, 8, 16])