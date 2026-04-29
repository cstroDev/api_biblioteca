import { alterarFuncionario } from '../../repository/funcionarioRepository';
import { validarCamposObrigatoriosFuncionarioAlteracao } from '../../validation/funcionario/validarCamposObrigatoriosFuncionario.js';
import bcrypt from 'bcrypt';

export default async function alterarFuncionarioService(funcionario, id) {
    validarCamposObrigatoriosFuncionarioAlteracao(funcionario);

    let linhasAfetadas = await alterarFuncionario(funcionario, id);
    
    funcionario.senha = await bcrypt.hash(funcionario.senha, 10);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum funcionário alterado.');
}