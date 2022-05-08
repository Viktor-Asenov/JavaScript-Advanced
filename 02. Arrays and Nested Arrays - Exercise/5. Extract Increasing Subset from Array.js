function increasingSubsetFromArray(array) {
    let newArray = [];
    let biggestNum = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number >= biggestNum) {
            biggestNum = number;
            newArray.push(biggestNum);
        } 
    }

    return newArray;
}