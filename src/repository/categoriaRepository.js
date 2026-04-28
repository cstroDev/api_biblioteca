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
        FROM tb_categorias
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}