function filter(data, criteria) {
    const employees = JSON.parse(data);
    let criteriaValue = criteria.split('-')[1];

    let sortedEmployees = [];
    let counter = 0;
    let employeeInfo = '';

    if (criteria === 'all') {
        for (let i = 0; i < employees.length; i++) {
            const employee = employees[i];
            employeeInfo = `${i}.` + ' ' + `${employee.first_name}` + ' ' + `${employee.last_name}` + ' - ' + `${employee.email}`;
            sortedEmployees.push(employeeInfo);
        }
    }

    for (let employee of employees) {
        for (let key in employee) {
            if (employee[key] == criteriaValue) {
                employeeInfo = `${counter}.` + ' ' + `${employee.first_name}` + ' ' + `${employee.last_name}` + ' - ' + `${employee.email}`;
                sortedEmployees.push(employeeInfo);
                counter++;
            }
        }        
    }

    console.log(sortedEmployees.join('\n'))
}

filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all'
)