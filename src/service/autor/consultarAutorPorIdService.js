import { consultarAutorPorId } from '../../repository/autorRepository.js';

export default async function consultarAutorPorIdService(id) {
    let registros = await consultarAutorPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhum autor encontrado.');

    return registros[0];
}