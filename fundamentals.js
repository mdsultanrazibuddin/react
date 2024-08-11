// 1. how to declare a variable using let and const
//  let = changeable & const = unchangeable
const name = 'Razib';
let season = 'summer';
season = 'winter'

// 2. condition declare
// # 6 basic conditions : >, <, ===, !==, <=, >=
//  multiple conditions : &&, ||  

if (fathername === 'rafik' || season === 'autum') {
    
}
else if (fathername === 'rafik') {
    
}
else{

}

// 3. array declare
// 4. for loop
const numbers = [23, 34, 45, 67, 78, 89, 90]
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    
}
// 5. function

function multiply (num1, num2) {
    const result = num1+ num2;
    return result;
}

const output = multiply(23, 34)

// 6. object

const students ={
    name: 'razib',
    age: 27,

}
const myAge = 'age';
console.log(students.age); //direct by property
console.log(students['age']); // access by property name string
console.log(students[myAge]); // access via property name in a variable
