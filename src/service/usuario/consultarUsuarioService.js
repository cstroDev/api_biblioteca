import { consultarUsuario } from '../../repository/usuarioRepository.js';

export default async function consultarUsuarioService() {
    let registros = await consultarUsuario();

    if (registros.length == 0)
        throw new Error('Nenhum usuário encontrado.');
        
    return registros;
}