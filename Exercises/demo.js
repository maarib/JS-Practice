/*let num=16;
num='Marib'
alert(num);
*/ 

//document.write("External File");

/* // Switch Case
var day = 1;
switch(day){
    case 1:
        document.write("<h1>Sunday</h1>")
        break;

    case 2:
        document.write("<h1>Monday</h1>")
        break;
    
    default:
        document.write("<h2>Wrong Input<h2>")
        break;
}

for(var x=2;x<=2000;x++)
{
    document.write("<h2>"+(x*9)+"</h2>");
} 

*/

// Referencing outer lexical environment globally
function b(){
    //var myVar='not';
    console.log(myVar);
}
function a(){
    var myVar=2;
    console.log(myVar);
    b();
}
var myVar=1;
console.log(myVar);
a();
console.log('End');

/*
// Referencing outer lexical environment locally
function a(){
    function b(){
        //var myVar='not';
        console.log(myVar);
    }
    var myVar=2;
    console.log(myVar);
    b();
}
var myVar=1;
console.log(myVar);
a();
*/