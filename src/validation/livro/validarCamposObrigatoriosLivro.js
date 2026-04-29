export function validarCamposObrigatoriosLivro(livro) {
    if (!livro.categoria)
        throw new Error('Categoria do livro é obrigatório.');

    if (!livro.editora)
        throw new Error('Editora do livro é obrigatório.');

    if (!livro.autor)
        throw new Error('Autor do livro é obrigatório.');

    if (!livro.titulo)
        throw new Error('Titulo do livro é obrigatório.');

    if (!livro.ano)
        throw new Error('Ano do livro é obrigatório.');

    if (!livro.isbn)
        throw new Error('Isbn do livro é obrigatório.');

    if (!livro.sinopse)
        throw new Error('Sinopse do livro é obrigatório.');
}

export function validarCamposObrigatoriosLivroAlteracao(livro) {
    if (!livro.categoria)
        throw new Error('Categoria do livro é obrigatório.');

    if (!livro.editora)
        throw new Error('Editora do livro é obrigatório.');

    if (!livro.autor)
        throw new Error('Autor do livro é obrigatório.');

    if (!livro.titulo)
        throw new Error('Título do livro é obrigatório.');

    if (!livro.ano)
        throw new Error('Ano do livro é obrigatório.');

    if (!livro.isbn)
        throw new Error('Isbn do livro é obrigatório.');

    if (!livro.sinopse)
        throw new Error('Sinopse do livro é obrigatório.');
    
    if (livro.ativo == null)
        throw new Error('Status do livro é obrigatório.');
}