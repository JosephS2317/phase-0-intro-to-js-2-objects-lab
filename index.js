// Write your solution in this file!
const employee = {
    name : "Sam" ,
    streetAddress : "11 Broadway"
};

function updateEmployeeWithKeyAndValue (employee , key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

/// destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey (employee , name) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
   delete employee.name;
   return employee;
}

// let newEmployee = destructivelyDeleteFromEmployeeByKey("employee", "name");