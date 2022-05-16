function calc() {
    let sum = 0;
    let firstNum = Number(document.getElementById('num1').value);
    let secondNum = Number(document.getElementById('num2').value);
    sum = firstNum + secondNum;

    let sumArea = document.getElementById('sum');
    sumArea.value = sum;
}
