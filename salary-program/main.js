//Declare an array that stores the employee data

let employees = [
    // Employee data
    {
        name: 'Michael Doughty',
        baseSalary: 3000,
        hoursWorked: 101
    },

    {
        name: 'Karen Taylor',
        baseSalary: 2500,
        hoursWorked: 76
    },

    {
        name: 'Samuel Johnson',
        baseSalary: 3000,
        hoursWorked: 89
    },

    {
        name: 'John Williams',
        baseSalary: 3500,
        hoursWorked: 75
    },

    {
        name: 'Samantha Dowell',
        baseSalary: 2600,
        hoursWorked: 80
    },
    
    {
        name: 'Suesann Waithe',
        baseSalary: 2500,
        hoursWorked: 90
    },
];
console.log(employees);

// Loop through array to access each employee's data
employees.forEach((employee) => {
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Base Salary: $${employee.baseSalary}`);
    console.log(`Hours Worked: ${employee.hoursWorked}`);
});


