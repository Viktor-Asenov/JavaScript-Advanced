function smallestTwoNumbers(elements) {
    let array = elements.sort((a, b) => a - b);
    const [firstElement, secondElement] = array;

    console.log(firstElement, secondElement);
}