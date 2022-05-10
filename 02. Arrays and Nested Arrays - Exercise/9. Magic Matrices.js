function magicMatrices(matrix){

    matrix.map(row => row.map(col => Number(col)));

    if (matrix.length < 1) {
        matrix.length = 5;
        matrix.fill(0);
    }

    let sum = function(arr) {
        return arr.reduce(function(a, b){ return a + b; }, 0);
      };
  
     let verticalSumsArray =  matrix.map(function(row, i) {
        return sum(matrix.map(function(row) { return row[i]; }));
      }); 
    
      let areEqual = true;

      for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix.length; col++) {
           
            currentSum += matrix[row][col];
        }    
        
        if (currentSum != verticalSumsArray[row]) {
            areEqual = false;
        }
      }
 
    console.log(areEqual);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )