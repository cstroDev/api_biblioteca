import inserirExemplarService from '../service/exemplar/inserirExemplarService.js';
import consultarExemplarService from '../service/exemplar/consultarExemplarService.js';

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

export default endpoints;