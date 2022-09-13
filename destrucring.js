// 1 array destructuring 
const numbers = [42,65];

const [x,y] =numbers;
// console.log(x,y);

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums; 

}
// console.log(boxify(90, 34));

const student = {
    Name : 'salib khan',
    age :32, 
    movies:['king khan', 'naser ali', 'dhakar mastan','noting']
};

const[firstMovie, secondMovie,thirdMovie, forthMovie] =student.movies;

// object destructuring 

const {name, age}  =  {name:'alu', age:14};
const {id ,name1, age1}  =  { id :12 , name:'alu', age:14};

const employee = {
    ide :'vsCode', 
    designation :'developer',
    machine : 'mac', 
    languages : ['html', 'css', 'js'], 
    specification:{
        height: 66,
        weight:54, 
        address :'kurmitola',
        drink: 'water',
    }
}
const {machine, ide} = employee;
const {weight, address} = employee.specification;


