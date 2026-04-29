import { deletarEditora } from '../../repository/editoraRepository.js';

export default async function deletarEditoraService(id) {
    let linhasAfetadas = await deletarEditora(id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma editora deletada.');
}