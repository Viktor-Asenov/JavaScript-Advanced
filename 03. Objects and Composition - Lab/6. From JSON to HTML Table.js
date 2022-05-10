function jsonToHtmlTable(array) {
    const students = JSON.parse(array);    

    let firstStudent = students[0];

    let html = '<table>' + '\n';
    html+= '   <tr>'
    
    for (const key in firstStudent) {
       html += `<th>${key}</th>`;
    }

    html+='</tr>' + '\n';

    for (let index = 0; index < students.length; index++) {
        const student = students[index];
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

jsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)