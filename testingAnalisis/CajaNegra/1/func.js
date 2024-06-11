// Practico de Caja Negra: Analisis y Diseño de Sistemas

//  a) Un programador ha implementado un programa que realiza el siguiente cálculo
//  matemático √(a+b) /√(c-a), donde a, b y c son números enteros. Diseñe los casos de
//  prueba utilizando el criterio de valor límite.

const min = Number.NEGATIVE_INFINITY
const minPlus1 = Number.NEGATIVE_INFINITY + 1
const nominal = 0
const maxMinus1 = Number.POSITIVE_INFINITY - 1
const max = Number.POSITIVE_INFINITY
// Valores robustos
const r1 = (Number.NEGATIVE_INFINITY - 1)
const r2 = (Number.POSITIVE_INFINITY + 1)

let res1 = document.getElementById("res1"); // Robusto
let res2 = document.getElementById("res2"); // Robusto
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4");
let res5 = document.getElementById("res5");
let res6 = document.getElementById("res6");
let res7 = document.getElementById("res7");
let res8 = document.getElementById("res8"); // Robusto
let res9 = document.getElementById("res9"); // Robusto
let res10 = document.getElementById("res10");
let res11 = document.getElementById("res11");
let res12 = document.getElementById("res12");
let res13 = document.getElementById("res13");
let res14 = document.getElementById("res14");
let res15 = document.getElementById("res15");   // Robusto
let res16 = document.getElementById("res16");   // Robusto
let res17 = document.getElementById("res17");
let res18 = document.getElementById("res18");
let res19 = document.getElementById("res19");
let res20 = document.getElementById("res20");
let res21 = document.getElementById("res21");

let a = nominal
let b = r1
let c = r2

function calcMat() {
    return ((c - a) == 0) ? " Error: Division por cero" :
        ((c - a) < 0 || (a + b) < 0) ? " Error: Raiz de un negativo" :
            (a == r1 || a == r2 || b == r1 || b == r2 || c == r1 || c == r2) ? " Error: Entero fuera de rango" :
                Math.sqrt(a + b) / Math.sqrt(c - a)
}

function updateResN(resN) {
    resN.innerText += calcMat()
}

// Valores con a = nominal y muevo b y c

updateResN(res1)

b = r2
c = r2
updateResN(res2)

b = min
c = min
updateResN(res3)

b = minPlus1
c = minPlus1
updateResN(res4)

b = nominal
c = nominal
updateResN(res5)

b = maxMinus1
c = maxMinus1
updateResN(res6)

b = max
c = max
updateResN(res7)

// Valores con b = nominal y muevo a y c
b = nominal

a = r1
c = r1
updateResN(res8)

a = r2
c = r2
updateResN(res9)

a = min
c = min
updateResN(res10)

a = minPlus1
c = minPlus1
updateResN(res11)

a = nominal
c = nominal
updateResN(res12)

a = maxMinus1
c = maxMinus1
updateResN(res13)

a = max
c = max
updateResN(res14)

// Valores con c = nominal y muevo a y b
c = nominal

a = r1
b = r1
updateResN(res15)

a = r2
b = r2
updateResN(res16)

a = min
b = min
updateResN(res17)

a = minPlus1
b = minPlus1
updateResN(res18)

a = nominal
b = nominal
updateResN(res19)

a = maxMinus1
b = maxMinus1
updateResN(res20)

a = max
b = max
updateResN(res21)
