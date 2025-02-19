// Ticket 1: Basic Array Methods

// 1. Add a new employee to the end of the array
let employees = ['John', 'Sarah', 'Eric'];

console.log("Added one employees");
console.log("Array size before: ", employees.length);
console.log(employees);

employees.push("Noor");

console.log("Array size after:", employees.length);
console.log("Does the array contain the new employee? ", employees.at(-1) == 'Noor');
console.log(employees);

// 2. Remove last employee from the array
console.log("Removed one employees");
console.log("Array size before: ", employees.length);
console.log(employees);

employees.pop();

console.log("Array size after:", employees.length);
console.log("Does the array contain the new employee at index -1? ", employees.at(-1) == 'Noor');
console.log(employees);

// 3. Add a new employee to the beginning of the array
console.log("Added one employees the front");
console.log("Array size before: ", employees.length);
console.log(employees);

employees.unshift("Andrea");

console.log("Array size after:", employees.length);
console.log("Does the array contain the new employee at index 0? ", employees.at(0) == 'Andrea');
console.log(employees);

// 4. Remove the first employee from the array
console.log("Removed one employees from the front");
console.log("Array size before: ", employees.length);
console.log(employees);

employees.shift();

console.log("Array size after:", employees.length);
console.log("Does the array contain the new employee at index 0? ", employees.at(0) == 'Andrea');
console.log(employees);

// 5. Find the index of 'Sarah' in the array
console.log("Index of 'Sarah' in the array: ", employees.indexOf('Sarah'));