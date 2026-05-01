export function validarCamposObrigatoriosExemplar(exemplar) {
    if (!exemplar.livro)
        throw new Error('Identificador do livro é obrigatório.');
        
    if (!exemplar.codigo)
        throw new Error('Código do livro é obrigatório.');

    if (!exemplar.status)
        throw new Error('Status do livro é obrigatório.');
}