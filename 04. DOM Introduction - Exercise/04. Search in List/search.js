function search() {
    let towns = document.querySelectorAll('#towns li');
    let searchText = document.getElementById('searchText').value;

    let matches = 0;
    for (let town of towns) {
      if(town.textContent.includes(searchText) && searchText !== '') {
         town.style.fontWeight = 'bold';
         matches++;
       }
    }

    let result = document.getElementById('result').textContent = `${matches} matches found`;
}