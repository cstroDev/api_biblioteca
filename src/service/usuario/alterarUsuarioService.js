import { alterarUsuario } from '../../repository/usuarioRepository.js';
import { validarCamposObrigatoriosUsuarioAlteracao } from '../../validation/usuario/validarCamposObrigatoriosUsuario.js';

export default async function alterarUsuarioService(usuario, id) {
    validarCamposObrigatoriosUsuarioAlteracao(usuario);

    let linhasAfetadas = await alterarUsuario(usuario, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum usuário alterado.');
}