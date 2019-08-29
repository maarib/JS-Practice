// Magic numbers
/*

const secondsInADay = 86400
for (let i = 0; i < secondsInADay ;i +=1) {
    // ...
}

// Deep nesting (Part-1)

const exampleArray = [[['value']]];
document.write("The value inside the inception array is: " + exampleArray[0][0][0]);

*/

// Deep nesting (Part-2 | With a function)

const exampleArray = [[['value']]];

exampleArray.forEach((array1)) => {
    array1.forEach((array2)) => {
        array2.forEach((el)) => {
            console.log(el);
        }
    }
}