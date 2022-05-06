function negativePositiveNumbers(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element < 0) {
            array.unshift(element);
        } else {
            array.push(element);
        }
    }

    console.log(array.join('\r\n'))
}