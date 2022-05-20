function generateReport() {
    let cellsHead = [...document.querySelector('thead tr').children];
    let filtered = cellsHead.filter(c => c.lastChild.checked);
    let cellsBody = document.querySelector('tbody tr').children;

    let reports = [];

    for (let i = 0; i < filtered.length; i++) {
        let report = {};

        let element = filtered[i];
        let indexInOriginalTable = cellsHead.indexOf(element);

        for (let j = indexInOriginalTable; j < cellsBody.length; j++) {
            let checkedCellName = element.textContent.trim().toLowerCase();
            let correspondingCellContent = cellsBody[j];
            console.log(correspondingCellContent)
            report[checkedCellName] = correspondingCellContent.textContent;
            
            reports.push(report);
        }        
    }

    console.log(reports)
    
    // let reports = [];
    // for (let i = 0; i < cellsHead.length; i++) {
    //     let cellHead = cellsHead[i];
    //     //console.log(cellHead.textContent)

    //     let report = {};
    //     if (cellHead.lastChild.checked) {
    //         let checkedCellName = cellHead.textContent.trim().toLowerCase();
    //         //console.log(checkedCellName)
    //         let correspondingCellBody = cellsBody[i];
    //         //console.log(correspondingCellBody.textContent)

    //         report[checkedCellName] = correspondingCellBody.textContent;

            
    //     }

    //     console.log(report)
    // }
}