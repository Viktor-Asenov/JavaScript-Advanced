function validityChecker(x1, y1, x2, y2){
    let firstPointToZero = Math.sqrt(x1 * x1 + y1 * y1);
    let secondPointToZero = Math.sqrt(x2 * x2 + y2 * y2);
    let firstPointMinusSecondPoint = Math.round(firstPointToZero - secondPointToZero);

    function isValid(point) {
        if (Number.isInteger(point)) {
            return 'valid';
        }
        else {
            return 'invalid';
        }
    }

    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${isValid(firstPointToZero)}`)
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${isValid(secondPointToZero)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(firstPointMinusSecondPoint)}`)    
}

validityChecker(3, 0, 0, 4)