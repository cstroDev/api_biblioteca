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