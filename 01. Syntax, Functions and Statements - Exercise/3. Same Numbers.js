function checkForSameNumbers(num) {
    let numAsString = num.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentNum = Number(numAsString[i]);
        if (currentNum != numAsString[0]) {
            isSame = false;
        }

        sum += currentNum;
    }

    console.log(isSame);
    console.log(sum);
}