import { deletarCategoria } from '../../repository/categoriaRepository.js';

export default async function deletarCategoriaService(id) {
    let linhasAfetadas = await deletarCategoria(id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma categoria deletada.');
}