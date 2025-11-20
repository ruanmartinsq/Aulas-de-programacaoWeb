const listaDeCompras = ["Talco", "Frango", "Mussarela", "Presunto", "Ovo"];
console.log("Lista original:", listaDeCompras);

listaDeCompras.push("Arroz");
listaDeCompras.shift();

console.log("Após adicionar e remover:", listaDeCompras);
const itensComMaisDe5 = listaDeCompras.filter(item => item.length > 5);
console.log("Itens com mais de 5 caracteres:", itensComMaisDe5);    

console.log("//////////////////////////////////////////////");

let frase = " JavaScript é uma linguagem poderosa! ";
frase = frase.trim();

const palavras = frase.split(" ");

console.log("Frase sem espaços:", frase);
console.log("Array de palavras:", palavras);
