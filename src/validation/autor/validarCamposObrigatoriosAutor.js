export function validarCamposObrigatoriosAutor(autor) {
    if (!autor.nome)
        throw new Error('Nome do autor é obrigatório.');
}