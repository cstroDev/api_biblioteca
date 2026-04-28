import { consultarCategoriaPorId } from '../../repository/categoriaRepository.js';

export default async function consultarCategoriaPorIdService(id) {
    let registros = await consultarCategoriaPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhuma categoria encontrada.');

    return registros[0];
}