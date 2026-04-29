import { alterarLivro } from '../../repository/livroRepository.js';
import { validarCamposObrigatoriosLivroAlteracao } from '../../validation/livro/validarCamposObrigatoriosLivro.js';

export default async function alterarLivroService(livro, id) {
    validarCamposObrigatoriosLivroAlteracao(livro);

    let linhasAfetadas = await alterarLivro(livro, id);

    if (linhasAfetadas == 0)
        throw new Error('Nenhum livro alterado.');
}