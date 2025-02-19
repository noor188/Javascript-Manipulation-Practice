// Ticket 2: Intermediate Array Methods

// 1. Filter out salaries below $50,000 from the array
let salaries = [35000, 45000, 55000, 70000, 90000];

let above_50_salaries = salaries.filter(salary => salary > 50000);

console.log("Salaries array: ", salaries);
console.log("Filtered salaries array: ", above_50_salaries);

// 2. Create a new array with the square of each salary
let salaries1 = [20000, 30000, 40000, 50000];

let square_Salaries = salaries1.map(salary => salary **2);

console.log("Salaries array: ", salaries1);
console.log("Square root of salaries: ", square_Salaries);

// 3. Find the first salary that is greater than $60,000
let salaries2 = [45000, 55000, 70000, 90000];
console.log("Salaries array: ", salaries2);
console.log("First salary that is greater than $60,000: " ,salaries2.find(salary => salary> 60000));

// 4. Calculate the total sum of all sales made
let sales = [100, 200, 150, 300, 400];

console.log("Sales array: ", sales);
console.log("Sum of all sales made", sales.reduce((sum ,sale) => sum + sale, 0));

// 5. loop through the list of departments and log each one to the console
let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];

departments.forEach(department =>{
    console.log(department);
});
