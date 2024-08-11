

const numbers = [23, 34, 45, 67, 78, 89, 90]
const students ={
    name: 'razib',
    age: 27,

}
// 1.  template string
const about = ` My name is ${students.name} age of ${students.age} has number ${numbers[2]}`;
console.log(about);

// 2. arrow function 
const getFiftyFive = () => 55;

const getSixtySix = num => num+5;
const isEven = x => x % 2 == 0 ;
const addThree = (x, y, z) => x + y + z ;

const doMath = (num1, num2) => {
    const sum = num1+ num2 ;
    return sum;

}
console.log(doMath(56, 68));

// spread operator

const newNumber = [...numbers];
const addNumber = [...numbers, 77];
numbers.push(88);
numbers.push(87);
numbers.push(86);

console.log(newNumber);
console.log(numbers);
console.log(addNumber);