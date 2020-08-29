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
    //if (!firstName || !lastName || !employeeId || !title || !annualSalary) {
    //  alert('All fields must be filled.')
    //} // end if
    //else {
    // get employee info and place into a new object
    const newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        title: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
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
    //} // end else
} // end addEmployeeInfo

function calcMonthlyCost() {
    // loop through employeeInfo
    let monthlyCost = 0;
    for (i = 0; i < employeeInfo.length; i++) {
        // sum employeeInfo.annualSalary
        monthlyCost += Number(employeeInfo[i].annualSalary)
    } // end for
    console.log(monthlyCost);
    // divide into monthly cost
    monthlyCost = Math.round(monthlyCost / 12);
    console.log(monthlyCost);
    // condition for showing if monthlyCost > 20000
    let className;
    if (monthlyCost > 20000) {
        className = "monthlyCostDisplay";
    }
    else {
        className = "";
    }
    let el = $('#monthlyCostOut');
    el.empty();
    // append sum of employeeInfo.annualSalary / 12 to DOM
    el.append(`
    <p class =${className}>Total Monthly Cost: $${monthlyCost}</p>
    `);

    // if monthly cost > $20,000, add red background color to monthly costs
} // end calcMonthlyCost

function displayEmployee() {
    console.log('in displayEmployee');
    let el = $('#employeeInfoOut');
    el.empty();
    el.append(`
    <tr><th>First Name</th><th>Last Name</th><th>Employee ID</th>
   <th>Job Title</th><th>Annual Salary</th></tr>
 `);
    // append employeeInfo to DOM, clear fields
    for (let i = 0; i < employeeInfo.length; i++) {
        el.append(`
            <tr><td>${employeeInfo[i].firstName}</td><td>${employeeInfo[i].lastName}</td>
            <td>${employeeInfo[i].employeeId}</td><td>${employeeInfo[i].title}</td>
             <td>$${employeeInfo[i].annualSalary}</td>
             <td><button id="removeEmployeeBtn">delete</button></td></tr>
        `);
    } // end for loop
    calcMonthlyCost();
} // end displayEmployee

function onReady() {
    // click event for submit button, id 'employeeInfoBtn'
    $(document).on('click', '#employeeInfoBtn', addEmployeeInfo);
    // click event for deleting employee
    $(document).on('click', '#removeEmployeeBtn', removeEmployee);
} // end onReady

function removeEmployee() {
    console.log('clicked the removeEmployeeBtn');
    // remove employee from DOM (maybe remove from employeeInfo?)
    $(this).closest('tr').remove();
} // end removeEmployee


