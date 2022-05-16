function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        let value = rows[i].children[1].textContent;
        sum += Number(value);        
    }

    let total = document.getElementById('sum');
    total.textContent = sum;
}