function greatestCommonDivisor(firstNumber, secondNumber){

    while(secondNumber) {
    let t = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = t;
  }
  console.log(firstNumber);
}