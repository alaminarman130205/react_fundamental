//1 JSON 
const student = {
    Name : 'salib khan',
    age :32, 
    movies:['king khan', 'naser ali', 'dhakar mastan','noting']
};
const studentJson = JSON.stringify(student);
// console.log(studentJson);
// console.log(JSON.parse(studentJson));
// 2 fetch 
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

const numbers = [1,2,3,5,6,7];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);
   //for of on array like object 
   // loop on an objects using for in


// add or remove from an array 

const products = [
    {Name : 'labtop', price:32000, brand: 'lenevo', color:'silver'},
    {Name : 'phone', price:32000, brand: 'lenevo', color:'red'},
    {Name : 'watch', price:32000, brand: 'titan', color:'green'},
    {Name : 'sunglas', price:32000, brand: 'lenevo', color:'silver'},
    {Name : 'camera', price:32000, brand: 'lenevo', color:'silver'},
    
];
const newProduct = [
    {Name:'webcam', price:700, brand:'lenevo', color:'lal'},
];
// copy product array and add new product 

const newProducts = [...products,  newProduct]; 

// create a new array without one specific item





