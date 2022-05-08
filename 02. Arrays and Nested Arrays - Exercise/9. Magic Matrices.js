function magicMatrices(matrix) {
    let isMagical;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let nextRow = [];
        for (let j = 0; j < currentRow.length; j++) {
            let numberCurrentRow = currentRow[j];
            let nextNumberCurrentRow;

            if (j + 1 <= currentRow.length) {
                nextNumberCurrentRow = currentRow[j + 1];
            } else {
                break;
            }

            if (i + 1 <= matrix.length) {
                nextRow = matrix[i + 1];
            } else {
                break;
            }

            for (let k = 0; k < nextRow.length; k++) {
                let numberNextRow = nextRow[k];
                let nextNumberNextRow;

                if (k + 1 <= nextRow.length) {
                    nextNumberNextRow = nextRow[k + 1];
                } else {
                    break;
                }

                if (numberCurrentRow + nextNumberCurrentRow === numberNextRow + nextNumberNextRow) {
                    isMagical = true;
                } else {
                    isMagical = false;
                }
            }
        }
    }

    console.log(isMagical);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )