// Ticket 4: Working with Objects

// 1. Create an object that represents an employee 
//    with properties: firstName, lastName, position, and salary.
let employee = {
    firstName : "Noor",
    lastName  : "Mamlook",
    position  : "Software Developer",
    salary    : 90000
};

console.log("Employee object: ", employee);

// 2. Update the position of the employee object.
employee.position = "Softer Enginner";
console.log("Updated postion property value: ", employee);

// 3. Add a new property hireDate to the employee object.
employee.hireDate = "4-10-2025";
console.log("Added a new propert to employee object: ", employee);

// 4. Delete the salary property from the employee object.
delete employee.salary;
console.log("Deleted salary property: ", employee);

// 5. Loop through the properties of the employee object and log each key-value pair to the console.
for (item in employee){
    console.log(item, ":", employee[item]);
}