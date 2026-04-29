import { consultarAutor } from '../../repository/autorRepository.js';

export default async function consultarAutorService() {
    let registros = await consultarAutor();

    if (registros.length == 0)
        throw new Error('Nenhum autor encontrado.');

    return registros;
}