import { inserirAutor } from '../../repository/autorRepository.js';
import { validarCamposObrigatoriosAutor } from '../../validation/autor/validarCamposObrigatoriosAutor.js';

export default async function inserirAutorService(autor) {
    validarCamposObrigatoriosAutor(autor);

    let id = await inserirAutor(autor);

    return id;
}