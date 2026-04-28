import express from 'express';
import categoriaController from './controller/categoriasController.js';
import editoraController from './controller/editoraController.js';

export default function adicionarRotas(servidor) {
    servidor.use(categoriaController);
    servidor.use(editoraController);
}