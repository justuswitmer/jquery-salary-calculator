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
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let employeeId = $('#employeeIdIn').val();
    let title = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    // if statement to check that all fields are filled
    if (!firstName || !lastName || !employeeId || !title || !annualSalary) {
        alert('All fields must be filled.')
    } // end if
    else {
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
        // remove text from fields
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#employeeIdIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');
        console.log(employeeInfo);
        displayEmployee();
    } // end else
} // end addEmployeeInfo

function calcMonthlyCost() {
    // loop through employeeInfo
    let monthlyCosts = 0;
    for (i = 0; i < employeeInfo.length; i++) {
        monthlyCosts += Number(employeeInfo[i].annualSalary)
    } // end for
    console.log(monthlyCosts);
    // sum employeeInfo.annualSalary
    // append sum of employeeInfo.annualSalary to DOM
    // if monthly costs > $20,000, add red background color to monthly costs
} // end calcMonthlyCost

function displayEmployee() {
    console.log('in displayEmployee');
    let el = $('#employeeInfoOut');
    // append employeeInfo to DOM, clear fields
    el.append(`
       <tr><th>First Name</th><th>Last Name</th><th>Employee ID</th>
      <th>Job Title</th><th>Annual Salary</th></tr>
    `);

    for (let i = 0; i < employeeInfo.length; i++) {
        el.append(`
            <tr><td>${employeeInfo[i].firstName}</td><td>${employeeInfo[i].lastName}</td>
            <td>${employeeInfo[i].employeeId}</td><td>${employeeInfo[i].title}</td>
             <td>$${employeeInfo[i].annualSalary}</td></tr>
        `);
    } // end for loop
    calcMonthlyCost();
} // end displayEmployee

function onReady() {
    // click event for submit button, id 'employeeInfoBtn'
    $('#employeeInfoBtn').on('click', addEmployeeInfo);
    // click event for deleting employee
} // end onReady

function removeEmployee() {
    // remove employee from DOM (maybe remove from employeeInfo?)
} // end removeEmployee


