import { alterarCategoria } from '../../repository/categoriaRepository.js';
import { validarCamposObrigatoriosCategoria } from '../../validation/categoria/validarCamposObrigatoriosCategoria.js';

export default async function alterarCategoriaService(categoria, id) {
    validarCamposObrigatoriosCategoria(categoria);

    let linhasAfetadas = await alterarCategoria(categoria, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma categoria alterada.');  
}