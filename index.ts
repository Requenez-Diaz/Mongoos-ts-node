import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors'
import { appRouter } from "./router";

const app = express();
appRouter(app)



app.listen (3000, ( )=> {
    console.log('server is running on http://localhost:3000');
    
});
