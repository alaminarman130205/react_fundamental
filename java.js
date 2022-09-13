// 1 how to declare a variable using let and const 
const fatherName = 'tm';
let season = 'rainy';
season = 'winter';

// 2 condition 
    // 6 basic condition  <>=== !== <= >=
    // multiple condition : && ||
if(fatherName === 'tm' || season ==='rainy'){
    console.log(fatherName);
}else{
    console.log('nothing');
}

// 3 array declare 
 // index 
 //length, push, pop,
 const numbers  = [1,2,43,5,6,67];

//  4 loop 
for(let i =0 ; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number);
}
// 5 function 
function multiply(num1, num2){
    const result = num1* num2; 
    return result;
}
const output = multiply(1,2);
console.log(output);

// 6 objects 
   //3 ways to access property by name
const student = {
    Name : 'salib khan',
    age :32, 
    movies:['king khan', 'naser ali', 'dhakar mastan','noting']
};
const myValue = 'age';
// console.log(student.age);direct by propery
// console.log(studnet['age']);direct access by property name string 
// console.log(student[myValue]); accessby property name variable