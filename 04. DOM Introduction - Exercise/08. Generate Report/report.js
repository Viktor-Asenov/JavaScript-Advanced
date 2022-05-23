function generateReport() {
    let checkboxElements = document.getElementsByTagName('th');
    let columns = [];
    let indices = [];

    for (let index = 0; index < checkboxElements.length; index++) {
        const element = checkboxElements[index];
        let checkedColumn = element.lastChild;
        let ch = checkedColumn.checked;
        if (checkedColumn.checked) {
            indices.push(index);
        } 
    }

    let tableBody = document.querySelector('tbody');
    let tableBodyRows = tableBody.children;

    for (let index = 0; index < tableBodyRows.length; index++) {
        let element = tableBodyRows[index];

            let column = {};
            let tdElements = element.children; 

            for (let td = 0; td < tdElements.length; td++) {
                if (indices.includes(td)) {
                    let currentRowName = checkboxElements[td].textContent;
                    let currentProp = tdElements[td];
                    column[currentRowName.trim().toLowerCase()] = currentProp.textContent;
                }            
            }            
          
        columns.push(column);  
    }

    let result = JSON.stringify(columns, null, 2);
    
    let resultEl = document.querySelector('#output');
    resultEl.value = result;
}