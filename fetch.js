
// JSON + stringify, parse
const students ={
    name: 'razib',
    age: 27,

}

//normal javascript obj covert to JSON 
const studentJson = JSON.stringify(students)


// JSON covert to normal javascript obj
const studentObj = JSON.parse(studentJson)

console.log(students);
console.log(studentJson);
console.log(studentObj);


// fetch

fetch('url')
.then(res => res.json())
.then(data => console.log(data))


// keys, values

const key = Object.keys(students)
const values = Object.values(students)

console.log(key, values);


// for
const numbers = [23, 34, 45, 67, 78, 89, 90]

numbers.forEach(number => console.log(number))
numbers.map(number => number * 2 )


// add or remove from an array
const products =[
    { name:'laptop', price: 2300, brand: 'hp', color: 'white'},
    { name:'monitor', price: 2400, brand: 'lenevo', color: 'black'},
    { name:'watch', price: 2500, brand: 'dell', color: 'grey'},
    { name:'phone', price: 2600, brand: 'acer', color: 'silver'},
   
];

const newProduct = { name:'mobaile', price: 2600, brand: 'acer', color: 'silver'}

const newProducts = [...products, newProduct    ]



