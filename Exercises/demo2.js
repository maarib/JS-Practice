document.write("Hello");
console.log('Hi, I am a waitFunction');

// Start of waitFunction (using while)
/*
function waitThreeSeconds (){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){
        console.log('finished function');
    }
}
function clickHandler(){
    console.log('click event!')
}

//listen for the click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished execution');

*/
// add operator

/*

function add2Number(a,b){ //    a,b are parameters
    var c=a+b;
    return c;
}
var output = add2Number('Marib',' Abid'); //  function call
document.write('<h1>The total is: '+output
+'</h1>');

*/

// Arrays in JS

var cars=['Audi','BMW','Volvo'];
cars.push('Mercedes',2);
document.write(cars.length);

for (var i=0;i<=4;i++)
{
    document.write('<h1>'+ cars[i] +'</h1>');
    document.write('Value of [i] with the car, '+cars[i]+' is: '+[i]);

}

