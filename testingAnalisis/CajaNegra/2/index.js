// 4) Calculadora
// Implemente una calculadora numérica en Java con las siguientes operaciones:
//  d) operaciones básicas (suma, resta multiplicación y división),
//  e) factorial de un número,
//  f) promedio de una lista de números,
//  g) raíz y potencia de un número.
// a) Diseñe las pruebas para cada una de las operaciones anteriores utilizando el criterio de
// prueba de caja negra valor límite.

// Variables elemento del index.HTML
let myAdd = document.getElementById("add");
let mySub = document.getElementById("sub");
let myMul = document.getElementById("mul");
let myDiv = document.getElementById("div");
let myFac = document.getElementById("fac");
let myAvg = document.getElementById("avg");
let mySqr = document.getElementById("sqr");
let myPow = document.getElementById("pow");

// Variables testeadoras de valor limite
const min = Number.NEGATIVE_INFINITY
const minPlus1 = Number.NEGATIVE_INFINITY + 1
const nominal = 0
const maxMinus1 = Number.POSITIVE_INFINITY - 1
const max = Number.POSITIVE_INFINITY
// Valores robustos
const r1 = (Number.NEGATIVE_INFINITY - 1)
const r2 = (Number.POSITIVE_INFINITY + 1)

// Inicio declaracion de funciones Calculadora
function addition(a, b) {
    myAdd.innerText += "\n";
    myAdd.innerText += a + b;
    return a + b;
}

function substraction(a, b) {
    mySub.innerText += "\n";
    mySub.innerText += a - b;
    return a - b;
}

function multiplication(a, b) {
    myMul.innerText += "\n";
    myMul.innerText += a * b;
    return a * b;
}

function division(a, b) {
    myDiv.innerText += "\n";
    if (b == 0) {
        if (a * b < 0) {
            myDiv.innerText += Number.NEGATIVE_INFINITY;
            return Number.NEGATIVE_INFINITY;
        } else {
            myDiv.innerText += Number.POSITIVE_INFINITY;
            return Number.POSITIVE_INFINITY;
        }
    } else {
        myDiv.innerText += a / b;
        return a / b;
    }
}

function factorial(a) {
    myFac.innerText += "\n";
    if (a < 0) {
        myFac.innerText += "Factorial operation is not defined for negative numbers";
        return "Factorial operation is not defined for negative numbers";
    }
    if (a == 0) {
        myFac.innerText += 1;
        return 1;
    }
    let res = 1;
    while (a > 1) {
        res *= a;
        a--;
    }
    myFac.innerText += res;
    return res;
}

function averageOfANumberList(list) {
    myAvg.innerText += "\n";
    let n = list.length;
    if (n == 0) {
        myAvg.innerText += "Cannot do the average of an empty list";
        return "Cannot do the average of an empty list";
    }
    let partial = 0;
    for (let i = 0; i < n; i++)
        partial += list[i];
    myAvg.innerText += partial / n;
    return partial / n;
}

function squareRoot(a) {
    mySqr.innerText += "\n";
    if (a < 0) {
        mySqr.innerText += "Square root is not defined for negative numbers";
        return "Square root is not defined for negative numbers";
    }
    mySqr.innerText += Math.sqrt(a);
    return Math.sqrt(a);
    // if (a < 0) return "Square root is not defined for negative numbers";
    // let y = 0;
    // let found = false;
    // while (y <= a && !found) {
    //     if (y * y == a) 
    //         found = true;
    //     y++;
    //     if (found)
    //         y--;
    // }
    // return y;
}

function power(a, b) {
    myPow.innerText += "\n";
    if (a == 0) {
        if (b == 0) {
            myPow.innerText += "Zero to the power of zero cannot be determinated";
            return NaN;
        } else {
            myPow.innerText += 0;
            return 0;
        }
    }
    if (b == 0) {
        myPow.innerText += 1;
        return 1;
    }
    if (b == 1) {
        myPow.innerText += a;
        return a;
    }
    let result = 1;
    if (b > 1) {
        while (b > 0) {
            result *= a;
            b--;
        }
        myPow.innerText += result;
        return result;
    }
    if (b < 0) {
        b = -b;
        while (b > 0) {
            result *= a;
            b--;
        }
        myPow.innerText += 1 / result;
        return 1 / result;
    }
}
// Fin declaracion de funciones Calculadora

// Inicio tests
let a, b;
console.log("Inicio test unidad Suma()")
console.log("Fijo a y muevo b")
a = nominal;

// Expected: b
b = r1;
console.log(addition(a, b));

// Expected: b
b = r2;
console.log(addition(a, b));

// Expected: b
b = min;
console.log(addition(a, b));

// Expected: b
b = minPlus1;
console.log(addition(a, b));

// Expected: 0
b = nominal;
console.log(addition(a, b));

// Expected: b
b = maxMinus1;
console.log(addition(a, b));

// Expected: b
b = max;
console.log(addition(a, b));

console.log("Fijo b y muevo a")
b = nominal;

// Expected: a
a = r1;
console.log(addition(a, b));

// Expected: a
a = r2;
console.log(addition(a, b));

// Expected: a
a = min;
console.log(addition(a, b));

// Expected: a
a = minPlus1;
console.log(addition(a, b));

// Expected: 0
a = nominal;
console.log(addition(a, b));

// Expected: a
a = maxMinus1;
console.log(addition(a, b));

// Expected: a
a = max;
console.log(addition(a, b));
console.log("Fin test unidad Suma()")

console.log("Inicio test unidad Resta()")
console.log("Fijo a y muevo b")
a = nominal;

// Expected: b
b = r1;
console.log(substraction(a, b));

// Expected: b
b = r2;
console.log(substraction(a, b));

// Expected: b
b = min;
console.log(substraction(a, b));

// Expected: b
b = minPlus1;
console.log(substraction(a, b));

// Expected: 0
b = nominal;
console.log(substraction(a, b));

// Expected: b
b = maxMinus1;
console.log(substraction(a, b));

// Expected: b
b = max;
console.log(substraction(a, b));

console.log("Fijo b y muevo a")
b = nominal;

// Expected: a
a = r1;
console.log(substraction(a, b));

// Expected: a
a = r2;
console.log(substraction(a, b));

// Expected: a
a = min;
console.log(substraction(a, b));

// Expected: a
a = minPlus1;
console.log(substraction(a, b));

// Expected: 0
a = nominal;
console.log(substraction(a, b));

// Expected: a
a = maxMinus1;
console.log(substraction(a, b));

// Expected: a
a = max;
console.log(substraction(a, b));
console.log("Fin test unidad Resta()")

console.log("Inicio test unidad Multiplicacion()")
console.log("Fijo a y muevo b")
a = nominal;

// Expected: 0
b = r1;
console.log(multiplication(a, b));

// Expected: 0
b = r2;
console.log(multiplication(a, b));

// Expected: 0
b = min;
console.log(multiplication(a, b));

// Expected: 0
b = minPlus1;
console.log(multiplication(a, b));

// Expected: 0
b = nominal;
console.log(multiplication(a, b));

// Expected: 0
b = maxMinus1;
console.log(multiplication(a, b));

// Expected: 0
b = max;
console.log(multiplication(a, b));

console.log("Fijo b y muevo a")
b = nominal;

// Expected: 0
a = r1;
console.log(multiplication(a, b));

// Expected: 0
a = r2;
console.log(multiplication(a, b));

// Expected: 0
a = min;
console.log(multiplication(a, b));

// Expected: 0
a = minPlus1;
console.log(multiplication(a, b));

// Expected: 0
a = nominal;
console.log(multiplication(a, b));

// Expected: 0
a = maxMinus1;
console.log(multiplication(a, b));

// Expected: 0
a = max;
console.log(multiplication(a, b));
console.log("Fin test unidad Multiplicacion()")

console.log("Inicio test unidad Division()")
console.log("Fijo a y muevo b")
a = nominal;

// Expected: 0
b = r1;
console.log(division(a, b));

// Expected: 0
b = r2;
console.log(division(a, b));

// Expected: 0
b = min;
console.log(division(a, b));

// Expected: 0
b = minPlus1;
console.log(division(a, b));

// Expected: Division por cero
b = nominal;
console.log(division(a, b));

// Expected: 0
b = maxMinus1;
console.log(division(a, b));

// Expected: 0
b = max;
console.log(division(a, b));

console.log("Fijo b y muevo a")
b = nominal;

// Expected: Division por cero
a = r1;
console.log(division(a, b));

// Expected: Division por cero
a = r2;
console.log(division(a, b));

// Expected: Division por cero
a = min;
console.log(division(a, b));

// Expected: Division por cero
a = minPlus1;
console.log(division(a, b));

// Expected: Division por cero
a = nominal;
console.log(division(a, b));

// Expected: Division por cero
a = maxMinus1;
console.log(division(a, b));

// Expected: Division por cero
a = max;
console.log(division(a, b));
console.log("Fin test unidad Division()")

console.log("Inicio test unidad Factorial()")
console.log("Como Factorial pide 1 sola variable, hago el valor limite solamente con a")

// Expected: Factorial negativo
a = r1;
console.log(factorial(a));

// Expected: !r2
a = r2;
// console.log(factorial(a));

// Expected: Factorial negativo
a = min;
console.log(factorial(a));

// Expected: Factorial negativo
a = minPlus1;
console.log(factorial(a));

// Expected: 1
a = nominal;
console.log(factorial(a));

// Expected: !maxMinus1
a = maxMinus1;
// console.log(factorial(a));

// Expected: !max
a = max;
// console.log(factorial(a));
console.log("Fin test unidad Factorial()")


console.log("Inicio test unidad Promedio()")
let list1, list2, list3, list4, list5, list6, list7, list8;
// Expected: Average of empty list
list1 = [];
console.log(averageOfANumberList(list1));

// Expected: r1
list2 = [r1];
console.log(averageOfANumberList(list2));

// Expected: r2
list3 = [r2];
console.log(averageOfANumberList(list3));

// Expected: min
list4 = [min];
console.log(averageOfANumberList(list4));

// Expected: minPlus1
list5 = [minPlus1];
console.log(averageOfANumberList(list5));

// Expected: 0
list6 = [nominal];
console.log(averageOfANumberList(list6));

// Expected: maxMinus1
list7 = [maxMinus1];
console.log(averageOfANumberList(list7));

// Expected: max
list8 = [max];
console.log(averageOfANumberList(list8));

// Expected: max
list1 = list1 + list8;
console.log(averageOfANumberList(list1));

// Expected: r2 + maxMinusOne / 2 = min - 1 + max - 1 / 2 = -2/2 = -1
list2 = list2 + list7;
console.log(averageOfANumberList(list2));

// Expected: r2 + nominal / 2 = max + 1 / 2
list3 = list3 + list6;
console.log(averageOfANumberList(list3));

// Expected: min + minPlus1 / 2 = min + min + 1 / 2
list4 = list4 + list5;
console.log(averageOfANumberList(list4));

// Expected: minPlus1 + min / 2 = min + 1 + min / 2
list5 = list5 + list4;
console.log(averageOfANumberList(list5));

// Expected: nominal + r2 / 2 = max + 1 / 2
list6 = list6 + list3;
console.log(averageOfANumberList(list6));

// Expected: maxMinusOne + r1 / 2 = max - 1 + min - 1 / 2 = -2/2 = -1
list7 = list7 + list2;
console.log(averageOfANumberList(list7));

// Expected: max
list8 = list8 + list1;
console.log(averageOfANumberList(list8));
console.log("Fin test unidad Promedio()")

console.log("Inicio test Raiz()")
console.log("Como Raiz pide 1 sola variable, hago el valor limite solamente con a")

// Expected: Raiz negativo
a = r1;
console.log(squareRoot(a));

// Expected: sqrt(r2)
a = r2;
console.log(squareRoot(a));

// Expected: Raiz negativo
a = min;
console.log(squareRoot(a));

// Expected: Raiz negativo
a = minPlus1;
console.log(squareRoot(a));

// Expected: 0
a = nominal;
console.log(squareRoot(a));

// Expected: sqrt(maxMinus1)
a = maxMinus1;
console.log(squareRoot(a));

// Expected: sqrt(max)
a = max;
console.log(squareRoot(a));
console.log("Fin test Raiz()")

console.log("Inicio test Potencia()")
console.log("Fijo a y muevo b")
a = nominal;

// Expected: 0
b = r1;
console.log(power(a, b));

// Expected: 0
b = r2;
console.log(power(a, b));

// Expected: 0
b = min;
console.log(power(a, b));

// Expected: 0
b = minPlus1;
console.log(power(a, b));

// Expected: Zero to the power of zero
b = nominal;
console.log(power(a, b));

// Expected: 0
b = maxMinus1;
console.log(power(a, b));

// Expected: 0
b = max;
console.log(power(a, b));

console.log("Fijo b y muevo a")
b = nominal;

// Expected: 1
a = r1;
console.log(power(a, b));

// Expected: 1
a = r2;
console.log(power(a, b));

// Expected: 1
a = min;
console.log(power(a, b));

// Expected: 1
a = minPlus1;
console.log(power(a, b));

// Expected: Zero to the power of zero
a = nominal;
console.log(power(a, b));

// Expected: 1
a = maxMinus1;
console.log(power(a, b));

// Expected: 1
a = max;
console.log(power(a, b));
console.log("Fin test Potencia()")
