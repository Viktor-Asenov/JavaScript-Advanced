function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length) {
        endIndex = array.length - 1;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        let num = array[i];
        if (typeof num !== 'number') {
            return NaN;
        }

        sum += num;
    }

    return sum;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))