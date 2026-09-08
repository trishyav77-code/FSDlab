//higher order function is a function that takes another function as an argument or returns a function as a result.
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  function add(x,y){
    return x+y;

  }
  function subtract(x,y){
    return x-y;
  }
    function multiply(x,y){
    return x*y;
  }
  console.log(calculate(5, 3, add));
  console.log(calculate(6, 7,subtract));
console.log(calculate(4, 5, multiply));
//.map-map is a higher order function that takes a callback function as an argument and returns 
// a new array with the results of calling the callback function on each element of the original array.
let numbers=[1,3,5,62,8];
let square = [];

//through for loop
for(let i=0;i<numbers.length;i++){
    square.push(numbers[i]*numbers[i]);
}
console.log(square);

///through map
let square1 = numbers.map(function(number){
    return number*number;
});
console.log(numbers);
console.log(square1);

//through arrow function
let square2 = numbers.map((number) => number*number);
console.log(square2);

//.filter-filter is a higher order function that takes a callback function as an argument and returns a
//  new array with all the elements that pass the test implemented by the callback function.
let n1=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=n1.filter((number) => number%2===0);
console.log(evenNumbers);
let oddNumbers=n1.filter(function(number){
    return number%2!==0;
});
console.log(oddNumbers);

//.reduce-reduce is a higher order 
// function that takes a callback function as an argument and returns a single value
let n2=[1,2,3,4,5];
let total=n2.reduce((sum,number) =>{ 
    return sum+number;
}, 0);
console.log(total);
let max=[10,60,30,40,50];
//let max1=0;
let maximum=max.reduce((max,number)=>{
    if(number>max){
        max=number;
    }
    return max;
}, 0);
console.log(maximum);