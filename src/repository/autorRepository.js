import con from './connection.js';

export async function inserirAutor(autor) {
    let comando = `
        INSERT INTO tb_autores (nm_nome)
        VALUES (?)
    `;

    let resposta = await con.query(comando, [autor.nome]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarAutor() {
    let comando = `
        SELECT id_autor        id,
               nm_nome         nome,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_autores  
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarAutorPorId(id) {
    let comando = `
        SELECT id_autor        id,
               nm_nome         nome,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_autores
        WHERE  id_autor = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarAutor(autor, id) {
    let comando = `
        UPDATE  tb_autores
        SET     nm_nome = ?
        WHERE   id_autor = ?
    `;

    let resposta = await con.query(comando, [autor.nome, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarAutor(id) {
    let comando = `
        DELETE FROM tb_autores
        WHERE id_autor = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}