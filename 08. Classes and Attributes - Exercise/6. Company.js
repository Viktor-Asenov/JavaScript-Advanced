class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let arrayInfo = [name, salary, position, department];
        if (arrayInfo.some(x => x === null || x === undefined || x == '')) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }

        let employee = {
            name: name,
            salary: salary,
            position: position,
            department: department,
        };

        this.departments[department].push(employee);
        
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment() {
        let result = '';
        let maxAverageSalary = -1;
        let bestDepartmentName = '';

        for (let department in this.departments) {
            let sumSalary = 0;
            let currentAverageSalary = 0;

            for (let employee of this.departments[department]) {
                sumSalary += employee.salary;
            }

            currentAverageSalary = sumSalary / this.departments[department].length;

            if (maxAverageSalary < currentAverageSalary) {
                maxAverageSalary = currentAverageSalary;
                bestDepartmentName = department;               
            }

        }

        result += `Best Department is: ${bestDepartmentName}` + '\n';
        result += `Average salary: ${maxAverageSalary.toFixed(2)}` + '\n';

        const sortedEmployees = this.departments[bestDepartmentName]
            .sort((emp1, emp2) => emp2.salary - emp1.salary
            || emp1.name.localeCompare(emp2.name));

        for(let employee of sortedEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}` + '\n';
        }
        
        return result.trimEnd();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());