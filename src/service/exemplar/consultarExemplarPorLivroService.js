import { consultarExemplarPorLivro } from '../../repository/exemplarRepository.js';

export default async function consultarExemplarPorLivroService(idLivro) {
    let registros = await consultarExemplarPorLivro(idLivro);

    if (registros.length == 0)
        throw new Error('Nenhuma exemplar encontrada.');
        
    return registros;
}