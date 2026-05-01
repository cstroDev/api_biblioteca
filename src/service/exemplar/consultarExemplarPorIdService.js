import { consultarExemplarPorId } from '../../repository/exemplarRepository.js';

export default async function consultarExemplarPorIdService(id) {
    let registros = await consultarExemplarPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhuma exemplar encontrada.');
        
    return registros[0];
}