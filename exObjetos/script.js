let livro = {
    titulo: "The Witcher",
    autor: "Ruan",
    paginas: 190 ,
    disponivel: true
};

console.log(livro.titulo);
console.log(livro['autor']);

livro.editora = "RuanCorporation's";

livro.detalhes = function() {
  return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Disponível: ${this.disponivel}, Editora: ${this.editora}`;
};

console.log(livro.detalhes());

let biblioteca = { 
    livros: [] 
}; 

biblioteca.livros.push(livro);
console.log(biblioteca);

console.log("///////////////////////////////////////////////////");

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("PAULO"));

function calcularMedia (n1, n2, n3) {
    return (n1 + n2 + n3) / 3; 
}

console.log("Média: ", calcularMedia(10, 10, 10));

function apresentarProduto(nomeProduto = "x", preco = 0) {
    console.log(`Produto, ${nomeProduto} || Preço, R$ ${preco}`);
}

apresentarProduto("POTE DE MAIONESE", 190)




