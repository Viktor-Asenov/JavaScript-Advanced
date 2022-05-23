function addItem() {
    let input = document.getElementById('newItemText').value;
    
    let liElement = document.createElement('li');
    liElement.textContent = input;

    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    input.value = '';
}