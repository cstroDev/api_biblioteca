import inserirCategoriaService from '../service/categoria/inserirCategoriaService.js';
import consultarCategoriaService from '../service/categoria/consultarCategoriaService.js';

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

export default endpoints;