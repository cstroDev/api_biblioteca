import inserirLivroService from '../service/livro/inserirLivroService.js';
import consultarLivroService from '../service/livro/consultarLivroService.js';
import consultarLivroPorIdService from '../service/livro/consultarLivroPorIdService.js';
import alterarLivroService from '../service/livro/alterarLivroService.js';
import deletarLivroService from '../service/livro/deletarLivroService.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/livros', async (req, resp) => {
    try {
        let livro = req.body;

        let id = await inserirLivroService(livro);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/livros', async (req, resp) => {
    try {
        let registros = await consultarLivroService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/livros/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarLivroPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/livros/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let livro = req.body;

        await alterarLivroService(livro, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/livros/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarLivroService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;