export function validarCamposObrigatoriosEditora(editora) {
    if (!editora.nome)
        throw new Error('Nome da editora é obrigatório.');
}