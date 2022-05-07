function diagonalSums(elements) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let i = 0; i < elements.length; i++) {
        let currentArray = elements[i];
        let element = currentArray[i];

        sumMainDiagonal += element;
    }

    for (let i = 0; i < elements.length; i++) {
        let currentArrayReversed = elements[i].reverse();
        let element = currentArrayReversed[i];

        sumSecondaryDiagonal += element;
    }

    const newArray = [sumMainDiagonal, sumSecondaryDiagonal];
    
    console.log(newArray.join(' '))
}