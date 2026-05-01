import { deletarExemplar } from '../../repository/exemplarRepository.js';

export default async function deletarExemplarService(id) {
    let linhasAfetadas = await deletarExemplar(id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma exemplar deletada.');
}