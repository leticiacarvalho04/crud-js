create database crud;

use crud;

create table livraria(
    id int not null primary key,
    nome varchar(45)
);

create table livros(
    id int not null primary key auto_increment,
    titulo varchar(50) not null,
    descricao varchar(255),
    preco decimal(10, 2), -- Corrigido o tipo de dados para preço
    livraria_id int not null,
    foreign key(livraria_id) references livraria(id) -- Corrigido a chave estrangeira
);