// Define an object
const person: { name: string; age: number } = {
    name: "John",
    age: 30,
  };
  
  // Accessing object properties
  console.log(person.name); // Output: "John"
  console.log(person.age);  // Output: 30

  // Define an array with type annotation
const numbers: number[] = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(numbers.length); // Output: 5


// Define an array type using generics
const names: Array<string> = ["Alice", "Bob", "Charlie"];

// Accessing array elements
console.log(names[1]); // Output: "Bob"
console.log(names.length); // Output: 3
