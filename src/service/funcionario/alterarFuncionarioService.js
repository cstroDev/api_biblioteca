import { alterarFuncionario } from '../../repository/funcionarioRepository.js';
import { validarCamposObrigatoriosFuncionarioAlteracao } from '../../validation/funcionario/validarCamposObrigatoriosFuncionario.js';
import bcrypt from 'bcrypt';

export default async function alterarFuncionarioService(funcionario, id) {
    validarCamposObrigatoriosFuncionarioAlteracao(funcionario);
    
    funcionario.senha = await bcrypt.hash(funcionario.senha, 10);

    let linhasAfetadas = await alterarFuncionario(funcionario, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum funcionário alterado.');
}