import { buscarFuncionarioPorEmail } from '../../repository/funcionarioRepository.js';
import bcrypt from 'bcrypt';

export default async function loginFuncionarioService(funcionario) {
    let funcionarioBanco = await buscarFuncionarioPorEmail(funcionario.email);

    if (!funcionarioBanco)
        throw new Error('Email ou senha inválidos.');

    let senhaCorreta = await bcrypt.compare(funcionario.senha, funcionarioBanco.ds_senha);

    if (!senhaCorreta)
        throw new Error('Email ou senha inválidos.');

    return funcionarioBanco;
}