import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cardRoute  from './routes/cardRoute.js';
import cors from 'cors';
const app = express();

//middleware parsing request body?
app.use(express.json());

//middleware para politicas de cors
// (*) -> default, permite todas as conexões
// estou usando custom
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['Content-Type'],
//     })
// );



app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Bem vindo ao christmas card.');
})

app.use('/', cardRoute);

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log("App conectou com o BD 🪑");
        app.listen(PORT, ()=> { //só abre o server se foi conectado com o BD
            console.log(`App is on fire 🔥 - port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error)
    });