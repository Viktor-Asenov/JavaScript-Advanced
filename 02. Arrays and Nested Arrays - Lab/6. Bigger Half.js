function biggerHalf(elements) {
    let array = elements.sort((a, b) => a - b);
    let halfLength = Math.ceil(array.length / 2);
    let newArray = [];

    if (array.length % 2 == 0) {
        newArray = array.slice(halfLength, array.length);
    } else {
         newArray = array.slice(halfLength - 1, array.length);
    }

    return newArray;
}