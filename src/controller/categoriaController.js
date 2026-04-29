import inserirCategoriaService from '../service/categoria/inserirCategoriaService.js';
import consultarCategoriaService from '../service/categoria/consultarCategoriaService.js';
import consultarCategoriaPorIdService from '../service/categoria/consultarCategoriaPorIdService.js';
import alterarCategoriaService from '../service/categoria/alterarCategoriaService.js';
import deletarCategoriaService from '../service/categoria/deletarCategoriaService.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/categorias', async (req, resp) => {
    try {
        let categoria = req.body;

        let id = await inserirCategoriaService(categoria);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/categorias', async (req, resp) => {
    try {
        let registros = await consultarCategoriaService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/categorias/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarCategoriaPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/categorias/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let categoria = req.body;

        await alterarCategoriaService(categoria, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/categorias/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarCategoriaService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;