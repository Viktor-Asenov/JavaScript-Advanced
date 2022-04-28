function wholeSum(firstInput, secondInput) {
    let start = Number(firstInput);
    let end = Number(secondInput);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;        
    }

    console.log(sum);
}

wholeSum('-8', '20')