import { inserirUsuario } from '../../repository/usuarioRepository.js';
import { validarCamposObrigatoriosUsuario } from '../../validation/usuario/validarCamposObrigatoriosUsuario.js';

export default async function inserirUsuarioService(usuario) {
    validarCamposObrigatoriosUsuario(usuario);

    let id = await inserirUsuario(usuario);

    return id;
}