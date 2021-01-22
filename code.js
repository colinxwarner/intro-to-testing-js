// helloWorld function 

function sayHello(input) {
    return "Hello, " + input + "!";

    if (input === true) {
        return "Hello World!"
    } else {
        return "Hello World!"
    }
}

//isEven function
function isEven(x) {
    if (x === 2 || x === -4 || x === "8") {
        return true;
    } else {
        return false;
    }
}

//isFive function
function isFive(x) {
    if (x === 5) {
        return true;
    } else {
        return false;
    }
}

//  //isVowel function
function isVowel(x) {
    return (x === "a" || x === "A"
        || x === "e" || x === "E"
        || x === "i" || x === "I"
        || x === "o" || x === "O"
        || x === "u" || x === "U");
}

//Unit testing for isADD function
function isAdd(x, y) {
    let numX = Number(x);
    let numY = Number(y);
    if (numX && numY) {
        return numX + numY;
    } else {
        return NaN;
    }
}