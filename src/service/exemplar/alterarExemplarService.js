import { alterarExemplar } from '../../repository/exemplarRepository.js';
import { validarCamposObrigatoriosExemplar } from '../../validation/exemplar/validarCamposObrigatoriosExemplar.js';

export default async function alterarExemplarService(exemplar, id) {
    validarCamposObrigatoriosExemplar(exemplar);

    let linhasAfetadas = await alterarExemplar(exemplar, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhuma exemplar alterada.');
}