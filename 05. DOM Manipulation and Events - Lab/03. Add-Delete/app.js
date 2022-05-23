function addItem() {
    let input = document.getElementById('newItemText').value;
    
    let liElement = document.createElement('li');
    liElement.textContent = input;

    let anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', '#');
    anchorElement.textContent = '[Delete]';
    anchorElement.addEventListener('click', deleteElement);

    liElement.appendChild(anchorElement);

    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    input.value = '';

    function deleteElement(ev) {
        ev.target.parentNode.remove();
    }
}