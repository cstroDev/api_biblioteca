export function validarCamposObrigatoriosCategoria(categoria) {
    if(!categoria.nome)
        throw new Error('Nome da categoria é obrigatório.');
}