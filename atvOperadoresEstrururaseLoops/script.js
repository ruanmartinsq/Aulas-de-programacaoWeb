let x = 5;
let y = 2;

console.log("Soma: ", x + y);
console.log("Divisão: ", x / y);
console.log("Subtração: ", x - y);
console.log("Multiplicação: ", x * y);
console.log("Resto da divisão: ", x % y);
console.log("Exponeciação: ", x ** y);

console.log("x é igual a y?", x == y);
console.log("x é diferente de y?", x != y);
console.log("x é maior que y?", x > y);
console.log("x é menor que y?", x < y);
console.log("x é maior ou igual a y?", x >= y);
console.log("x é menor ou igual a y?", x <= y);

let expressao1 = (x > y) && (x != 0);
let expressao2 = (x < y) || (y > 0);

console.log("Expressão 1 (true):", expressao1);
console.log("Expressão 2 (true):", expressao2);

/////////////////////////////////////////////

let nota = 65;


if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}


let mes = 4;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
        break;
}

let i = 0;
console.log("Números pares de 0 a 20:");
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Recife"];

console.log("Lista de cidades:");
for (let j = 0; j < cidades.length; j++) {
    console.log(cidades[j]);
}

console.log("Números de 10 a 1 (decrescente):");
for (let k = 10; k >= 1; k--) {
    console.log(k);
}