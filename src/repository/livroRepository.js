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
        SELECT li.id_livro AS id,
               ca.nm_nome AS categoria,
               ed.nm_nome AS editora,
               au.nm_nome AS autor,
               li.nm_titulo AS titulo,
               li.nr_ano AS ano,
               li.ds_isbn AS isbn,
               li.ds_sinopse AS sinopse,
               li.bt_ativo AS ativo,
               li.dt_criado_em AS criado_em,
               li.dt_alterado_em AS alterado_em
        FROM   tb_livros li
        JOIN   tb_categorias ca ON li.id_categoria = ca.id_categoria
        JOIN   tb_editoras ed ON li.id_editora = ed.id_editora
        JOIN   tb_autores au ON li.id_autor = au.id_autor
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarLivroPorId(id) {
    let comando = `
        SELECT li.id_livro AS id,
               ca.nm_nome AS categoria,
               ed.nm_nome AS editora,
               au.nm_nome AS autor,
               li.nm_titulo AS titulo,
               li.nr_ano AS ano,
               li.ds_isbn AS isbn,
               li.ds_sinopse AS sinopse,
               li.bt_ativo AS ativo,
               li.dt_criado_em AS criado_em,
               li.dt_alterado_em AS alterado_em
        FROM   tb_livros li
        JOIN   tb_categorias ca ON li.id_categoria = ca.id_categoria
        JOIN   tb_editoras ed ON li.id_editora = ed.id_editora
        JOIN   tb_autores au ON li.id_autor = au.id_autor
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