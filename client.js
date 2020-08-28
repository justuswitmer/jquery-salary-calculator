$(document).ready(onReady);

let employeeInfo = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        employeeId: '5421',
        title: 'Team Lead',
        annualSalary: 80000
    }
];

function calcMonthlyCost() {
    // loop through employeeInfo
    // sum employeeInfo.annualSalary
    // append sum of employeeInfo.annualSalary to DOM
    // if monthly costs > $20,000, add red background color to monthly costs
} // end calcMonthlyCost

function addEmployee() {
    console.log('in addEmployee');
    // get employee info and place into a new object
    const newEmployee = {
        firstName: $('#firstNameIn').valueOf(),
        lastName: $('#lastNameIn').valueOf(),
        employeeId: $('#employeeIdIn').valueOf(),
        title: $('#jobTitleIn').valueOf(),
        annualSalary: $('#annualSalaryIn').valueOf()
    } // end newEmployee
    // push newEmployee into employeeInfo
    employeeInfo.push(newEmployee);
    console.log(employeeInfo);

    // append employeeInfo to DOM, clear fields
} // end addEmployee

function onReady() {
    // click event for submit button, id 'employeeInfoBtn'

    // click event for deleting employee
} // end onReady

function removeEmployee() {
    // remove employee from DOM (maybe remove from employeeInfo?)
} // end removeEmployee


