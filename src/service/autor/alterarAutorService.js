import { alterarAutor } from '../../repository/autorRepository.js';
import { validarCamposObrigatoriosAutor } from '../../validation/autor/validarCamposObrigatoriosAutor.js';

export default async function alterarAutorService(autor, id) {
    validarCamposObrigatoriosAutor(autor);

    let linhasAfetadas = alterarAutor(autor, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum autor alterado.');
}