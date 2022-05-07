function processOddPositions(elements) {
    const array = [];
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 1) {
            let element = elements[i];
            let newElement = element * 2;
            
            array.push(newElement);
        }
    }

    return array.reverse().join();
}