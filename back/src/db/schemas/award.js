import { Schema, model } from "mongoose";

const AwardSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true, });

const AwardModel = new Model("Award", AwardSchema);

export { AwardModel };