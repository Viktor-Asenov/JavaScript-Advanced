function calcCircleArea(input) {
    let inputType = typeof(input);
    if (inputType !== 'number') {
        console.log('We can not calculate the circle area, because we receive a ' + inputType + '.');
        return;
    }

    let circleArea = Math.PI * input * input;
    console.log(circleArea.toFixed(2));
}