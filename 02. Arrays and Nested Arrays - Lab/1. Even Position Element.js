function evenPositionElements(elements) {
    let arr = [];
    for (let i = 0; i < elements.length; i+=2) {
        let element = elements[i];
        arr.push(element);
    }

    console.log(arr.join(' '));
}