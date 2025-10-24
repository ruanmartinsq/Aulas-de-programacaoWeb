console.log("Script carregado");

const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo alterado com Js";

const botao = document.getElementById("botao");
botao.addEventListener("click", function() {
  alert("Você clicou no botão!");
});

const nome = "Ruan";
let idade = 19;

console.log("Nome:", nome);
console.log("Idade inicial:", idade);

idade = 20;
console.log("Idade após reatribuição:", idade);

const produto = {
  nome: "Celular",
  valor: 2500
};

console.log("Produto inicial:", produto);
produto.valor = 3000;

console.log("Produto após modificação:", produto);
