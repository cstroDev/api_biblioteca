import inserirEditoraService from '../service/editora/inserirEditoraService.js';
import consultarEditoraService from '../service/editora/consultarEditoraService.js';
import consultarEditoraPorIdService from '../service/editora/consultarEditoraPorIdService.js';
import alterarEditoraService from '../service/editora/alterarEditoraService.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/editoras', async (req, resp) => {
    try {
        let editora = req.body;
        
        let id = await inserirEditoraService(editora);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/editoras', async (req, resp) => {
    try {
        let registros = await consultarEditoraService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/editoras/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarEditoraPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/editoras/:id',async (req, resp) => {
    try {
        let id = req.params.id
        let editora = req.body 
        await alterarEditoraService(editora,id)
        resp.status(204).send()
    } catch (err) {
         logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;