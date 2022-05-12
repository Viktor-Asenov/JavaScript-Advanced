function jsonToHtmlTable(array) {
    const students = JSON.parse(array);    

    let firstStudent = students[0];

    let html = '<table>' + '\n';
    html+= '   <tr>'
    
    for (const key in firstStudent) {
       html += `<th>${key}</th>`;
    }

    html+='</tr>' + '\n';

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        html += '   <tr>';

        for (const key in student) {
                let prop = student[key];
                html += `<td>${prop}</td>`; 
        }

        html+='</tr>' + '\n';
    }
    
    html += '</table>';
    console.log(html);
}