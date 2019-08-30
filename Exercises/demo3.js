/*
// if else if loops

let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(Number)){
    console.log('Thanks')}
    else if (Number <10){
        document.write('Your small number is the square root of ' +theNumber*theNumber); 
    }
    else if (Number <100){
        document.write('Your medium number is the square root of ' +theNumber*theNumber);
    }
    else if (Number <10s00){
        document.write('Your large number is the square root of ' +theNumber*theNumber);
    } 

    */

    //  While Loops - Example 1.0


    /*
    
    let number = 0;
    while (number <= 10){
        document.write("<h1>The number is "+number+"</h1>");
        number = number + 2;
    }
    

    let result=1;
    let counter=0;
    
    while (counter <10){
        result=result*2;
        counter=counter+1;
        document.write(" "+result+" at counter "+counter+".");
    }

    */

// Do-While loops
/*
let yourName;
do{
    yourName= prompt('Your name is ? ');
}while(!yourName);
console.log(yourName);
*/

// the same code above for While loop now in For-Loops

let result=1;
for (let counter=0;counter<10;counter=counter+1){
    result=result*2;
    document.write('The result is '+result+'')
}

/*

//Display usage of do-While loop
        var x=5;
        do{
            document.write('<h2>'Marib'</h2>');
            x--;
        }while(x>5);

*/