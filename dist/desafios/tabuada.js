"use strict";
const numberTabuada = 9;
for (let i = 1; i <= 10; i++) {
    if (numberTabuada > 10 || numberTabuada < 1) {
        i = 10;
        console.log("Numero invalido, a tabuada é apenas para os números de 1 até 10.");
    }
    else {
        console.log(`${numberTabuada} x ${i} = ${numberTabuada * i} `);
    }
}
//# sourceMappingURL=tabuada.js.map