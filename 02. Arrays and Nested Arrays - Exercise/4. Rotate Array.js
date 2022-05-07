function rotateArray(array, timesToRotate) {
    for (let i = 0; i < timesToRotate; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '))
}