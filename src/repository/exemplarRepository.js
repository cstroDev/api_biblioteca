import con from './connection.js';

export async function inserirExemplar(exemplar) {
    let comando = `
        INSERT INTO tb_exemplares (id_livro, ds_codigo)
        VALUES (?, ?)
    `;

    let resposta = await con.query(comando, [exemplar.livro, exemplar.codigo, exemplar.status]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarExemplar() {
    let comando = `
        SELECT id_exemplar     id,
               id_livro        idLivro,
               ds_codigo       codigo,
               st_status       status,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_exemplares
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarExemplarPorId(id) {
    let comando = `
        SELECT id_exemplar     id,
               id_livro        idLivro,
               ds_codigo       codigo,
               st_status       status,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_exemplares
        WHERE  id_exemplar = ?
    `;

    let resposta = await con.query(comando, [id]);
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