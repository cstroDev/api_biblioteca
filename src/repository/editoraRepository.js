import con from './connection.js';

export async function inserirEditora(editora) {
    let comando = `
        INSERT INTO tb_editoras (nm_nome)
        VALUES (?)
    `;

    let resposta = await con.query(comando, [editora.nome]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarEditora() {
    let comando = `
        SELECT id_editora      id,
               nm_nome         nome,
               dt_criado_em    criado_em, 
               dt_alterado_em  alterado_em
        FROM   tb_editoras 
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarEditoraPorId(id) {
    let comando = `
        SELECT id_editora      id,
               nm_nome         nome,
               dt_criado_em    criado_em, 
               dt_alterado_em  alterado_em
        FROM   tb_editoras
        WHERE  id_editora = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarEditora(editora, id) {
    let comando = `
        UPDATE tb_editoras
        SET    nm_nome = ?
        WHERE  id_editora = ?
    `;

    let resposta = await con.query(comando, [editora.nome, id]);
    let info = resposta[0];

    return info.affectedRows;
}