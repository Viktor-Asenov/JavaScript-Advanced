function solve() {
    let inputElement = document.querySelector('#input');
    let input = inputElement.value;
    let inputArray = input.split('.');
    let sentencesCount = inputArray.length;
  
    let outputElement = document.querySelector('#output');
    inputArrayFiltered = Array.from(inputArray.filter(e => e != ''));
  
    let innerHTML = '';
  
    if (sentencesCount <= 3) {
      innerHTML += '<p>';
  
      for (let index = 0; index < inputArrayFiltered.length; index++) {
        const element = inputArrayFiltered[index];
        innerHTML += element;
      }
      innerHTML += '.</p>';
  
      outputElement.innerHTML = innerHTML;
    } else {
      let count = 0;
      let innerHTML = '';
      for (let index = 0; index < inputArrayFiltered.length; index++) {
        const textElement = inputArrayFiltered[index];
        count++;
        if (count === 1){
          innerHTML += '<p>';
        }
  
        innerHTML += textElement;
  
        if (count === 3 || index === inputArrayFiltered.length - 1) {
          innerHTML += '.</p>';
          count = 0;
        }
      }
  
      outputElement.innerHTML = innerHTML;
    }
  }