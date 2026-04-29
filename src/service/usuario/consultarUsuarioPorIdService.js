import { consultarUsuarioPorId } from '../../repository/usuarioRepository.js';

export default async function consultarUsuarioPorIdService(id) {
    let registros = await consultarUsuarioPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhum usuário encontrado.');
        
    return registros[0];
}