import express from 'express';
import {Card} from '../models/christmansCard.js' //Card veio de onde?

const router = express.Router();

//ROUTE PARA CRIAR UM CARD
router.post('/cards', async (request, response) => {
    try {
        const { cardId, title, sender, receiver, message, eTop, eBottom, eEffect } = request.body;

        if (!cardId || !title || !sender || !receiver || !message || !eTop || !eBottom || !eEffect) {
            return response.status(400).send({ message: 'Envie todos os campos!' });
        }

        const newCard = {
            cardId,
            title,
            sender,
            receiver,
            message,
            eTop,
            eBottom,
            eEffect,
        };

        const card = await Card.create(newCard);

        return response.status(201).send(card);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//ROUTE PARA MOSTRAR UM CARD VIA ID
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const card = await Card.findById(id);

        return response.status(200).json({
            data: card
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;