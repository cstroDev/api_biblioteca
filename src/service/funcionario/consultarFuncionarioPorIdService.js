import { consultarFuncionarioPorId } from '../../repository/funcionarioRepository.js';

export default async function consultarFuncionarioPorIdService(id) {
    let registros = await consultarFuncionarioPorId(id);

    if (registros.length == 0)
        throw new Error('Nenhum funcionário encontrado.');

    return registros[0];
}