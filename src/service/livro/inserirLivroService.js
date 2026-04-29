import { inserirLivro } from '../../repository/livroRepository.js';
import { validarCamposObrigatoriosLivro } from '../../validation/livro/validarCamposObrigatoriosLivro.js';

export default async function inserirLivroService(livro) {
    validarCamposObrigatoriosLivro(livro);

    let id = await inserirLivro(livro);

    return id;
}