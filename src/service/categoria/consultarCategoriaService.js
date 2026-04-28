import { consultarCategoria } from '../../repository/categoriaRepository.js';

export default async function consultarCategoriaService() {
    let registros = await consultarCategoria();

    if (registros.length == 0)
        throw new Error('Nenhuma categoria encontrada.');

    return registros;
}