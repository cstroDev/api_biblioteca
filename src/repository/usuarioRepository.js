import con from './connection.js';

export async function inserirUsuario(usuario) {
    let comando = `
        INSERT INTO tb_usuarios (nm_nome, ds_email, ds_cpf, nr_telefone, ds_tipo)
        VALUES (?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [usuario.nome, usuario.email, usuario.cpf, usuario.telefone, usuario.tipo]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarUsuario() {
    let comando = `
        SELECT id_usuario      id,
               nm_nome         nome,
               ds_email        email,
               ds_cpf          CPF,
               nr_telefone     telefone,
               ds_tipo         tipo,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_usuarios        
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarUsuarioPorId(id) {
    let comando = `
        SELECT id_usuario      id,
               nm_nome         nome,
               ds_email        email,
               ds_cpf          CPF,
               nr_telefone     telefone,
               ds_tipo         tipo,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_usuarios
        WHERE id_usuario = ? 
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarUsuario(usuario, id) {
    let comando = `
        UPDATE tb_usuarios
        SET    nm_nome = ?,
               ds_email = ?,
               ds_cpf = ?,
               nr_telefone = ?,
               ds_tipo = ?,
               bt_ativo = ?
        WHERE  id_usuario = ?  
    `;
    
    let resposta = await con.query(comando, [usuario.nome, usuario.email, usuario.cpf, usuario.telefone, usuario.tipo, usuario.ativo, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarUsuario(id) {
    let comando = `
        DELETE FROM tb_usuarios
        WHERE id_usuario = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}