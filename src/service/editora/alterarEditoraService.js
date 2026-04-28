import { alterarEditora } from '../../repository/editoraRepository.js';
import { validarCamposObrigatoriosEditora } from '../../validation/editora/validarCamposObrigatoriosEditora.js';

export default async function alterarEditoraService(editora, id) {
    validarCamposObrigatoriosEditora(editora);

    let linhasAfetadas = await alterarEditora(editora, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma editora foi alterada.');

    return linhasAfetadas;
}