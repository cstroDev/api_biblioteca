import { inserirCategoria } from '../../repository/categoriaRepository.js';

export default async function inserirCategoriaService(categoria) {
    let id = await inserirCategoria(categoria);

    return id;
}