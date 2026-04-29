import { deletarAutor } from '../../repository/autorRepository.js';

export default async function deletarAutorService(id) {
    let linhasAfetadas = await deletarAutor(id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum autor deletado.');
}