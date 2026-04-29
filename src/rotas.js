import express from 'express';
import categoriaController from './controller/categoriaController.js';
import editoraController from './controller/editoraController.js';
import autorController from './controller/autorController.js';
import livroController from './controller/livroController.js';
import usuarioController from './controller/usuarioController.js';

export default function adicionarRotas(servidor) {
    servidor.use(categoriaController);
    servidor.use(editoraController);
    servidor.use(autorController);
    servidor.use(livroController);
    servidor.use(usuarioController);
}