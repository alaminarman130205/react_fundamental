// array method 
const product = [
    {Name : 'labtop', price:32000, brand: 'lenevo', color:'silver'},
    {Name : 'phone', price:32000, brand: 'lenevo', color:'red'},
    {Name : 'watch', price:32000, brand: 'titan', color:'green'},
    {Name : 'sunglas', price:32000, brand: 'lenevo', color:'silver'},
    {Name : 'camera', price:32000, brand: 'lenevo', color:'silver'},
    
];

const brands = product.map(product => product.brand);
// console.log(brands);
const price = product.map(price => price.price);
// console.log(price);
product.forEach(product => console.log(product.color)); //single line for each

product.forEach(product => {
     
});

// 3 filter 
const cheap  = product.filter(product => product.price <=40000);
// console.log(cheap);

const SpecificNmae = product.filter(p => p.Name.includes('n'));
// console.log(SpecificNmae);

// 4 find jeta match korbe tar prothom ta die dibe 

const special = product.find(p => p.Name.includes('n'));
console.log(special);

