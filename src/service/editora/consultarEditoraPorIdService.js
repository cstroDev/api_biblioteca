import { consultarEditoraPorId } from '../../repository/editoraRepository.js';

export default async function consultarEditoraPorIdService(id) {
    let registros = await consultarEditoraPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhuma editora encontrada.');
        
    return registros;
}