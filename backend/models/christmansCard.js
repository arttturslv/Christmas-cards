import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
    {
        cardId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        sender: {
            type: String,
            required: true,
        },
        receiver: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        eTop: {
            type: String,
            required: true,
        },
        eBottom: {
            type: String,
            required: true,
        },
        eEffect: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true,
    }
    );

export const Card = mongoose.model('Card', cardSchema);