// Defining a function

// Regular function
/*

const square = function(x)
{
    return x*x;
}
document.write(square(1000));

*/
// Arrow function
/*

const square = x =>
{
    return x*x;
}
document.write(square(1000));

*/

// Same function in a different way

const square = x => x*x;
document.write(square(2));

// Blowing the stacks
/*
function chicken(){return egg();}
function egg(){return chicken();}

document.write(chicken() + 'came first');

*/
// Passing irregular arguments - minus acting as a - operator
/*

const minus = (a,b) => {
    if(b === undefined) return -a;
    else return (a-b);
}

document.write(minus(10));

*/
// Optional arguments
/*

const power = (base,exponent=2) => {
    let result=1;
    for(let count=0;count<exponent;count++){
        result *= base;
        console.log(result);
    }
    return result;
    
}
document.write('<h1>'+power(2,4)+'</h1>');

*/

// Closure: being able to reference a specific instance of a local binding in an enclosing scope
/*

const wrapValue = (n) => {
   // let local = n;
    return () => (n);
}
let wrap1 = wrapValue(1); // using function as a value
let wrap2 = wrapValue(2);

console.log(wrap2());
console.log(wrap1());

*/

// Recursive Functions
function findSolution (target){
    function find(current,history){
        if (current == target){
            return history;
        }
        else if (current > target){
            return null;
        }else {
            return find(current + 5, '${history}' + '+ 5') || find(current * 3,'(${history} * 3)');
        }
    }
    return find(1,'1');
}
document.write(findSolution(24));