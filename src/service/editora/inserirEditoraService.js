import { inserirEditora } from '../../repository/editoraRepository.js';
import { validarCamposObrigatoriosEditora } from '../../validation/editora/validarCamposObrigatoriosEditora.js';

export default async function inserirEditoraService(editora) {
    validarCamposObrigatoriosEditora(editora);

    let id = await inserirEditora(editora);

    return id;
}