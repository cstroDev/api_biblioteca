import con from './connection.js';

export async function inserirFuncionario(funcionario) {
    let comando = `
        INSERT INTO tb_funcionarios (nm_nome, ds_email, ds_senha, ds_cargo)
        VALUES (?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo]);
    let info = resposta[0];

    return info.insertId;
}

export async function buscarFuncionarioPorEmail(email) {
    let comando = `
        SELECT * FROM tb_funcionarios 
        WHERE ds_email = ?
    `;

    let resposta = await con.query(comando, [email]);
    let info = resposta[0];

    return info[0];
}

export async function consultarFuncionario() {
    let comando = `
        SELECT id_funcionario  id,
               nm_nome         nome,
               ds_email        email,
               ds_senha        senha,
               ds_cargo        cargo,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_funcionarios
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarFuncionarioPorId(id) {
    let comando = `
        SELECT id_funcionario  id,
               nm_nome         nome,
               ds_email        email,
               ds_senha        senha,
               ds_cargo        cargo,
               bt_ativo        ativo,
               dt_criado_em    criado_em,
               dt_alterado_em  alterado_em
        FROM   tb_funcionarios
        WHERE  id_funcionario = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarFuncionario(funcionario, id) {
    let comando = `
        UPDATE tb_funcionarios
        SET    nm_nome = ?,
               ds_email = ?,
               ds_senha = ?,
               ds_cargo = ?,
               bt_ativo = ?
        WHERE  id_funcionario = ?
    `;

    let resposta = await con.query(comando, [funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo, funcionario.ativo, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarFuncionario(id) {
    let comando = `
        DELETE FROM tb_funcionarios
        WHERE id_funcionario = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}