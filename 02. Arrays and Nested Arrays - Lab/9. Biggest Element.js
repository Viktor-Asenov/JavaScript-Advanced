function biggestElement(elements) {
    let biggestElement = Math.max(...[].concat(...elements));

    return biggestElement;
}