import express from 'express';
import categoriaController from './controller/categoriasController.js';

export default function adicionarRotas(servidor) {
    servidor.use(categoriaController);
}