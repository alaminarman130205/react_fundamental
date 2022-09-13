// 1 template string

const number = [1,2,3,4,56,7,8,34,2,23,4];
const student = {
    Name : 'salib khan',
    age :32, 
    movies:['king khan', 'naser ali', 'dhakar mastan','noting']
};

const about = `my name is ${student.Name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[2]}`;
console.log(about);


// 2 arrow function 
const getFiftyFive = () => 55; // zero perameter arrow function
const sixtyFive = (num1, num2) =>{
    const result  = num1* num2; 
    return result;
}
const  isEvent = x => x % 2 === 0; // single perameter arrow function 
const addThree = (x,y,z) => x+y+z; //multiperameter arrow function 

// 3 spread operator 
const newNumbers = [...numbers];
console.log(newNumbers);

// create a new array from an older element and add an element 
const currentNumbers = [... numbers, 55,10];