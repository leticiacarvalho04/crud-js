const { inserirLivro, listarLivrosELivrarias, updateLivro, deleteLivro, readLivros, cadastrarLivraria, limparBancoDeDados } = require("./consultas");

limparBancoDeDados() // limpar o banco de dados caso queira recadastrar
cadastrarLivraria(1,'Intrinseca');
cadastrarLivraria(2,'Universo dos livros');

console.log(`Cadastro das livrarias realizado!`);

inserirLivro(1,'A rainha vermelha','surpreendente', 28.90, 1);
inserirLivro(2,'Melhor do que nos filmes','apaixonante', 48.40, 1);
inserirLivro(3,'Estilhaça-me','boom!', 20.50,2);

console.log(`Livros inseridos!`);

console.log('Inserido com sucesso\n', readLivros());

updateLivro('Bem-vindos à livraria de Hyunam-Dong', 48.60); 
const livrosAtualizados = readLivros(); 
console.log('Atualizado com sucesso!\n', livrosAtualizados);

deleteLivro(3)
const livrosDeletados = readLivros(); 
console.log('Deletado com sucesso!\n', livrosDeletados);

const livrosELivrarias =  listarLivrosELivrarias();
console.log('listagem das editoras: ',livrosELivrarias);