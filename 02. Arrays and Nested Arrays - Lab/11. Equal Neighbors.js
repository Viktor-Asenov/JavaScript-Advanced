function equalNeighbours(elements) {
    let counterEqualNeighbours = 0;
    for (let i = 0; i < elements.length; i++) {
        let currentArray = elements[i];
        let nextArray = [];

        if (i + 1 >= elements.length) {
            break;
        } else {
            nextArray = elements[i + 1];
        }

        for (let i = 0; i < currentArray.length; i++) {
            let element = currentArray[i];
            let nextElement;

            if (i + 1 >= currentArray.length) {
                break;
            } else {
                nextElement = currentArray[i + 1];
            }

            if (element === nextElement) {
                counterEqualNeighbours++;
            }
        }

        for (let i = 0; i < nextArray.length; i++) {
            let element = nextArray[i];
            let nextElement;

            if (i + 1 >= nextArray.length) {
                break;
            } else {
                nextElement = nextArray[i + 1];
            }

            if (element === nextElement) {
                counterEqualNeighbours++;
            }
        }

        for (let j = 0; j < currentArray.length; j++) {
            let elementCurrentArray = currentArray[j];            
            let elementNextArray = nextArray[j];

            if (elementCurrentArray === elementNextArray) {
                counterEqualNeighbours++;
            }
        }
    }

    console.log(counterEqualNeighbours);
}