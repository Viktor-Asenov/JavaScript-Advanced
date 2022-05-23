function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    let rows = Array.from(document.querySelector('tbody').children);
    
    let removed = false;

    for (let row of rows) {
        let emailCell = row.children[1];
        if (emailCell.textContent === input.value) {
            row.remove();
            removed = true;
        }
    }
    
    let result = document.getElementById('result');
    if (removed) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}