/*
let result=1;
for (let counter=0;counter<10;counter=counter+1){
    result=result*2;
    document.write('The result is '+result+'. ')
}

// Breaking out of a loop
/*

for (let current = 20;;current = current+1){
    if (current % 7 == 0){
        console.log(current);
        document.write('<h1>The number is '+current+'</h1>');
        break;
    } 
}



//switch case

let caseAll = ['rainy','sunny','cloudy'];
switch(prompt('How is the weather looking?')){
    case caseAll[0]:
        document.write('Bring an umbrella');
        break;
    case caseAll[1]:
        document.write('Bring sun tan lotion');
        break;
    default:
        document.write('Loser');
        break;
}



// Q1) Looping a triange

let char='#';
for(let counter=1;counter<8;counter++){
    document.write('<h1>'+char+'</h1>');
    char+='#';
}


// Q2) Fizz Buzz - Advanced

let result=1;

for(let count=1;count<=100;count++)
{
    if ((result % 3 == 0) && (result % 5 ==0))
    {
        document.write('<h1>'+result+'. FizzBuzz<h1>');
    }
    else if (result % 3 == 0)
    {
        document.write('<h1>'+result+'. Fizz<h1>');
    }
    else if (result % 5 == 0)
    {
        document.write('<h1>'+result+'. Buzz<h1>');
    }
    else
    {
        document.write('<h1>'+result+'<h1>');
    }
    result+=1;
}



// Q3) Chessboard

let characters = '';

for(let line=1;line<8;line++)
{
    if (line % 2 == 0)
    {
        document.write('<h1>'+characters+'</h1>');
        characters = '####_';
    }
    else
    {
        document.write('<h1>'+characters+'</h1>');
        characters = '_####';
    }
}

*/