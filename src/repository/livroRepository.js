import con from './connection.js';

export async function inserirLivro(livro) {
    let comando = `
        INSERT INTO tb_livros (id_categoria, id_editora, id_autor, nm_titulo, nr_ano, ds_isbn, ds_sinopse)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [livro.categoria, livro.editora, livro.autor, livro.titulo, livro.ano, livro.isbn, livro.sinopse]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarLivro() {
    let comando = `
        SELECT id_livro        id,
               id_categoria    idCategoria,
               id_editora      idEditora,
               id_autor        idAutor,
               nm_titulo       titulo,
               nr_ano          ano,
               ds_isbn         isbn,
               ds_sinopse      sinopse,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_livros
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarLivroPorId(id) {
    let comando = `
        SELECT id_livro        id,
               id_categoria    idCategoria,
               id_editora      idEditora,
               id_autor        idAutor,
               nm_titulo       titulo,
               nr_ano          ano,
               ds_isbn         isbn,
               ds_sinopse      sinopse,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_livros
        WHERE  id_livro = ? 
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarLivro(livro, id) {
    let comando = `
        UPDATE tb_livros
        SET    id_categoria = ?,
               id_editora = ?,
               id_autor = ?, 
               nm_titulo = ?,   
               nr_ano = ?,      
               ds_isbn = ?,     
               ds_sinopse = ?,  
               bt_ativo = ?
        WHERE  id_livro = ?    
    `

    let resposta = await con.query(comando, [livro.categoria, livro.editora, livro.autor, livro.titulo, livro.ano, livro.isbn, livro.sinopse, livro.ativo, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarLivro(id) {
    let comando = `
        DELETE FROM tb_livros
        WHERE id_livro = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}