import inserirUsuarioService from '../service/usuario/inserirUsuarioService.js';
import consultarUsuarioService from '../service/usuario/consultarUsuarioService.js';
import consultarUsuarioPorIdService from '../service/usuario/consultarUsuarioPorIdService.js';
import alterarUsuarioService from '../service/usuario/alterarUsuarioService.js';
import deletarUsuarioService from '../service/usuario/deletarUsuarioService.js';

import { Router } from 'express';
const endoints = Router();

endoints.post('/usuarios', async (req, resp) => {
    try {
        let usuario = req.body;

        let id = await inserirUsuarioService(usuario);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endoints.get('/usuarios', async (req, resp) => {
    try {
        let registros = await consultarUsuarioService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endoints.get('/usuarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarUsuarioPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endoints.put('/usuarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let usuario = req.body;

        await alterarUsuarioService(usuario, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endoints.delete('/usuarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarUsuarioService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endoints;