//1

let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}

console.log(groupByType(transactions));

// Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit", amount: 200 }],
// withdrawal: [{ type: "withdrawal", amount: 50 }, { type: "withdrawal", amount: 30 }] }

//2

let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];

let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}

console.log(filterEmployees(employees, ageLimit));

// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

//3

let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let classList of classes) {
        for (let name of classList) {
            if (nameSet.has(name)) {
                return true;
            }
            nameSet.add(name);
        }
    }
    return false;
}

console.log(checkDuplicates(classes));
// Output: true

//4

function returnTime() {
    let date = new Date();
    return date.toLocaleString();
  }
  
  console.log(returnTime());

  //show current date & time

  //5

  function calculateAge(birthdate) {
    let date = new Date();
    let birthday = new Date(birthdate);
  
    let age = date.getFullYear() - birthday.getFullYear();
    return typeof age === "number"
      ? age
      : "invalid input!";
  }
  console.log(calculateAge("1999-12-11"));

  //output:25

  //6

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
}

console.log(addDays("2024-06-15", 10));
//2024-06-25

//7

function dateDifference(date1, date2) {
    let a = new Date(date1);
    let b = new Date(date2);
    let diffTime = Math.abs(a - b);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log(dateDifference("2022-06-15", "2024-06-15"));
// Output:731

//8

let userPreferences = new Map();

function setPreference(key, value) {
    userPreferences.set(key, value);
}

function getPreference(key) {
    return userPreferences.get(key);
}

setPreference("theme", "dark");
setPreference("fontSize", "16px");

console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px

//9

function countOccurrences(arr) {
    let countMap = new Map();
    for (let item of arr) {
        if (countMap.has(item)) {
            countMap.set(item, countMap.get(item) + 1);
        } else {
            countMap.set(item, 1);
        }
    }
    return countMap;
}

let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));

// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

//10

let employes = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function mapEmployeeIdsToNames(employes) {
    let employeeMap = new Map();
    for (let employee of employes) {
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}

let employeeMap = mapEmployeeIdsToNames(employes);
console.log(employeeMap);

// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }

//11

let inventory = new Map();

function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)) {
        inventory.set(itemName, inventory.get(itemName) + quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    return inventory.get(itemName);
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);

console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150

//12

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]

//13

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2));
// Output: [3, 4]

//14


function union(...arrays) {
    let resultSet = new Set();
    for (let array of arrays) {
        for (let item of array) {
            resultSet.add(item);
        }
    }
    return [...resultSet];
}
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];
console.log(union(arr1, arr2, arr3));

// Output: [1, 2, 3, 4, 5, 6, 7]

//15

function removeItemsFromSet(items, set) {
    for (let item of items) {
        set.delete(item);
    }
}

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];
removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]);
 // Output: [1, 4, 5]

 //16

 function updateAttendance(newAttendance, overallAttendance) {
    for (let student of newAttendance) {
        overallAttendance.add(student);
    }
    return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];

overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
// Output: ["Alice", "Bob", "Charlie"]