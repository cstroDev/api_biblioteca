import { consultarExemplar } from '../../repository/exemplarRepository.js';

export default async function consultarExemplarService() {
    let registros = await consultarExemplar();

    if (registros.length == 0)
        throw new Error('Nenhuma exemplar encontrada.');
    
    return registros;
}