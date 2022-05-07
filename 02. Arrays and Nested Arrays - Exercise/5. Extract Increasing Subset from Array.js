function increasingSubsetFromArray(array) {
    let newArray = [];
    let biggestNum = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number > biggestNum) {
            biggestNum = number;
            newArray.push(biggestNum);
        } 
    }

    console.log(newArray)
}

increasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )