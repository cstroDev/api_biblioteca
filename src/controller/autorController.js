import inserirAutorService from '../service/autor/inserirAutorService.js';
import consultarAutorService from '../service/autor/consultarAutorService.js';
import consultarAutorPorIdService from '../service/autor/consultarAutorPorIdService.js';
import alterarAutorService from '../service/autor/alterarAutorService.js';
import deletarAutorService from '../service/autor/deletarAutorService.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/autores', async (req, resp) => {
    try {
        let autor = req.body;

        let id = await inserirAutorService(autor);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/autores', async (req, resp) => {
    try {
        let registros = await consultarAutorService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/autores/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarAutorPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/autores/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let autor = req.body;

        await alterarAutorService(autor, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/autores/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarAutorService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;