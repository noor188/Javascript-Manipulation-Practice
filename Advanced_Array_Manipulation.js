// Advanced Array Manipulation

// 1. Create a new array that contains the first three items from the original inventory list.
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];

console.log("Inventory array: ", inventory);
inventory.slice(0,3);
console.log("First 3 elements: ", inventory);

// 2. Remove two items starting from index 2 in inventory

let inventory1 = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
console.log("Inventory array: ", inventory1);
inventory1.splice(2,2);
console.log("Removed 2 items starting from index 2: ", inventory1);

// 3. Add new equipment to the inventory starting at index 3
let inventory3 = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
inventory3.splice(3,0, 'PC');
console.log("Added new equipment to the inventory starting at index 3: ", inventory3);

// 4. Merge two arrays of office equipment into one.
let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];

//let mergedEquipment = [...officeEquipment1, ...officeEquipment2];
let mergedEquipment = officeEquipment1.concat(officeEquipment2);
console.log("officeEquipment1 array: ", officeEquipment1);
console.log("officeEquipment2 array: ", officeEquipment2)
console.log("Merged array: ", mergedEquipment);

// 5. Sort the list of sales amount in descending order
let sales1 = [500, 1000, 750, 2000, 1250];
console.log("Sales1 list before sorting: ", sales1);
sales1.sort((a,b) => a > b);
console.log("Sales1 list after sorting: ", sales1);