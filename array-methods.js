const products =[
    { name:'laptop', price: 2300, brand: 'hp', color: 'white'},
    { name:'monitor', price: 2400, brand: 'lenevo', color: 'black'},
    { name:'watch', price: 2500, brand: 'dell', color: 'grey'},
    { name:'phone', price: 2600, brand: 'acer', color: 'silver'},
   
];
// Map was return Array
const brands = products.map(product => product.brand)

const prices = products.map(product => product.price)
console.log(brands);
console.log(prices);
// forEach don't return Array. just get output
products.forEach(product => console.log(product.brand))
products.forEach(product => console.log(product.price))
products.forEach(product => console.log(product.color))
// filter 
const cheap = products.filter(product => product.price >= 2400 )

const specificName = products.filter(product => product.name.includes('a'))
const specificBrandName = products.filter(product => product.brand.includes('e'))
console.log(specificName);
console.log(specificBrandName);
console.log(cheap);

// find 

const special = products.find(product=> product.name.includes('a'))
console.log(special);