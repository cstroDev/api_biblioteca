import inserirExemplarService from '../service/exemplar/inserirExemplarService.js';
import consultarExemplarService from '../service/exemplar/consultarExemplarService.js';
import consultarExemplarPorIdService from '../service/exemplar/consultarExemplarPorIdService.js';
import alterarExemplarService from '../service/exemplar/alterarExemplarService.js';
import deletarExemplarService from '../service/exemplar/deletarExemplarService.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/exemplares', async (req, resp) => {
    try {
        let exemplar = req.body;

        let id = await inserirExemplarService(exemplar);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/exemplares', async (req, resp) => {
    try {
        let registros = await consultarExemplarService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/exemplares/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarExemplarPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/exemplares/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let exemplar = req.body;

        await alterarExemplarService(exemplar, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/exemplares/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarExemplarService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;