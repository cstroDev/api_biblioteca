import { consultarEditora } from '../../repository/editoraRepository.js';

export default async function consultarEditoraService() {
    let registros = await consultarEditora();
    
    if (registros.length == 0)
        throw new Error('Nenhuma editora encontrada.');

    return registros;
}