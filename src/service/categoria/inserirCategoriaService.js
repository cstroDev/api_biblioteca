import { inserirCategoria } from '../../repository/categoriaRepository.js';
import { validarCamposObrigatoriosCategoria } from '../../validation/categoria/validarCamposObrigatoriosCategoria.js';

export default async function inserirCategoriaService(categoria) {
    validarCamposObrigatoriosCategoria(categoria);
    
    let id = await inserirCategoria(categoria);

    return id;
}