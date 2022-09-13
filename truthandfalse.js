// true or false 

let myvar = 5; 
// check any truthy value 
if(myvar){
    let  myvar1 = myvar *5 ; 

}else{
    myvar = 0;
}
let meymoney = 50; 
if(!meymoney){
    // console.log('positive');
}else{
    // console.log('neg');
}

const money  = 80; 
let food;
if(money>100){
    food = 'biriani';

}else{
    food = 'cha buscuit';
}
// 3 ternary operator 
let food1 = money>100 ? 'birinay ' : 'cha buscuit';
console.log(food1);

// multiple condition ternary operator 
let drink = (money<100 &&myvar< 100) ? 'coke':'biri';
console.log(drink);


// shortcut number to string converstion 
const num  = 534; 
console.log(num);
const numstr= num + '';
console.log(numstr);

const input = '560';
const inputNum= +input;
console.log(inputNum);
