function sortingNumbers(numbers) {
    let newArray = [];
    while (numbers.length !== 0) {
        let smallestNumber = Math.min(...numbers);
        let biggestNumber = Math.max(...numbers);

        newArray.push(smallestNumber);
        newArray.push(biggestNumber);

        let indexOfSmallestNum = numbers.indexOf(smallestNumber);
        if (indexOfSmallestNum > -1) {
            numbers.splice(indexOfSmallestNum, 1);
        }        

        let indexOfBiggestNum = numbers.indexOf(biggestNumber);
        if (indexOfBiggestNum > -1) {
            numbers.splice(indexOfBiggestNum, 1);
        }        
    }

    return newArray;
}