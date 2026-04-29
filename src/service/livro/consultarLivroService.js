import { consultarLivro } from '../../repository/livroRepository.js';

export default async function consultarLivroService() {
    let registros = await consultarLivro();

    if (registros.length == 0)
        throw new Error('Nenhum livro encontrado.');

    return registros;
}