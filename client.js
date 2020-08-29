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


function addEmployeeInfo() {
    console.log('in addEmployeeInfo');
    // get employee info and place into a new object
    const newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        title: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    } // end newEmployee
    // push newEmployee into employeeInfo
    employeeInfo.push(newEmployee);
    console.log(employeeInfo);
    displayEmployee();
} // end addEmployeeInfo

function calcMonthlyCost() {
    // loop through employeeInfo
    // sum employeeInfo.annualSalary
    // append sum of employeeInfo.annualSalary to DOM
    // if monthly costs > $20,000, add red background color to monthly costs
} // end calcMonthlyCost

function displayEmployee() {
    console.log('in displayEmployee');
    let el = $('#employeeInfoOut');
    el.empty();
    // append employeeInfo to DOM, clear fields
    for (let i = 0; i < employeeInfo.length; i++) {
        el.append(`
            <li>${employeeInfo[i].firstName} ${employeeInfo[i].lastName}
            (${employeeInfo[i].employeeId}) – ${employeeInfo[i].title}:
             $${employeeInfo[i].annualSalary}</li>
        `);
    } // end for loop  
} // end displayEmployee

function onReady() {
    // click event for submit button, id 'employeeInfoBtn'
    $('#employeeInfoBtn').on('click', addEmployeeInfo);
    // click event for deleting employee
} // end onReady

function removeEmployee() {
    // remove employee from DOM (maybe remove from employeeInfo?)
} // end removeEmployee


