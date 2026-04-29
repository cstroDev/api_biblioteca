export function validarCamposObrigatoriosFuncionario(funcionario) {
    if (!funcionario.nome)
        throw new Error('Nome do funcionário é obrigatório.');

    if (!funcionario.email)
        throw new Error('Email do funcionário é obrigatório.');

    if (!funcionario.senha)
        throw new Error('Senha do funcionário é obrigatório.');

    if (!funcionario.cargo)
        throw new Error('Cargo do funcionário é obrigatório.');
}

export function validarCamposObrigatoriosFuncionarioAlteracao(funcionario) {
    if (!funcionario.nome)
        throw new Error('Nome do funcionário é obrigatório.');

    if (!funcionario.email)
        throw new Error('Email do funcionário é obrigatório.');

    if (!funcionario.senha)
        throw new Error('Senha do funcionário é obrigatório.');

    if (!funcionario.cargo)
        throw new Error('Cargo do funcionário é obrigatório.');

    if (funcionario.ativo == null)
        throw new Error('Status do funcionário é obrigatório.');
}