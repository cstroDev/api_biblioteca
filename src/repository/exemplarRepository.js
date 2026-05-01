import con from './connection.js';

export async function inserirExemplar(exemplar) {
    let comando = `
        INSERT INTO tb_exemplares (id_livro, ds_codigo, st_status)
        VALUES (?, ?, ?)
    `;

    let resposta = await con.query(comando, [exemplar.livro, exemplar.codigo, exemplar.status]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarExemplar() {
    let comando = `
        SELECT ex.id_exemplar AS id,
               li.nm_titulo AS livro,
               ex.ds_codigo AS codigo,
               ex.st_status AS status,
               ex.dt_criado_em AS criado_em,
               ex.dt_alterado_em AS alterado_em
        FROM   tb_exemplares ex
        JOIN   tb_livros li ON ex.id_livro = li.id_livro    
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarExemplarPorId(id) {
    let comando = `
        SELECT ex.id_exemplar AS id,
               li.nm_titulo AS livro,
               ex.ds_codigo AS codigo,
               ex.st_status AS status,
               ex.dt_criado_em AS criado_em,
               ex.dt_alterado_em AS alterado_em
        FROM   tb_exemplares ex
        JOIN   tb_livros li ON ex.id_livro = li.id_livro
        WHERE  id_exemplar = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function consultarExemplarPorLivro(idLivro) {
    let comando = `
        SELECT ex.id_exemplar AS id,
               li.nm_titulo AS livro,
               ex.ds_codigo AS codigo,
               ex.st_status AS status,
               ex.dt_criado_em AS criado_em,
               ex.dt_alterado_em AS alterado_em
        FROM   tb_exemplares ex
        JOIN   tb_livros li ON ex.id_livro = li.id_livro
        WHERE  ex.id_livro = ? 
    `;

    let resposta = await con.query(comando, [idLivro]);
    let registros = resposta[0];

    return registros;
}

export async function alterarExemplar(exemplar, id) {
    let comando = `
        UPDATE tb_exemplares
        SET    id_livro = ?,
               ds_codigo = ?,
               st_status = ? 
        WHERE   id_exemplar = ?
    `;

    let resposta = await con.query(comando, [exemplar.livro, exemplar.codigo, exemplar.status, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarExemplar(id) {
    let comando = `
        DELETE FROM tb_exemplares
        WHERE id_exemplar = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}