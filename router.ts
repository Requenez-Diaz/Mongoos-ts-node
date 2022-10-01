import { Router, request, response, NextFunction, Express } from "express"

export const appRouter = (app: Express) => {
    // const router = Router();

    app.get('/hola', (req, res, next) => {
        //primero ruta, despues funcion flecha
        res.json({ 'message': "Hola" })

    });

    app.get('/saludo', (req, res, next) => {
        //primero ruta, despues funcion flecha
        res.json({ 'message': "Hola" })

    });
}