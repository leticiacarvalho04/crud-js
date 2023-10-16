const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'fatec23',
    database:'crud'
})

function cadastrarLivraria(id,nome){
    conn.connect((err)=>{
        if(err) throw err;
        let sql = `INSERT INTO livraria (id, nome) VALUES ('${id}','${nome}')`
        conn.query(sql,(err)=>{
            if(err) throw err;
            console.log(`Cadastrado!`);
        });
    })
}

function inserirLivro(id,titulo,descricao,preco,livraria_id){
    conn.connect((err)=>{
        if(err) throw err;
        let sql = `INSERT INTO livros (id,titulo, descricao, preco, livraria_id) VALUES ('${id}','${titulo}', '${descricao}', '${preco}', '${livraria_id}')`
        conn.query(sql,(err,results)=>{
            if(err) throw err;
            console.log(`| Inserido! |\n`,results[1]);
        });
    });
};

function limparBancoDeDados() {
    conn.connect((err) => {
        if (err) throw err;

        const tabelas = ['livros', 'livraria']; // Adicione o nome de outras tabelas se necessário

        tabelas.forEach((tabela) => {
            let sql = `DELETE FROM ${tabela}`;
            conn.query(sql, (err) => {
                if (err) throw err;
                console.log(`Tabela ${tabela} limpa.`);
            });
        });
    });
}

function updateLivro(titulo,preco){
    conn.connect((err)=>{
        if(err) throw err;
        const sql =`UPDATE livros SET titulo='${titulo}' , preco=${preco} WHERE id=1`
        conn.query(sql,(err)=>{
            if(err) throw err;
            console.log(`| Atualizado! |`);
        });
    });
}

function deleteLivro(id){
    conn.connect((err)=>{
        if(err) throw err;
        const sql =`DELETE FROM livros WHERE id='${id}'`
        conn.query(sql,(err)=>{
            if(err) throw err;
            console.log(`| Deletado! |`);
        });
    });
}

function readLivros() {
    conn.connect((err) => {
        if (err) throw err;
        const sql = `SELECT * FROM livros`;
        conn.query(sql, (err, result) => {
            if (err) throw err;
            console.log('\nListagem dos livros:');
            console.log('--------------------------------');
            result.forEach((livro) => {
                console.log('ID:', livro.id);
                console.log('Título:', livro.titulo);
                console.log('Descrição:', livro.descricao);
                console.log('Preço:', livro.preco);
                console.log('ID da Livraria:', livro.livraria_id,'\n');
            });
        });
    });
}

function listarLivrosELivrarias(){
    conn.connect((err)=>{
        if(err) throw err;
        let sql = `
            SELECT livraria.nome as nome_livraria, livros.titulo as titulo_livro
            FROM livraria
            JOIN livros ON livraria.id = livros.livraria_id
        `;
        conn.query(sql,(err, result)=>{
            if(err) throw err;
            console.log('Listagem de Livrarias e Livros:');
            console.log('------------------------------------------------');
            result.forEach((row) => {
                console.log('Nome da Livraria:', row.nome_livraria);
                console.log('Título do Livro:', row.titulo_livro,'\n');
            });
        });
    });
}

    module.exports = {
        inserirLivro,
        updateLivro,
        deleteLivro,
        readLivros,
        listarLivrosELivrarias,
        cadastrarLivraria,
        limparBancoDeDados
    };