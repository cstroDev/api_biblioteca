import { inserirExemplar } from '../../repository/exemplarRepository.js';
import { validarCamposObrigatoriosExemplar } from '../../validation/exemplar/validarCamposObrigatoriosExemplar.js';

export default async function inserirExemplarService(exemplar) {
    validarCamposObrigatoriosExemplar(exemplar);

    let id = await inserirExemplar(exemplar);

    return id;
}