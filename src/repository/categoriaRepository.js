import con from './connection.js';

export async function inserirCategoria(categoria) {
    let comando = `
        INSERT INTO tb_categorias (nm_nome)
        VALUES (?)
    `;

    let resposta = await con.query(comando, [categoria.nome]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCategoria() {
    let comando = `
        SELECT id_categoria     id,
               nm_nome          nome,
               dt_criado_em     criado_em,
               dt_alterado_em   alterado_em
        FROM   tb_categorias
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarCategoriaPorId(id) {
    let comando = `
        SELECT id_categoria     id,
               nm_nome          nome,
               dt_criado_em     criado_em,
               dt_alterado_em   alterado_em
        FROM   tb_categorias
        WHERE  id_categoria = ? 
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarCategoria(categoria, id) {
    let comando = `
        UPDATE tb_categorias
        SET    nm_nome = ?
        WHERE  id_categoria = ?
    `;

    let resposta = await con.query(comando, [categoria.nome, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarCategoria(id) {
    let comando = `
        DELETE  FROM tb_categorias
        WHERE id_categoria = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}