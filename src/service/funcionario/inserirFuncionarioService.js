import { inserirFuncionario } from '../../repository/funcionarioRepository.js';
import { validarCamposObrigatoriosFuncionario } from '../../validation/funcionario/validarCamposObrigatoriosFuncionario.js';
import bcrypt from 'bcrypt';

export default async function inserirFuncionarioService(funcionario) {
    validarCamposObrigatoriosFuncionario(funcionario);

    funcionario.senha = await bcrypt.hash(funcionario.senha, 10);

    let id = await inserirFuncionario(funcionario);

    return id;
}