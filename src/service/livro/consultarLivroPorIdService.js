import { consultarLivroPorId } from '../../repository/livroRepository.js';

export default async function consultarLivroPorIdService(id) {
    let registros = await consultarLivroPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhum livro encontrado.');

    return registros[0];
}