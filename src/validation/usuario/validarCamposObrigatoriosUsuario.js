export function validarCamposObrigatoriosUsuario(usuario) {
    if (!usuario.nome)
        throw new Error('Nome do usuário é obrigatório.');
    
    if (!usuario.email)
        throw new Error('Email do usuário é obrigatório.');

    if (!usuario.cpf)
        throw new Error('CPF do usuário é obrigatório.');

    if (!usuario.telefone)
        throw new Error('Telefone do usuário é obrigatório.');

    if (!usuario.tipo)
        throw new Error('Tipo do usuário é obrigatório.');
}

export function validarCamposObrigatoriosUsuarioAlteracao(usuario) {
    if (!usuario.nome)
        throw new Error('Nome do usuário é obrigatório.');
    
    if (!usuario.email)
        throw new Error('Email do usuário é obrigatório.');

    if (!usuario.cpf)
        throw new Error('CPF do usuário é obrigatório.');

    if (!usuario.telefone)
        throw new Error('Telefone do usuário é obrigatório.');

    if (!usuario.tipo)
        throw new Error('Tipo do usuário é obrigatório.');

    if (usuario.ativo == null)
        throw new Error('Status do usuário é obrigatório.');
}